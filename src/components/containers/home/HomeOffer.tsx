import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogthumb from "public/images/offer/blog-thumb.png";
import two from "public/images/offer/two.png";
import three from "public/images/offer/three.png";
import star from "public/images/offer/star.png";

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Driving Your Business Growth With 360° Marketing
              </h2>
              <div className="paragraph">
                <p>
                  We are a performance-driven digital agency delivering
                  measurable results. From precise ad campaigns to social
                  storytelling, impactful branding, and influencer partnerships,
                  we help brands grow faster, stronger, and smarter.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="/our-services" className="btn btn--secondary">
                  EXPLORE OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/services/performance">
                    Performance Marketing
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src="https://media-public.canva.com/gqfLk/MAGDwsgqfLk/1/tl.png"
                    width={100}
                    height={100}
                    alt="Performance Marketing"
                  />
                </div>
              </div>

              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/services/social">
                    Social Media Marketing
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src="https://media-public.canva.com/PcbAg/MAFO4_PcbAg/1/tl.png"
                    width={100}
                    height={100}
                    alt="Social Media Marketing"
                  />
                </div>
              </div>

              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/services/branding">
                    Branding & Creative
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src="https://media-public.canva.com/W04as/MAGMeZW04as/1/tl.png"
                    width={100}
                    height={100}
                    alt="Branding & Creative"
                  />
                </div>
              </div>

              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/services/influencer">
                    Influencer Marketing
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src="https://media-public.canva.com/uzt7o/MAGMeQuzt7o/1/tl.png"
                    width={100}
                    height={100}
                    alt="Influencer Marketing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" width={100} height={100} />
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeOffer;
