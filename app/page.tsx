"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield, Users, Lock, Eye, Network, CheckCircle, FileText, ArrowRight } from "lucide-react"
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
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, isAnimating])

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-[#003057] flex flex-col overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          {/* Glowing orbs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-[#003057] font-bold text-sm">WGU</span>
          </div>
          <span className="text-white/70 text-sm font-medium">D339 – Professional Communication</span>
        </div>
        <div className="text-white/50 text-sm">
          {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative z-10">
        <div 
          className={`w-full max-w-6xl aspect-[16/9] bg-gradient-to-br from-[#002244] via-[#003057] to-[#004080] rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative transition-all duration-300 ${isAnimating ? 'opacity-90 scale-[0.99]' : 'opacity-100 scale-100'}`}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-white/40 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-t from-white/40 to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="relative h-full p-8 md:p-12 flex flex-col">
            {slide.type === "title" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white to-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#003057]" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight text-balance">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-10 font-light">{slide.subtitle}</p>
                <div className="text-white/80 space-y-1 text-sm md:text-base">
                  <p className="font-semibold text-white text-lg">{slide.author}</p>
                  <p className="text-white/60">{slide.studentId}</p>
                  <p className="text-white/60">{slide.course}</p>
                  <p className="text-white/60">{slide.date}</p>
                </div>
              </div>
            )}

            {slide.type === "content" && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-5">
                    {slide.content?.map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-3 shrink-0 group-hover:scale-125 transition-transform" />
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                          {item.text}
                          {item.citation && (
                            <span className="text-blue-300 ml-2 text-base font-medium">{item.citation}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-white/60 text-sm mb-6">
                  Figure 1: Comparison of security models <span className="text-blue-300">(Adapted from Rose et al., 2020; Fortinet, n.d.)</span>
                </p>
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {/* Traditional Security */}
                  <div className="bg-white/5 backdrop-blur border border-red-400/30 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-400" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="font-bold text-red-300 text-xl">Traditional Security</h3>
                    </div>
                    <p className="text-white/50 text-sm mb-5 italic">{'"Trust but verify"'}</p>
                    <div className="space-y-3">
                      {["Perimeter-based defense", "Implicit trust inside network", "VPN-dependent remote access", "Static access controls", "Lateral movement possible"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                          <p className="text-white/80 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Zero Trust */}
                  <div className="bg-white/5 backdrop-blur border border-emerald-400/30 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="font-bold text-emerald-300 text-xl">Zero Trust Architecture</h3>
                    </div>
                    <p className="text-white/50 text-sm mb-5 italic">{'"Never trust, always verify"'}</p>
                    <div className="space-y-3">
                      {["Identity-centric protection", "No implicit trust anywhere", "Secure access without VPN", "Continuous verification", "Microsegmentation limits spread"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          <p className="text-white/80 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {slide.type === "diagram" && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-white/60 text-sm mb-8">
                  Figure 2: Zero Trust verification process <span className="text-blue-300">(Adapted from Palo Alto Networks, n.d.; Rose et al., 2020)</span>
                </p>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-3 md:gap-6">
                    {[
                      { icon: Users, label: "User\nRequest", color: "from-blue-400 to-blue-500" },
                      { icon: Shield, label: "Verify\nIdentity", color: "from-blue-300 to-blue-400" },
                      { icon: Eye, label: "Assess\nContext", color: "from-white/80 to-white" },
                      { icon: Lock, label: "Apply Least\nPrivilege", color: "from-blue-300 to-blue-400" },
                      { icon: Network, label: "Access\nResource", color: "from-blue-400 to-blue-500" },
                    ].map((step, index, arr) => (
                      <div key={index} className="flex items-center gap-3 md:gap-6">
                        <div className="flex flex-col items-center">
                          <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                            <step.icon className="w-8 h-8 md:w-10 md:h-10 text-[#003057]" />
                          </div>
                          <p className="text-white/90 text-xs md:text-sm mt-3 font-medium text-center whitespace-pre-line">{step.label}</p>
                        </div>
                        {index < arr.length - 1 && (
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/40" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-center text-white/60 text-sm mt-4">
                  Each access request undergoes continuous verification regardless of location or network
                </p>
              </>
            )}

            {slide.type === "components" && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{slide.title}</h2>
                <div className="flex-1 grid grid-cols-2 gap-5">
                  {slide.components?.map((component, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <component.icon className="w-5 h-5 text-[#003057]" />
                        </div>
                        <h3 className="font-semibold text-white text-base md:text-lg">
                          {component.title}
                        </h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {component.description}
                      </p>
                      <p className="text-blue-300 text-xs mt-3 font-medium">{component.citation}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {slide.type === "benefits" && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{slide.title}</h2>
                <div className="flex-1 grid grid-cols-2 gap-5">
                  {slide.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        </div>
                        <h3 className="font-semibold text-white text-base md:text-lg">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                      <p className="text-blue-300 text-xs mt-3 font-medium">{benefit.citation}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {slide.type === "itbenefits" && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-5">
                    {slide.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                          {typeof point === "string" ? point : point.text}
                          {typeof point !== "string" && point.citation && (
                            <span className="text-blue-300 ml-2 text-base font-medium">{point.citation}</span>
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
                <div className="flex items-center gap-4 mb-8">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <slide.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-5">
                    {slide.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-3 shrink-0 group-hover:scale-125 transition-transform" />
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
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
                <div className="flex items-center gap-4 mb-8">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-6">
                    {slide.sources?.map((source, index) => (
                      <li key={index} className="text-white/80 text-base md:text-lg leading-relaxed pl-8 -indent-8">
                        {source.author} ({source.year}). <em className="text-white">{source.title}</em>. {source.source}.{" "}
                        <span className="text-blue-300 break-all">{source.url}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-center gap-6 pb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 disabled:opacity-30 rounded-xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white w-8" 
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 disabled:opacity-30 rounded-xl"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
