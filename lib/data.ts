export const NAV_LINKS = ["About", "Services", "Projects", "Contact"] as const;

export const SERVICES = [
  {
    num: "01",
    name: "Full-Stack Development",
    desc: "Building end-to-end web applications featuring scalable backends, clean API architectures, and responsive, fluid user interfaces with modern technologies.",
  },
  {
    num: "02",
    name: "Frontend Engineering",
    desc: "Developing high-performance, accessible, and dynamic user interfaces with fine-tuned animations, smooth interactions, and state-of-the-art React architectures.",
  },
  {
    num: "03",
    name: "UI/UX Design",
    desc: "Crafting intuitive and visually stunning user experiences with thoughtful design systems, seamless interactions, and user-centered design principles.",
  },
  {
    num: "04",
    name: "Logo Design",
    desc: "Creating memorable and distinctive brand identities through custom logo designs that capture your brand essence and resonate with your audience.",
  },
] as const;

export const PROJECTS = [
  {
    num: "01",
    name: "Catamaran Beach Restaurant",
    category: "Client",
    img1: "/images/catamaran1.png",
    img2: "/images/catamaran2.png",
    img3: "/images/catamaran3.png",
    link: "https://restaurant-website-tgzc.vercel.app/",
  },
  {
    num: "02",
    name: "Learning Management System",
    category: "Academic",
    img1: "/images/lms1.png",
    img2: "/images/lms3.png",
    img3: "/images/lms5.png",
    link: "https://github.com/sadhurka/Library-Management-System",
  },
  {
    num: "03",
    name: "Rathnayake Stores E-com Website",
    category: "Academic",
    img1: "/images/e2.png",
    img2: "/images/e 1.png",
    img3: "/images/e3.png",
    link: "https://deluxe-salamander-acf2db.netlify.app/",
  },
  {
    num: "04",
    name: "Result Management System",
    category: "Academic",
    img1: "/images/result1.png",
    img2: "/images/result2.png",
    img3: "/images/result3.png",
    link: "https://github.com/sadhurka/Result-Management-system",
  },
  {
    num: "05",
    name: "ChatBot For SLIATE",
    category: "Academic",
    img1: "/images/chatbot.png",
    img2: "/images/chatbot3.png",
    img3: "/images/chatbot 2.png",
    link: "https://chatbot-frontend-weld-beta.vercel.app/",
  },
   {
    num: "06",
    name: "Company Website",
    category: "Client",
    img1: "/images/company1.png",
    img2: "/images/company3.png",
    img3: "/images/company2.png",
    link: "",
  },
] as const;

export const MARQUEE_ROW1 = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

export const MARQUEE_ROW2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const ABOUT_DECORATIONS = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Moon icon",
    position: { top: "4%", left: "clamp(8px, 4%, 60px)" },
    width: "clamp(100px, 13vw, 210px)",
    dx: -80,
    delay: 0.1,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "3D object",
    position: { bottom: "8%", left: "clamp(16px, 10%, 100px)" },
    width: "clamp(80px, 11vw, 180px)",
    dx: -80,
    delay: 0.25,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Lego icon",
    position: { top: "4%", right: "clamp(8px, 4%, 60px)" },
    width: "clamp(100px, 13vw, 210px)",
    dx: 80,
    delay: 0.15,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3D group",
    position: { bottom: "8%", right: "clamp(16px, 10%, 100px)" },
    width: "clamp(110px, 14vw, 220px)",
    dx: 80,
    delay: 0.3,
  },
] as const;

export const ABOUT_TEXT =
  "I'm Sadhurka, a dedicated software engineer with a love for clean code, creative problem-solving, and empowering others through technology. With experience in full-stack development, I enjoy building web applications that make a difference. Let's create something amazing together!";

export const CONTACT_INFO = {
  email: "sadhurkadevaraj@gmail.com",
  whatsapp: "+94721549099",
} as const;