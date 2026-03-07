"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield, Users, Lock, Eye, Network, CheckCircle, FileText, ArrowRight, AlertTriangle, TrendingUp, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "title",
    title: "Zero Trust Architecture",
    subtitle: "The Future of Enterprise Cybersecurity",
    author: "Kenneth Lightfoot",
    studentId: "Student ID: 013130515",
    course: "D339 – Technical Communication (WGM2)",
    date: "March 2026",
  },
  {
    id: 2,
    type: "problem",
    title: "The Problem We Face",
    stats: [
      { value: "83%", label: "of organizations experienced more than one data breach", source: "IBM Security" },
      { value: "$4.45M", label: "average cost of a data breach in 2023", source: "IBM Security" },
      { value: "277", label: "days average time to identify and contain a breach", source: "IBM Security" },
    ],
    takeaway: "Traditional perimeter-based security is no longer sufficient in today's threat landscape",
  },
  {
    id: 3,
    type: "content",
    title: "What is Zero Trust Architecture?",
    icon: Shield,
    keyPhrase: "Never trust, always verify",
    content: [
      {
        text: "A cybersecurity framework that eliminates implicit trust from all computing infrastructure",
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
    ],
  },
  {
    id: 4,
    type: "comparison",
    title: "Traditional Security vs. Zero Trust",
  },
  {
    id: 5,
    type: "diagram",
    title: "How Zero Trust Works",
  },
  {
    id: 6,
    type: "components",
    title: "The Four Pillars",
    components: [
      {
        icon: Users,
        title: "Identity Verification",
        description: "Strict authentication for every person and device attempting to access resources",
        citation: "(Fortinet, n.d.)",
        number: "01",
      },
      {
        icon: Lock,
        title: "Least Privilege Access",
        description: "Grant only minimum permissions necessary to perform specific tasks",
        citation: "(Palo Alto Networks, n.d.)",
        number: "02",
      },
      {
        icon: Network,
        title: "Microsegmentation",
        description: "Divide network into isolated zones to contain potential breaches",
        citation: "(Fortinet, n.d.)",
        number: "03",
      },
      {
        icon: Eye,
        title: "Continuous Monitoring",
        description: "Real-time evaluation of behavior and activity with instant response",
        citation: "(Rose et al., 2020)",
        number: "04",
      },
    ],
  },
  {
    id: 7,
    type: "benefits",
    title: "Why Our Organization Needs This",
    benefits: [
      {
        icon: Shield,
        title: "Reduced Attack Surface",
        description: "Eliminate implicit trust and require verification at every access point",
        citation: "(Fortinet, n.d.)",
      },
      {
        icon: Eye,
        title: "Improved Threat Detection",
        description: "Enhanced visibility into user activity, device status, and network traffic",
        citation: "(Palo Alto Networks, n.d.)",
      },
      {
        icon: Globe,
        title: "Secure Remote Access",
        description: "Enable secure access without relying on vulnerable traditional VPNs",
        citation: "(Fortinet, n.d.)",
      },
      {
        icon: FileText,
        title: "Streamlined Compliance",
        description: "Consistent policies and detailed audit trails for security audits",
        citation: "(Rose et al., 2020)",
      },
    ],
  },
  {
    id: 8,
    type: "itbenefits",
    title: "Benefits for Our IT Team",
    icon: Users,
    points: [
      {
        text: "Security analysts can detect and respond to threats faster, reducing incident investigation time",
        citation: "(Palo Alto Networks, n.d.)",
      },
      {
        text: "Real-time identification of suspicious behavior enables immediate action before damage occurs",
        citation: null,
      },
      {
        text: "Remote workers receive the same level of security as on-site employees",
        citation: "(Fortinet, n.d.)",
      },
      {
        text: "Reduced complexity for network administrators managing a hybrid workforce",
        citation: null,
      },
    ],
  },
  {
    id: 9,
    type: "conclusion",
    title: "Key Takeaways",
    icon: CheckCircle,
    points: [
      "Zero Trust represents a necessary evolution in enterprise cybersecurity",
      'The "never trust, always verify" principle provides comprehensive protection',
      "Benefits include reduced attack surface, better detection, and secure remote access",
      "Phased implementation positions our organization for long-term resilience",
    ],
    callToAction: "Ready to move forward with Zero Trust implementation",
  },
  {
    id: 10,
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      const timer = setTimeout(() => setIsAnimating(false), 400)
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
    <div className="min-h-screen bg-[#001a33] flex flex-col overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003057] via-[#001a33] to-[#000d1a]" />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Floating orbs with animation */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[80px]" />
        <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] bg-white/3 rounded-full blur-[120px]" />
        
        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)"/>
        </svg>
      </div>

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-[#003057] font-black text-sm tracking-tight">WGU</span>
            </div>
            <div className="hidden md:block">
              <p className="text-white/90 text-sm font-semibold">Western Governors University</p>
              <p className="text-white/40 text-xs">D339 – Technical Communication</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-white/60 text-xs">Slide</p>
            <p className="text-white font-bold text-lg">{currentSlide + 1}<span className="text-white/40 font-normal">/{slides.length}</span></p>
          </div>
          <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-white rounded-full transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative z-10">
        <div 
          className={`w-full max-w-6xl aspect-[16/9] bg-gradient-to-br from-[#002244]/90 via-[#001a33]/95 to-[#000d1a]/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/50 border border-white/10 overflow-hidden relative transition-all duration-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${isAnimating ? 'scale-[0.98] opacity-90' : 'scale-100 opacity-100'}`}
        >
          {/* Slide inner glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/[0.03]" />
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-40 h-40">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/50 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-white/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-40 h-40">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-blue-400/50 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-blue-400/50 to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="relative h-full p-8 md:p-12 flex flex-col">
            
            {/* TITLE SLIDE */}
            {slide.type === "title" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full scale-150 animate-pulse" />
                  <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Shield className="w-12 h-12 md:w-14 md:h-14 text-[#003057]" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-300/80 mb-12 font-light tracking-wide">{slide.subtitle}</p>
                <div className="space-y-2">
                  <p className="font-bold text-white text-xl">{slide.author}</p>
                  <p className="text-white/50 text-sm">{slide.studentId}</p>
                  <p className="text-white/50 text-sm">{slide.course}</p>
                  <p className="text-white/50 text-sm">{slide.date}</p>
                </div>
              </div>
            )}

            {/* PROBLEM SLIDE - NEW */}
            {slide.type === "problem" && (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 backdrop-blur rounded-xl flex items-center justify-center border border-red-500/30">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">{slide.title}</h2>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {slide.stats?.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                          <p className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            {stat.value}
                          </p>
                          <p className="text-white/70 text-sm leading-relaxed">{stat.label}</p>
                          <p className="text-blue-400/60 text-xs mt-2">{stat.source}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-red-400" />
                      <p className="text-white/90 text-lg font-medium">{slide.takeaway}</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* CONTENT SLIDE */}
            {slide.type === "content" && (
              <>
                <div className="flex items-center gap-4 mb-4">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-black text-white">{slide.title}</h2>
                </div>
                
                {/* Key phrase callout */}
                {'keyPhrase' in slide && slide.keyPhrase && (
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-white/10 border border-blue-400/30 rounded-full px-6 py-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <p className="text-blue-200 text-xl font-bold tracking-wide">{'"'}{slide.keyPhrase}{'"'}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-6">
                    {slide.content?.map((item, index) => (
                      <li key={index} className="flex items-start gap-5 group">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                          <span className="text-white/60 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed pt-2">
                          {item.text}
                          {item.citation && (
                            <span className="text-blue-300 ml-2 text-base font-semibold">{item.citation}</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* COMPARISON SLIDE */}
            {slide.type === "comparison" && (
              <>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{slide.title}</h2>
                <p className="text-white/50 text-sm mb-6">
                  Figure 1: Security Model Comparison <span className="text-blue-300">(Rose et al., 2020; Fortinet, n.d.)</span>
                </p>
                <div className="flex-1 grid grid-cols-2 gap-8">
                  {/* Traditional Security */}
                  <div className="bg-gradient-to-br from-red-500/5 to-red-500/0 backdrop-blur border border-red-500/20 rounded-2xl p-6 relative overflow-hidden group hover:border-red-500/40 transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-400" />
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Shield className="w-32 h-32 text-red-500" />
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-black text-white text-xl">Traditional Security</h3>
                          <p className="text-red-300/60 text-sm italic">{'"Castle and moat"'}</p>
                        </div>
                      </div>
                      <div className="space-y-4 mt-6">
                        {[
                          { label: "Trust Model", value: "Trust but verify" },
                          { label: "Focus", value: "Perimeter defense" },
                          { label: "Inside Network", value: "Implicit trust" },
                          { label: "Remote Access", value: "VPN dependent" },
                          { label: "If Breached", value: "Lateral movement" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3">
                            <span className="text-white/50 text-sm">{item.label}</span>
                            <span className="text-white/90 text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Zero Trust */}
                  <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/0 backdrop-blur border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400" />
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Shield className="w-32 h-32 text-emerald-500" />
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-black text-white text-xl">Zero Trust Architecture</h3>
                          <p className="text-emerald-300/60 text-sm italic">{'"Never trust, always verify"'}</p>
                        </div>
                      </div>
                      <div className="space-y-4 mt-6">
                        {[
                          { label: "Trust Model", value: "Verify everything" },
                          { label: "Focus", value: "Identity-centric" },
                          { label: "Inside Network", value: "Zero implicit trust" },
                          { label: "Remote Access", value: "Secure without VPN" },
                          { label: "If Breached", value: "Contained by segmentation" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3">
                            <span className="text-white/50 text-sm">{item.label}</span>
                            <span className="text-emerald-300 text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* DIAGRAM SLIDE */}
            {slide.type === "diagram" && (
              <>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{slide.title}</h2>
                <p className="text-white/50 text-sm mb-6">
                  Figure 2: Zero Trust Verification Flow <span className="text-blue-300">(Palo Alto Networks, n.d.; Rose et al., 2020)</span>
                </p>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 md:gap-4">
                    {[
                      { icon: Users, label: "User\nRequest", color: "from-blue-400 to-blue-500", number: "1" },
                      { icon: Shield, label: "Verify\nIdentity", color: "from-blue-300 to-blue-400", number: "2" },
                      { icon: Eye, label: "Assess\nContext", color: "from-white to-blue-100", number: "3" },
                      { icon: Lock, label: "Least\nPrivilege", color: "from-blue-300 to-blue-400", number: "4" },
                      { icon: Network, label: "Grant\nAccess", color: "from-emerald-400 to-emerald-500", number: "5" },
                    ].map((step, index, arr) => (
                      <div key={index} className="flex items-center gap-2 md:gap-4">
                        <div className="flex flex-col items-center group">
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                            <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                              <step.icon className="w-8 h-8 md:w-10 md:h-10 text-[#001a33]" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-[#003057] text-xs font-black">{step.number}</span>
                            </div>
                          </div>
                          <p className="text-white/90 text-xs md:text-sm mt-4 font-semibold text-center whitespace-pre-line leading-tight">{step.label}</p>
                        </div>
                        {index < arr.length - 1 && (
                          <div className="flex flex-col items-center">
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/30" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-4">
                  <p className="text-center text-white/70 text-sm">
                    <span className="text-blue-300 font-semibold">Continuous verification</span> — Every request is authenticated and authorized regardless of location or prior access
                  </p>
                </div>
              </>
            )}

            {/* COMPONENTS SLIDE */}
            {slide.type === "components" && (
              <>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8">{slide.title}</h2>
                <div className="flex-1 grid grid-cols-2 gap-5">
                  {slide.components?.map((component, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute top-4 right-4 text-4xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors">
                        {component.number}
                      </div>
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                            <component.icon className="w-6 h-6 text-[#003057]" />
                          </div>
                          <h3 className="font-bold text-white text-lg">
                            {component.title}
                          </h3>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {component.description}
                        </p>
                        <p className="text-blue-300/80 text-xs mt-4 font-semibold">{component.citation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* BENEFITS SLIDE */}
            {slide.type === "benefits" && (
              <>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8">{slide.title}</h2>
                <div className="flex-1 grid grid-cols-2 gap-5">
                  {slide.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-emerald-500/30">
                          {benefit.icon && <benefit.icon className="w-6 h-6 text-emerald-400" />}
                        </div>
                        <h3 className="font-bold text-white text-lg">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                      <p className="text-blue-300/80 text-xs mt-4 font-semibold">{benefit.citation}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* IT BENEFITS SLIDE */}
            {slide.type === "itbenefits" && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-black text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-5">
                    {slide.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-5 group">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform border border-emerald-500/30">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        </div>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed pt-1.5">
                          {typeof point === "string" ? point : point.text}
                          {typeof point !== "string" && point.citation && (
                            <span className="text-blue-300 ml-2 text-base font-semibold">{point.citation}</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* CONCLUSION SLIDE */}
            {slide.type === "conclusion" && (
              <>
                <div className="flex items-center gap-4 mb-6">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <slide.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-black text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-5 mb-8">
                    {slide.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-5 group">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-all">
                          <CheckCircle className="w-5 h-5 text-blue-300" />
                        </div>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed pt-1.5">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                  
                  {'callToAction' in slide && slide.callToAction && (
                    <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-4">
                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                        <p className="text-white text-lg font-semibold">{slide.callToAction}</p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* REFERENCES SLIDE */}
            {slide.type === "references" && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  {slide.icon && (
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-black text-white">{slide.title}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-6">
                    {slide.sources?.map((source, index) => (
                      <li key={index} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:bg-white/[0.04] transition-colors">
                        <p className="text-white/90 text-base leading-relaxed">
                          {source.author} ({source.year}). <em className="text-white font-medium">{source.title}</em>. {source.source}.
                        </p>
                        <p className="text-blue-300/80 text-sm mt-2 break-all">{source.url}</p>
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
          className="w-14 h-14 bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 hover:border-white/20 disabled:opacity-20 disabled:cursor-not-allowed rounded-2xl transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-400 ${
                index === currentSlide 
                  ? "bg-white w-10 shadow-lg shadow-white/20" 
                  : index < currentSlide
                  ? "bg-blue-400/50 hover:bg-blue-400/70 w-2.5"
                  : "bg-white/20 hover:bg-white/40 w-2.5"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-14 h-14 bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 hover:border-white/20 disabled:opacity-20 disabled:cursor-not-allowed rounded-2xl transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
