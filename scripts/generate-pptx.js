import PptxGenJS from "pptxgenjs";
import fs from "fs";
import path from "path";

// WGU Brand Colors
const WGU_NAVY = "003057";
const WGU_LIGHT_BLUE = "0066CC";
const WHITE = "FFFFFF";
const LIGHT_GRAY = "E5E7EB";
const DARK_GRAY = "4B5563";

const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = "Kenneth Lightfoot";
pptx.title = "Zero Trust Architecture: The Future of Enterprise Cybersecurity";
pptx.subject = "Technical Communication Presentation";
pptx.company = "Western Governors University";

// Define slide master with WGU branding
pptx.defineSlideMaster({
  title: "WGU_MASTER",
  background: { color: WGU_NAVY },
  objects: [
    // Header bar
    { rect: { x: 0, y: 0, w: "100%", h: 0.5, fill: { color: "002244" } } },
    // WGU text in header
    { text: { text: "WGU | D339 – Technical Communication", options: { x: 0.3, y: 0.1, w: 4, h: 0.3, fontSize: 10, color: "60A5FA", fontFace: "Arial" } } },
  ],
});

// Slide 1: Title
let slide1 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide1.addText("ZERO TRUST\nARCHITECTURE", {
  x: 0.5, y: 1.5, w: 9, h: 1.8,
  fontSize: 48, bold: true, color: WHITE, fontFace: "Arial",
  align: "center", lineSpacing: 50
});
slide1.addText("The Future of Enterprise Cybersecurity", {
  x: 0.5, y: 3.3, w: 9, h: 0.5,
  fontSize: 20, color: "93C5FD", fontFace: "Arial", align: "center"
});
slide1.addShape(pptx.ShapeType.rect, { x: 3.5, y: 3.9, w: 3, h: 0.02, fill: { color: "3B82F6" } });
slide1.addText("Kenneth Lightfoot", {
  x: 0.5, y: 4.2, w: 9, h: 0.4,
  fontSize: 16, color: WHITE, fontFace: "Arial", align: "center"
});
slide1.addText("Student ID: 013130515\nD339 – Technical Communication (WGM2)\nMarch 2026", {
  x: 0.5, y: 4.6, w: 9, h: 1,
  fontSize: 12, color: "9CA3AF", fontFace: "Arial", align: "center", lineSpacing: 18
});

// Slide 2: The Problem
let slide2 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide2.addText("The Problem: Why Traditional Security Fails", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});
slide2.addText("In today's landscape, perimeter-based security is no longer enough", {
  x: 0.5, y: 1.3, w: 9, h: 0.4,
  fontSize: 14, color: "93C5FD", fontFace: "Arial"
});

// Stats boxes
const stats = [
  { num: "83%", label: "of organizations\nexperienced breaches", color: "EF4444" },
  { num: "$4.45M", label: "average cost of\na data breach", color: "F59E0B" },
  { num: "277", label: "days to identify\nand contain", color: "3B82F6" }
];
stats.forEach((stat, i) => {
  const xPos = 0.5 + (i * 3.1);
  slide2.addShape(pptx.ShapeType.roundRect, { x: xPos, y: 2, w: 2.9, h: 1.8, fill: { color: "0A1628" }, line: { color: stat.color, pt: 1 } });
  slide2.addText(stat.num, { x: xPos, y: 2.2, w: 2.9, h: 0.8, fontSize: 36, bold: true, color: stat.color, align: "center", fontFace: "Arial" });
  slide2.addText(stat.label, { x: xPos, y: 3, w: 2.9, h: 0.6, fontSize: 11, color: "9CA3AF", align: "center", fontFace: "Arial" });
});
slide2.addText("(IBM Security, 2023)", { x: 0.5, y: 3.9, w: 9, h: 0.3, fontSize: 10, color: "60A5FA", fontFace: "Arial" });
slide2.addText("\"Traditional perimeter-based security cannot keep up with the dissolving corporate boundaries\ndriven by cloud adoption and remote work.\"", {
  x: 0.5, y: 4.3, w: 9, h: 0.8,
  fontSize: 14, italic: true, color: "D1D5DB", fontFace: "Arial", align: "center"
});
slide2.addText("(Fortinet, n.d.)", { x: 0.5, y: 5, w: 9, h: 0.3, fontSize: 10, color: "60A5FA", align: "center", fontFace: "Arial" });

