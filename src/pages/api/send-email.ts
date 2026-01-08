import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    const apikey = process.env.NEXT_PUBLIC_ELASTIC_EMAIL_API_KEY;

    if (!apikey) {
      console.error("Elastic Email API key not found");
      return res.status(500).json({
        success: false,
        message: "Email service configuration error",
      });
    }

    // EMAIL 1: Send to company (anuj@digitarmedia.com and tech@digitarmedia.com)
    const adminEmailBody = createAdminEmailTemplate(
      name,
      email,
      phone,
      subject || "No Subject",
      message
    );

    const adminPayload: any = {
      from: "contact@digitarmedia.com",
      fromName: "Contact Form - Digitar Media",
      to: "anuj@digitarmedia.com;tech@digitarmedia.com",
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      bodyHtml: adminEmailBody,
      isTransactional: "true",
      charset: "utf-8",
      encodingType: "4",
      apikey,
    };

    const adminResponse = await fetch(
      "https://api.elasticemail.com/v2/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(adminPayload).toString(),
      }
    );

    const adminResult = await adminResponse.json();

    if (!adminResult.success) {
      throw new Error("Failed to send admin notification email");
    }

    // EMAIL 2: Send thank you email to the customer
    const customerEmailBody = createCustomerEmailTemplate(name);

    const customerPayload: any = {
      from: "contact@digitarmedia.com",
      fromName: "Digitar Media",
      to: email,
      subject: "Thank You for Contacting Digitar Media",
      bodyHtml: customerEmailBody,
      isTransactional: "true",
      charset: "utf-8",
      encodingType: "4",
      apikey,
    };

    const customerResponse = await fetch(
      "https://api.elasticemail.com/v2/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(customerPayload).toString(),
      }
    );

    const customerResult = await customerResponse.json();

    if (!customerResult.success) {
      console.error("Failed to send customer email:", customerResult);
      // Still return success if admin email was sent
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
}

// Admin notification email template
function createAdminEmailTemplate(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                You have received a new message from your website contact form.
              </p>
              
              <!-- Sender Info -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin: 20px 0; border: 1px solid #e5e7eb; border-radius: 6px;">
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #f97316; font-size: 14px;">Name:</strong>
                  </td>
                  <td style="padding: 15px; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #333333; font-size: 14px;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #f97316; font-size: 14px;">Email:</strong>
                  </td>
                  <td style="padding: 15px; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="color: #2563eb; font-size: 14px; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #f97316; font-size: 14px;">Phone:</strong>
                  </td>
                  <td style="padding: 15px; border-bottom: 1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color: #2563eb; font-size: 14px; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb;">
                    <strong style="color: #f97316; font-size: 14px;">Subject:</strong>
                  </td>
                  <td style="padding: 15px;">
                    <span style="color: #333333; font-size: 14px;">${subject}</span>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin: 30px 0;">
                <strong style="color: #f97316; font-size: 16px; display: block; margin-bottom: 10px;">Message:</strong>
                <div style="background-color: #f9fafb; border-left: 4px solid #f97316; padding: 20px; border-radius: 4px;">
                  <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Sender Email Info -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin: 30px 0; background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border-radius: 6px; border: 1px solid #fed7aa;">
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <p style="margin: 0 0 10px 0; color: #9a3412; font-size: 14px; font-weight: 600;">
                      📧 Received from:
                    </p>
                    <p style="margin: 0; color: #ea580c; font-size: 16px; font-weight: 700;">
                      ${email}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This email was sent from the contact form on Digitar Media website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Customer thank you email template
function createCustomerEmailTemplate(name: string): string {
  return `
 
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table cellpadding="0" cellspacing="0" width="100%" style=" padding: 20px 0;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" width="600" style="background-color: #0a0a0a; border: 1px solid rgba(249, 115, 22, 0.3); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(249, 115, 22, 0.2);">
          
          <!-- Logo Space -->
          <tr>
            <td style="padding: 40px 30px 20px 30px; text-align: center; background: linear-gradient(180deg, rgba(249, 115, 22, 0.1) 0%, rgba(0, 0, 0, 0) 100%);">
              <!-- Add your logo here -->
              <div style="width: 150px; height: 60px; margin: 0 auto; background: rgba(249, 115, 22, 0.1); border: 2px dashed rgba(249, 115, 22, 0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
               <img src="https://panel.digitarmedia.com/admin/uploads/digiLogo1767869037.png" alt="Digitar Media Logo" style="max-width: 120px; max-height: 40px;" />
              </div>
            </td>
          </tr>
          
          <!-- Header -->
          <tr>
            <td style="padding: 20px 30px 30px 30px; text-align: center;">
              <h1 style="margin: 0 0 10px 0; color: #f97316; font-size: 32px; font-weight: 700; text-shadow: 0 0 20px rgba(249, 115, 22, 0.3);">Thank You!</h1>
              <p style="margin: 0; color: #9ca3af; font-size: 16px;">We've received your message</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <div style="background: rgba(249, 115, 22, 0.05); border: 1px solid rgba(249, 115, 22, 0.2); border-radius: 8px; padding: 30px; text-align: center;">
                <p style="margin: 0 0 20px 0; color: #e5e7eb; font-size: 16px; line-height: 1.8;">
                  Hi <strong style="color: #f97316;">${name}</strong>,
                </p>
                <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.8;">
                  Thank you for reaching out to us at <strong style="color: #f97316;">Digitar Media</strong>. We appreciate you taking the time to contact us.
                </p>
                <p style="margin: 0; color: #d1d5db; font-size: 15px; line-height: 1.8;">
                  Our team has received your message and will get back to you as soon as possible, typically within <strong style="color: #f97316;">24-48 hours</strong>.
                </p>
              </div>
              
              <!-- CTA Section -->
              <div style="margin-top: 30px; text-align: center;">
                <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 14px;">
                  While you wait, feel free to explore our services
                </p>
                <a href="https://digitarmedia.com" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3); transition: all 0.3s ease;">
                  Visit Our Website
                </a>
              </div>
              
             </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 25px 30px; background: rgba(249, 115, 22, 0.05); border-top: 1px solid rgba(249, 115, 22, 0.2); text-align: center;">
              <p style="margin: 0 0 8px 0; color: #f97316; font-size: 15px; font-weight: 600;">Digitar Media</p>
              <p style="margin: 0; color: #4b5563; font-size: 11px;">
                © ${new Date().getFullYear()} Digitar Media. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Unsubscribe Footer -->
        <table cellpadding="0" cellspacing="0" width="600" style="margin-top: 20px;">
          <tr>
            <td style="text-align: center; padding: 10px;">
              <p style="margin: 0; color: #6b7280; font-size: 11px;">
                This is an automated response to your contact form submission.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
