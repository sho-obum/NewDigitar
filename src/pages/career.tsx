"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CallToAction from "../components/CallToAction";

const CareerPage: React.FC = () => {
	const [selectedJob, setSelectedJob] = useState<number | null>(null);

	const jobOpenings = [
		{
			id: 1,
			title: "Graphic Designer",
			department: "Design",
			location: "Remote / India",
			type: "Full-time",
			experience: "2-4 years",
			salary: "₹40k - ₹70k",
			description:
				"Design beautiful marketing assets, product UI elements and brand systems with an orangish, modern aesthetic.",
			requirements: [
				"Strong portfolio in visual & brand design",
				"Proficiency in Figma/Illustrator/Photoshop",
				"Experience with motion or micro-interactions is a plus",
			],
		},
		{
			id: 2,
			title: "Sales Executive",
			department: "Sales",
			location: "Hybrid / Bangalore",
			type: "Full-time",
			experience: "1-3 years",
			salary: "₹30k - ₹60k",
			description:
				"Drive new business, manage pipelines, and build long-term client relationships.",
			requirements: [
				"Excellent communication & negotiation skills",
				"Proven track record in B2B sales",
				"Comfortable working with targets and CRM tools",
			],
		},
		{
			id: 3,
			title: "Android Developer",
			department: "Engineering",
			location: "Remote / India",
			type: "Full-time",
			experience: "2-5 years",
			salary: "₹60k - ₹110k",
			description:
				"Build performant Android applications using Kotlin, Jetpack Compose and modern architecture patterns.",
			requirements: [
				"Kotlin + Jetpack Compose experience",
				"Knowledge of clean architecture & testing",
				"Familiarity with CI/CD for mobile apps",
			],
		},
		{
			id: 4,
			title: "Business Development Manager",
			department: "Business",
			location: "Remote / US",
			type: "Full-time",
			experience: "3-6 years",
			salary: "₹80k - ₹140k",
			description:
				"Identify strategic partnerships, grow revenue streams and lead GTM initiatives.",
			requirements: [
				"Strategic thinking and deal experience",
				"Strong network in digital/tech industry",
				"Experience with P&L or revenue forecasting",
			],
		},
	];

	return (
		<Layout header={2} footer={5} video={0}>
			<CmnBanner title="career" navigation="career" />

			<div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
				{/* Ambient glow and orangish accents (decorative divs, use inline styles) */}
				<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #000, transparent 40%, #0b0710 100%)', pointerEvents: 'none' }} />
				<div style={{ position: 'absolute', left: -128, top: -128, width: 384, height: 384, borderRadius: '9999px', background: 'rgba(249,115,22,0.08)', filter: 'blur(48px)' }} />
				<div style={{ position: 'absolute', right: 0, top: 160, width: 320, height: 320, borderRadius: '9999px', background: 'rgba(250,204,21,0.06)', filter: 'blur(48px)' }} />

				<div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', paddingLeft: 16, paddingRight: 16, paddingTop: 64, paddingBottom: 64 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						style={{ textAlign: 'center', marginBottom: 48 }}
					>
						<h1 style={{ fontSize: 36, lineHeight: 1.05, fontWeight: 700 }}>
							Join our
							<span style={{ marginLeft: 8, background: 'linear-gradient(90deg,#fb923c,#f59e0b,#facc15)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
								Team
							</span>
						</h1>
						<p style={{ marginTop: 16, color: '#9ca3af', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
							We're hiring across design, sales, engineering and business functions. Below are our current openings.
						</p>
					</motion.div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
						{/* Left panel: why join */}
						<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ gridColumn: 'span 1' }}>
							<div style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 24 }}>
								<h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Why work with us</h2>
								<p style={{ color: '#9ca3af', marginBottom: 16, fontSize: 14 }}>
									We craft delightful digital products, value autonomy, and invest in people's growth. Expect a hybrid of black glassmorphic UI with warm orangish highlights.
								</p>

								<ul style={{ display: 'grid', gap: 12, listStyle: 'none', padding: 0, margin: 0 }}>
									<li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
										<div style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg,#fb923c,#f59e0b)' }}>
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
										</div>
										<div>
											<div style={{ fontSize: 14, fontWeight: 600 }}>Competitive pay</div>
											<div style={{ fontSize: 12, color: '#9ca3af' }}>Market aligned salary and performance bonuses</div>
										</div>
									</li>

									<li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
										<div style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg,#fbbf24,#fb923c)' }}>
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
										</div>
										<div>
											<div style={{ fontSize: 14, fontWeight: 600 }}>Flexible work</div>
											<div style={{ fontSize: 12, color: '#9ca3af' }}>Remote-first, flexible hours and supportive teams</div>
										</div>
									</li>

									<li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
										<div style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg,#ec4899,#fb923c)' }}>
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
										</div>
										<div>
											<div style={{ fontSize: 14, fontWeight: 600 }}>Learning budget</div>
											<div style={{ fontSize: 12, color: '#9ca3af' }}>Training, conferences and book allowances</div>
										</div>
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Right: job list */}
						<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ gridColumn: 'span 2' }}>
							<div style={{ display: 'grid', gap: 24 }}>
								{jobOpenings.map((job, idx) => (
									<motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.06 }} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 20, cursor: 'pointer', transformOrigin: 'center' }} onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}>
										<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
											<div>
												<h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', margin: 0 }}>{job.title}</h3>
												<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
													<span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 9999, background: 'rgba(249,115,22,0.12)', color: '#fb923c' }}>{job.department}</span>
													<span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 9999, background: 'rgba(31,41,55,0.32)', color: '#d1d5db' }}>{job.location}</span>
													<span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 9999, background: 'rgba(16,185,129,0.08)', color: '#34d399' }}>{job.type}</span>
												</div>
											</div>
											<div style={{ textAlign: 'right' }}>
												<div style={{ fontSize: 14, color: '#9ca3af' }}>{job.experience}</div>
												<div style={{ fontWeight: 700, color: '#fff', marginTop: 6 }}>{job.salary}</div>
											</div>
										</div>

										<p style={{ fontSize: 14, color: '#9ca3af', marginTop: 12 }}>{job.description}</p>

										{selectedJob === job.id && (
											<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.35 }} style={{ marginTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>
												<h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Requirements</h4>
												<ul style={{ margin: 0, paddingLeft: 18, color: '#9ca3af', marginBottom: 12 }}>
													{job.requirements.map((r, i) => (
														<li key={i} style={{ fontSize: 14, marginBottom: 6 }}>{r}</li>
													))}
												</ul>

												<button style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 16px', borderRadius: 12, background: 'linear-gradient(90deg,#fb923c,#f59e0b)', color: '#000', fontWeight: 700, border: 'none' }}>
													Apply for this role
												</button>
											</motion.div>
										)}
									</motion.div>
								))}

								<div style={{ marginTop: 12 }}>
									<div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 20, textAlign: 'center' }}>
										<h4 style={{ color: '#fff', fontWeight: 600 }}>Don't see a role?</h4>
										<p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 12 }}>Send us your CV and we'll reach out when something fits.</p>
										<button style={{ padding: '8px 20px', borderRadius: 8, background: 'linear-gradient(90deg,#fb923c,#f59e0b)', color: '#000', fontWeight: 700, border: 'none' }}>Submit General Application</button>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				<CallToAction />
			</div>
		</Layout>
	);
};

export default CareerPage;