// Slide 3: What is Zero Trust?
let slide3 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide3.addText("What is Zero Trust Architecture?", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});

// Key phrase box
slide3.addShape(pptx.ShapeType.roundRect, { x: 1, y: 1.4, w: 8, h: 0.8, fill: { color: "1E3A5F" }, line: { color: "3B82F6", pt: 1 } });
slide3.addText("\"Never trust, always verify\"", {
  x: 1, y: 1.5, w: 8, h: 0.6,
  fontSize: 22, bold: true, color: "60A5FA", fontFace: "Arial", align: "center"
});

const ztaPoints = [
  { num: "1", text: "Assumes attackers may already be present in the environment", cite: "(Rose et al., 2020)" },
  { num: "2", text: "No system, user, or asset should be implicitly trusted", cite: "(Rose et al., 2020)" },
  { num: "3", text: "Treats every access request as if from an untrusted network", cite: "(Fortinet, n.d.)" },
  { num: "4", text: "Essential as corporate boundaries dissolve with cloud and remote work", cite: "" }
];
ztaPoints.forEach((point, i) => {
  const yPos = 2.4 + (i * 0.65);
  slide3.addShape(pptx.ShapeType.ellipse, { x: 0.6, y: yPos, w: 0.35, h: 0.35, fill: { color: "3B82F6" } });
  slide3.addText(point.num, { x: 0.6, y: yPos + 0.02, w: 0.35, h: 0.35, fontSize: 12, bold: true, color: WHITE, align: "center", fontFace: "Arial" });
  slide3.addText(point.text, { x: 1.1, y: yPos, w: 7, h: 0.35, fontSize: 14, color: WHITE, fontFace: "Arial" });
  if (point.cite) {
    slide3.addText(point.cite, { x: 8.1, y: yPos, w: 1.5, h: 0.35, fontSize: 10, color: "60A5FA", fontFace: "Arial" });
  }
});

// Slide 4: Comparison - Traditional vs Zero Trust
let slide4 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide4.addText("Traditional Security vs. Zero Trust", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});
slide4.addText("Figure 1: Comparison of security models (Adapted from Rose et al., 2020; Fortinet, n.d.)", {
  x: 0.5, y: 1.2, w: 9, h: 0.3,
  fontSize: 10, color: "60A5FA", fontFace: "Arial"
});

// Traditional column
slide4.addShape(pptx.ShapeType.roundRect, { x: 0.4, y: 1.6, w: 4.5, h: 3.6, fill: { color: "0A1628" }, line: { color: "EF4444", pt: 1 } });
slide4.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.6, w: 4.5, h: 0.05, fill: { color: "EF4444" } });
slide4.addText("Traditional Security", { x: 0.6, y: 1.8, w: 4, h: 0.4, fontSize: 16, bold: true, color: "F87171", fontFace: "Arial" });
slide4.addText("\"Trust but verify\"", { x: 0.6, y: 2.2, w: 4, h: 0.3, fontSize: 11, italic: true, color: "9CA3AF", fontFace: "Arial" });

const tradPoints = ["Perimeter-based defense", "Implicit trust inside network", "VPN-dependent remote access", "Static access controls", "Lateral movement possible"];
tradPoints.forEach((point, i) => {
  slide4.addShape(pptx.ShapeType.ellipse, { x: 0.7, y: 2.65 + (i * 0.5), w: 0.15, h: 0.15, fill: { color: "F87171" } });
  slide4.addText(point, { x: 1, y: 2.55 + (i * 0.5), w: 3.7, h: 0.4, fontSize: 12, color: WHITE, fontFace: "Arial" });
});

