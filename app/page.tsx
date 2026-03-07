"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Shield, Users, Lock, Eye, Network, CheckCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "title",
    title: "Zero Trust Architecture",
    subtitle: "The Future of Enterprise Cybersecurity",
    author: "Kenneth Lightfoot",
    studentId: "Student ID: 013130515",
    course: "D339 – Professional Communication (WGM2)",
    date: "March 2026",
  },
  {
    id: 2,
    type: "content",
    title: "What is Zero Trust Architecture?",
    icon: Shield,
    content: [
      {
        text: "A cybersecurity framework built on the principle of \"never trust, always verify\"",
        citation: null,
      },
      {
        text: "ZTA assumes that an attacker may already be present in the environment and that no system, user, or asset should be implicitly trusted",
        citation: "(Rose et al., 2020)",
      },
      {
        text: "Unlike traditional perimeter-based security, Zero Trust treats every access request as though it originates from an untrusted network",
        citation: "(Fortinet, n.d.)",
      },
      {
        text: "Essential as corporate network boundaries dissolve with cloud adoption and remote work",
        citation: null,
      },
    ],
  },
  {
    id: 3,
    type: "comparison",
    title: "Traditional Security vs. Zero Trust",
  },
  {
    id: 4,
    type: "diagram",
    title: "Zero Trust Access Flow",
  },
  {
    id: 5,
    type: "components",
    title: "Core Components of Zero Trust",
    components: [
      {
        icon: Users,
        title: "Identity Verification",
        description: "Strict authentication for every person and device attempting to access network resources, regardless of physical location",
        citation: "(Fortinet, n.d.)",
      },
      {
        icon: Lock,
        title: "Least Privilege Access",
        description: "Users and devices are granted only the minimum permissions necessary to perform their specific tasks",
        citation: "(Palo Alto Networks, n.d.)",
      },
      {
        icon: Network,
        title: "Microsegmentation",
        description: "Network divided into smaller, isolated zones so attackers cannot move freely if one segment is compromised",
        citation: "(Fortinet, n.d.)",
      },
      {
        icon: Eye,
        title: "Continuous Monitoring",
        description: "Real-time evaluation of user behavior, device health, and network activity—access can be revoked immediately if anomalies are detected",
        citation: "(Rose et al., 2020)",
      },
    ],
  },
  {
    id: 6,
    type: "benefits",
    title: "Benefits for Our Organization",
    benefits: [
      {
        title: "Reduced Attack Surface",
        description: "By eliminating implicit trust and requiring verification at every access point, ZTA makes it considerably harder for unauthorized users to penetrate our network",
        citation: "(Fortinet, n.d.)",
      },
      {
        title: "Improved Threat Detection",
        description: "Continuous monitoring and granular access controls provide enhanced visibility into user activity, device status, and network traffic",
        citation: "(Palo Alto Networks, n.d.)",
      },
      {
        title: "Secure Remote Access",
        description: "ZTA enables secure access for remote employees without relying on traditional VPNs, which can be vulnerable to exploitation",
        citation: "(Fortinet, n.d.)",
      },
      {
        title: "Streamlined Compliance",
        description: "Consistent access policies and detailed audit trails strengthen our posture during security audits",
        citation: "(Rose et al., 2020)",
      },
    ],
  },
  {
    id: 7,
    type: "itbenefits",
    title: "Benefits for Our IT Team",
    icon: Users,
    points: [
      {
        text: "Security analysts can detect and respond to threats faster, reducing incident investigation and remediation time",
        citation: "(Palo Alto Networks, n.d.)",
      },
      {
        text: "Real-time identification of suspicious behavior enables immediate action before significant damage occurs",
        citation: null,
      },
      {
        text: "Remote workers receive the same level of security as on-site employees, simplifying policy enforcement",
        citation: "(Fortinet, n.d.)",
      },
      {
        text: "Reduced complexity for network administrators managing a hybrid workforce",
        citation: null,
      },
    ],
  },
  {
    id: 8,
    type: "conclusion",
    title: "Conclusion",
    icon: CheckCircle,
    points: [
      "Zero Trust Architecture represents a necessary evolution in how our company approaches cybersecurity",
      "By operating on the principle of \"never trust, always verify,\" ZTA provides comprehensive protection for data, devices, and users",
      "The benefits of reduced attack surface, improved threat detection, secure remote access, and streamlined compliance make this transition critical for our long-term security strategy",
      "As our IT department begins phased implementation, we position our organization to meet increasingly complex threats with confidence and resilience",
    ],
  },
  {
    id: 9,
    type: "references",
    title: "References",
    icon: FileText,
    sources: [
      {
        author: "Fortinet",
        year: "n.d.",
        title: "What is zero trust architecture (ZTA)? Benefits and best practices",
        source: "Fortinet",
        url: "https://www.fortinet.com/resources/cyberglossary/zero-trust-architecture",
      },
      {
        author: "Palo Alto Networks",
        year: "n.d.",
        title: "What is zero trust architecture? Key elements and use cases",
        source: "Palo Alto Networks",
        url: "https://www.paloaltonetworks.com/cyberpedia/what-is-a-zero-trust-architecture",
      },
      {
        author: "Rose, S., Borchert, O., Mitchell, S., & Connelly, S.",
        year: "2020",
        title: "Zero trust architecture (NIST Special Publication 800-207)",
        source: "National Institute of Standards and Technology",
        url: "https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf",
      },
    ],
  },
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl border border-slate-700 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

          {/* Slide Content */}
          <div className="relative h-full p-6 md:p-10 flex flex-col">
            {slide.type === "title" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <Shield className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 mx-auto" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-cyan-400 mb-8">{slide.subtitle}</p>
                <div className="text-slate-400 space-y-1 text-sm md:text-base">
                  <p className="font-medium text-white">{slide.author}</p>
                  <p>{slide.studentId}</p>
                  <p>{slide.course}</p>
                  <p>{slide.date}</p>
                </div>
              </div>
            )}

            {slide.type === "content" && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  {slide.icon && <slide.icon className="w-8 h-8 text-cyan-400" />}
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {slide.content?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0" />
                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                          {item.text}
                          {item.citation && (
                            <span className="text-cyan-400 ml-1 text-sm">{item.citation}</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {slide.type === "comparison" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-slate-400 text-sm mb-4">
                  Figure 1: Comparison of security models <span className="text-cyan-400">(Adapted from Rose et al., 2020; Fortinet, n.d.)</span>
                </p>
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {/* Traditional Security */}
                  <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <h3 className="font-bold text-red-400 text-lg">Traditional Security</h3>
                    </div>
                    <p className="text-slate-400 text-xs mb-4 italic">"Trust but verify"</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Perimeter-based defense</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Implicit trust inside network</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">VPN-dependent remote access</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Static access controls</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Lateral movement possible</p>
                      </div>
                    </div>
                  </div>
                  {/* Zero Trust */}
                  <div className="bg-slate-800/50 border border-emerald-500/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                      <h3 className="font-bold text-emerald-400 text-lg">Zero Trust Architecture</h3>
                    </div>
                    <p className="text-slate-400 text-xs mb-4 italic">"Never trust, always verify"</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Identity-centric protection</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">No implicit trust anywhere</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Secure access without VPN</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Continuous verification</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                        <p className="text-slate-300 text-sm">Microsegmentation limits spread</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {slide.type === "diagram" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Figure 2: Zero Trust verification process <span className="text-cyan-400">(Adapted from Palo Alto Networks, n.d.; Rose et al., 2020)</span>
                </p>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 md:gap-4">
                    {/* User */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium">User Request</p>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                      <ChevronRight className="w-4 h-4 text-cyan-400 -mt-2" />
                    </div>

                    {/* Verify Identity */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium text-center">Verify<br/>Identity</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                      <ChevronRight className="w-4 h-4 text-blue-400 -mt-2" />
                    </div>

                    {/* Check Device */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 border-2 border-purple-500 rounded-lg flex items-center justify-center">
                        <Eye className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium text-center">Assess<br/>Context</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-purple-500 to-amber-500" />
                      <ChevronRight className="w-4 h-4 text-purple-400 -mt-2" />
                    </div>

                    {/* Least Privilege */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 border-2 border-amber-500 rounded-lg flex items-center justify-center">
                        <Lock className="w-8 h-8 md:w-10 md:h-10 text-amber-400" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium text-center">Apply Least<br/>Privilege</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500" />
                      <ChevronRight className="w-4 h-4 text-amber-400 -mt-2" />
                    </div>

                    {/* Resource */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                        <Network className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium">Resource</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-slate-400 text-xs md:text-sm mt-4">
                  Each access request undergoes continuous verification regardless of location or network
                </p>
              </>
            )}

            {slide.type === "components" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{slide.title}</h2>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {slide.components?.map((component, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <component.icon className="w-5 h-5 text-cyan-400" />
                        <h3 className="font-semibold text-white text-sm md:text-base">
                          {component.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed flex-1">
                        {component.description}
                      </p>
                      <p className="text-cyan-400 text-xs mt-2">{component.citation}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {slide.type === "benefits" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{slide.title}</h2>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {slide.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <h3 className="font-semibold text-white text-sm md:text-base">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                      <p className="text-cyan-400 text-xs mt-2">{benefit.citation}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {slide.type === "itbenefits" && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  {slide.icon && <slide.icon className="w-8 h-8 text-cyan-400" />}
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {slide.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                          {typeof point === "string" ? point : point.text}
                          {typeof point !== "string" && point.citation && (
                            <span className="text-cyan-400 ml-1 text-sm">{point.citation}</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {slide.type === "conclusion" && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  {slide.icon && <slide.icon className="w-8 h-8 text-emerald-400" />}
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {slide.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {slide.type === "references" && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  {slide.icon && <slide.icon className="w-8 h-8 text-cyan-400" />}
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {slide.sources?.map((source, index) => (
                      <li key={index} className="text-slate-300 text-sm md:text-base leading-relaxed pl-8 -indent-8">
                        {source.author} ({source.year}). <em>{source.title}</em>. {source.source}.{" "}
                        <span className="text-cyan-400 break-all">{source.url}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Slide Number */}
            <div className="absolute bottom-4 right-6 text-slate-500 text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 pb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-cyan-400" : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