// Zero Trust column
slide4.addShape(pptx.ShapeType.roundRect, { x: 5.1, y: 1.6, w: 4.5, h: 3.6, fill: { color: "0A1628" }, line: { color: "10B981", pt: 1 } });
slide4.addShape(pptx.ShapeType.rect, { x: 5.1, y: 1.6, w: 4.5, h: 0.05, fill: { color: "10B981" } });
slide4.addText("Zero Trust Architecture", { x: 5.3, y: 1.8, w: 4, h: 0.4, fontSize: 16, bold: true, color: "34D399", fontFace: "Arial" });
slide4.addText("\"Never trust, always verify\"", { x: 5.3, y: 2.2, w: 4, h: 0.3, fontSize: 11, italic: true, color: "9CA3AF", fontFace: "Arial" });

const ztPoints = ["Identity-centric protection", "No implicit trust anywhere", "Secure access without VPN", "Continuous verification", "Microsegmentation limits spread"];
ztPoints.forEach((point, i) => {
  slide4.addShape(pptx.ShapeType.ellipse, { x: 5.4, y: 2.65 + (i * 0.5), w: 0.15, h: 0.15, fill: { color: "34D399" } });
  slide4.addText(point, { x: 5.7, y: 2.55 + (i * 0.5), w: 3.7, h: 0.4, fontSize: 12, color: WHITE, fontFace: "Arial" });
});

// Slide 5: Zero Trust Access Flow Diagram
let slide5 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide5.addText("Zero Trust Access Flow", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});
slide5.addText("Figure 2: Zero Trust verification process (Adapted from Palo Alto Networks, n.d.; Rose et al., 2020)", {
  x: 0.5, y: 1.2, w: 9, h: 0.3,
  fontSize: 10, color: "60A5FA", fontFace: "Arial"
});

const flowSteps = [
  { label: "User\nRequest", color: "06B6D4" },
  { label: "Verify\nIdentity", color: "3B82F6" },
  { label: "Assess\nContext", color: "8B5CF6" },
  { label: "Apply Least\nPrivilege", color: "F59E0B" },
  { label: "Access\nResource", color: "10B981" }
];
flowSteps.forEach((step, i) => {
  const xPos = 0.5 + (i * 1.9);
  slide5.addShape(pptx.ShapeType.roundRect, { x: xPos, y: 2, w: 1.5, h: 1.2, fill: { color: "0A1628" }, line: { color: step.color, pt: 2 } });
  slide5.addText(step.label, { x: xPos, y: 2.3, w: 1.5, h: 0.8, fontSize: 12, bold: true, color: step.color, align: "center", fontFace: "Arial" });
  if (i < flowSteps.length - 1) {
    slide5.addText("→", { x: xPos + 1.5, y: 2.4, w: 0.4, h: 0.5, fontSize: 20, color: "60A5FA", align: "center", fontFace: "Arial" });
  }
});

slide5.addText("Each access request undergoes continuous verification regardless of location or network", {
  x: 0.5, y: 3.5, w: 9, h: 0.4,
  fontSize: 12, color: "9CA3AF", fontFace: "Arial", align: "center"
});

// Slide 6: Core Components
let slide6 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide6.addText("Core Components of Zero Trust", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});

const components = [
  { title: "Identity Verification", desc: "Multi-factor authentication validates every user", cite: "(Palo Alto, n.d.)" },
  { title: "Least Privilege Access", desc: "Users get only minimum permissions needed", cite: "(Rose et al., 2020)" },
  { title: "Microsegmentation", desc: "Network divided into secure zones", cite: "(Fortinet, n.d.)" },
  { title: "Continuous Monitoring", desc: "Real-time analysis of all activity", cite: "(Rose et al., 2020)" }
];
components.forEach((comp, i) => {
  const xPos = (i % 2) * 4.7 + 0.4;
  const yPos = Math.floor(i / 2) * 1.8 + 1.4;
  slide6.addShape(pptx.ShapeType.roundRect, { x: xPos, y: yPos, w: 4.5, h: 1.5, fill: { color: "0A1628" }, line: { color: "3B82F6", pt: 1 } });
  slide6.addShape(pptx.ShapeType.ellipse, { x: xPos + 0.15, y: yPos + 0.15, w: 0.4, h: 0.4, fill: { color: "3B82F6" } });
  slide6.addText((i + 1).toString(), { x: xPos + 0.15, y: yPos + 0.18, w: 0.4, h: 0.35, fontSize: 14, bold: true, color: WHITE, align: "center", fontFace: "Arial" });
  slide6.addText(comp.title, { x: xPos + 0.7, y: yPos + 0.15, w: 3.5, h: 0.4, fontSize: 14, bold: true, color: WHITE, fontFace: "Arial" });
  slide6.addText(comp.desc, { x: xPos + 0.2, y: yPos + 0.6, w: 4, h: 0.4, fontSize: 11, color: "D1D5DB", fontFace: "Arial" });
  slide6.addText(comp.cite, { x: xPos + 0.2, y: yPos + 1, w: 4, h: 0.3, fontSize: 10, color: "60A5FA", fontFace: "Arial" });
});

// Slide 7: Benefits for Organization
let slide7 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide7.addText("Benefits for Our Organization", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});

const orgBenefits = [
  { title: "Enhanced Security Posture", desc: "Continuous verification reduces breach risk significantly" },
  { title: "Regulatory Compliance", desc: "Meets HIPAA, PCI-DSS, and other regulatory requirements" },
  { title: "Reduced Attack Surface", desc: "Microsegmentation limits lateral movement of threats" },
  { title: "Remote Work Enablement", desc: "Secure access from any location without VPN complexity" }
];
orgBenefits.forEach((benefit, i) => {
  const xPos = (i % 2) * 4.7 + 0.4;
  const yPos = Math.floor(i / 2) * 1.6 + 1.3;
  slide7.addShape(pptx.ShapeType.roundRect, { x: xPos, y: yPos, w: 4.5, h: 1.4, fill: { color: "0A1628" }, line: { color: "10B981", pt: 1 } });
  slide7.addText(benefit.title, { x: xPos + 0.2, y: yPos + 0.2, w: 4, h: 0.4, fontSize: 14, bold: true, color: "34D399", fontFace: "Arial" });
  slide7.addText(benefit.desc, { x: xPos + 0.2, y: yPos + 0.65, w: 4, h: 0.6, fontSize: 11, color: "D1D5DB", fontFace: "Arial" });
});
slide7.addText("(Fortinet, n.d.; Palo Alto Networks, n.d.)", { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 10, color: "60A5FA", fontFace: "Arial" });

// Slide 8: Benefits for IT Team
let slide8 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide8.addText("Benefits for Our IT Team", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});

const itBenefits = [
  { title: "Simplified Access Management", desc: "Centralized policy control across all resources" },
  { title: "Better Visibility", desc: "Complete insight into who accesses what and when" },
  { title: "Reduced Complexity", desc: "Eliminate VPN infrastructure and legacy perimeter tools" },
  { title: "Faster Incident Response", desc: "Immediate isolation capabilities limit breach impact" }
];
itBenefits.forEach((benefit, i) => {
  const xPos = (i % 2) * 4.7 + 0.4;
  const yPos = Math.floor(i / 2) * 1.6 + 1.3;
  slide8.addShape(pptx.ShapeType.roundRect, { x: xPos, y: yPos, w: 4.5, h: 1.4, fill: { color: "0A1628" }, line: { color: "3B82F6", pt: 1 } });
  slide8.addText(benefit.title, { x: xPos + 0.2, y: yPos + 0.2, w: 4, h: 0.4, fontSize: 14, bold: true, color: "60A5FA", fontFace: "Arial" });
  slide8.addText(benefit.desc, { x: xPos + 0.2, y: yPos + 0.65, w: 4, h: 0.6, fontSize: 11, color: "D1D5DB", fontFace: "Arial" });
});
slide8.addText("(Rose et al., 2020)", { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 10, color: "60A5FA", fontFace: "Arial" });

// Slide 9: Conclusion
let slide9 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide9.addText("Conclusion", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});

// Key phrase
slide9.addShape(pptx.ShapeType.roundRect, { x: 1, y: 1.3, w: 8, h: 0.7, fill: { color: "1E3A5F" }, line: { color: "3B82F6", pt: 1 } });
slide9.addText("Zero Trust is not just a security model—it's a strategic imperative", {
  x: 1, y: 1.4, w: 8, h: 0.5,
  fontSize: 14, bold: true, color: "60A5FA", fontFace: "Arial", align: "center"
});

const conclusions = [
  "Traditional perimeter security can no longer protect modern enterprises",
  "Zero Trust's \"never trust, always verify\" approach addresses today's threats",
  "Implementation provides benefits for both the organization and IT teams",
  "Adopting ZTA positions our organization for a more secure future"
];
conclusions.forEach((point, i) => {
  slide9.addShape(pptx.ShapeType.ellipse, { x: 0.7, y: 2.2 + (i * 0.55), w: 0.2, h: 0.2, fill: { color: "3B82F6" } });
  slide9.addText(point, { x: 1.05, y: 2.15 + (i * 0.55), w: 8, h: 0.4, fontSize: 13, color: WHITE, fontFace: "Arial" });
});

// Call to action
slide9.addShape(pptx.ShapeType.roundRect, { x: 1.5, y: 4.5, w: 7, h: 0.7, fill: { color: "3B82F6" } });
slide9.addText("Recommendation: Begin Zero Trust implementation planning", {
  x: 1.5, y: 4.55, w: 7, h: 0.6,
  fontSize: 14, bold: true, color: WHITE, fontFace: "Arial", align: "center"
});

// Slide 10: References
let slide10 = pptx.addSlide({ masterName: "WGU_MASTER" });
slide10.addText("References", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, bold: true, color: WHITE, fontFace: "Arial"
});

const references = [
  "Fortinet. (n.d.). What is zero trust network access (ZTNA)?",
  "     https://www.fortinet.com/resources/cyberglossary/what-is-ztna",
  "",
  "IBM Security. (2023). Cost of a data breach report 2023.",
  "     https://www.ibm.com/reports/data-breach",
  "",
  "Palo Alto Networks. (n.d.). What is a zero trust architecture?",
  "     https://www.paloaltonetworks.com/cyberpedia/what-is-a-zero-trust-architecture",
  "",
  "Rose, S., Borchert, O., Mitchell, S., & Connelly, S. (2020). Zero trust architecture",
  "     (NIST SP 800-207). National Institute of Standards and Technology.",
  "     https://doi.org/10.6028/NIST.SP.800-207"
];

let yPos = 1.4;
references.forEach((ref) => {
  const isUrl = ref.trim().startsWith("https://");
  const isIndented = ref.startsWith("     ");
  slide10.addText(ref.trim(), {
    x: isIndented ? 0.8 : 0.5, y: yPos, w: 9, h: 0.35,
    fontSize: 11, color: isUrl ? "60A5FA" : WHITE, fontFace: "Arial"
  });
  yPos += ref === "" ? 0.2 : 0.35;
});

// Save the file
const outputPath = path.join(process.cwd(), "public", "Zero-Trust-Architecture-Presentation.pptx");
await pptx.writeFile({ fileName: outputPath });
console.log(`PowerPoint saved to: ${outputPath}`);
