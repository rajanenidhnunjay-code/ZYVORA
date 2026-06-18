import { Project, Service, ProcessStep, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'aether',
    title: 'Aether Fragrances',
    category: 'Branding & Web Design',
    year: '2026',
    image: 'https://picsum.photos/seed/minimal-perfume/800/600',
    client: 'Aether Paris',
    concept: 'A premium digital storefront designed around fine-art art direction. Emphasizes negative space, custom cream layouts, and fluid micro-transitions.',
    deliverables: ['Creative Direction', 'E-Commerce UX', 'Tailwind Frontend'],
    themeColor: '#faf6f0',
    stats: [
      { label: 'Conversion Rate', value: '+34%' },
      { label: 'Average Session Duration', value: '4m 12s' },
      { label: 'Page Load Speed', value: '0.4s' }
    ]
  },
  {
    id: 'khora',
    title: 'Khora Architecture',
    category: 'Web Design',
    year: '2025',
    image: 'https://picsum.photos/seed/brutalist-building/800/600',
    client: 'Khora Studio Tokyo',
    concept: 'A highly structural, black-and-white portfolio for a premier architecture studio. Leverages strict grid layouts and brutalist monospace typography.',
    deliverables: ['Custom Grid Architecture', 'UI/UX Design', 'Optimal Performance'],
    themeColor: '#f1f1f1',
    stats: [
      { label: 'Portfolio Views', value: '120K+' },
      { label: 'Bounce Rate', value: '18%' },
      { label: 'Interactive Canvas FPS', value: '60' }
    ]
  },
  {
    id: 'novis',
    title: 'Novis Journal',
    category: 'Editorial',
    year: '2026',
    image: 'https://picsum.photos/seed/abstract-art-cream/800/600',
    client: 'Novis Media Corp',
    concept: 'A dynamic online publication promoting slow living. Prominent, gorgeous serif-style display headers, custom article grids, and calming earth-tone background palettes.',
    deliverables: ['Typography Systems', 'Content CMS Strategy', 'Responsive Reading Engine'],
    themeColor: '#f4f7f4',
    stats: [
      { label: 'Monthly Active Readers', value: '45K' },
      { label: 'Newsletter Signups', value: '24%' },
      { label: 'Average Read Ratio', value: '78%' }
    ]
  },
  {
    id: 'zeta',
    title: 'Zeta Ventures',
    category: 'Web Design',
    year: '2025',
    image: 'https://picsum.photos/seed/modernist-glass/800/600',
    client: 'Zeta Capital Group',
    concept: 'A state-of-the-art investor portal utilizing deep grey palettes, clean glassmorphic effects, and real-time interactive charts illustrating project trajectories.',
    deliverables: ['Client Portal Integration', 'Interactive Dashboard', 'Data Visualizations'],
    themeColor: '#f0f4f8',
    stats: [
      { label: 'Active Users', value: '1.2K' },
      { label: 'Weekly Active Rate', value: '92%' },
      { label: 'Data Latency', value: '<50ms' }
    ]
  },
  {
    id: 'vesper',
    title: 'Vesper Skincare',
    category: 'Branding & Web Design',
    year: '2026',
    image: 'https://picsum.photos/seed/aesthetic-interior/800/600',
    client: 'Vesper Labs',
    concept: 'A sensory ecommerce experience utilizing clean skin-tone backing blocks, natural ingredient interactive glossaries, and a frictionless, three-step checkout journey.',
    deliverables: ['Custom Shopify Design', 'Interactive Glossary', 'Product Identity'],
    themeColor: '#fcf6f5',
    stats: [
      { label: 'Monthly Revenue Increase', value: '+42%' },
      { label: 'Cart Abandonment Drop', value: '-12%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 'eidos',
    title: 'Eidos Gallery',
    category: 'Editorial',
    year: '2025',
    image: 'https://picsum.photos/seed/neutral-chair/800/600',
    client: 'Eidos NYC',
    concept: 'An online exhibition platform crafted for contemporary sculptors. Focuses on immersive full-screen visual galleries, smooth pan-and-zoom controls, and light-weight image rendering.',
    deliverables: ['Sleek Slide Transition', 'Virtual Exhibition UX', 'Dynamic Scaling'],
    themeColor: '#fdfdfd',
    stats: [
      { label: 'Virtual Attendance', value: '15K+' },
      { label: 'High-Res Ingestion', value: '8K supported' },
      { label: 'Artworks Curated', value: '450+' }
    ]
  }
];

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'We construct beautiful, bespoke, responsive websites grounded in sophisticated typography and generous negative space. Every design is built from the ground up to reflect your authentic brand voice.',
    details: [
      'Art Direction',
      'High-Fidelity Wireframes',
      'Responsive Fluid Layouts',
      'Interactive Micro-Animations',
      'Custom Pattern Creation'
    ],
    duration: '2 - 4 Weeks'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Systems',
    description: 'We build comprehensive and modular design systems that bring unity to complex products. We bridge research and beautiful visual design to create user experiences that feel intuitive and satisfying.',
    details: [
      'User Journey Mapping',
      'Component Library Construction',
      'Interactive Prototyping',
      'Usability Verification',
      'Figma-to-Code Asset Flow'
    ],
    duration: '3 - 6 Weeks'
  },
  {
    id: 'development',
    title: 'Website Development',
    description: 'Pristine, blazing-fast front-end engineering. We translate designs into responsive, beautiful code utilizing modern frameworks like React, Tailwind, and robust layout engines. Fully optimized for instant page speeds.',
    details: [
      'Tailwind CSS Integration',
      'React App Construction',
      'Framer Motion Choreography',
      'Performance Optimization',
      'SEO & Semantic Tagging'
    ],
    duration: '2 - 5 Weeks'
  },
  {
    id: 'branding',
    title: 'Creative Direction & Branding',
    description: 'We redefine your identity for the digital era. From layout guidelines and gorgeous logo styling to typographical rules and editorial copy guidelines, we frame your business as a leader in your market.',
    details: [
      'Logo & Visual Mark Styling',
      'Typography Spec Sheets',
      'Palette Guidance',
      'Digital Persona Handbooks',
      'Collateral Design Templates'
    ],
    duration: '3 - 5 Weeks'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Align',
    description: 'We host detailed deep-dive sessions to capture your distinct brand essence, operational goals, target demographic, and functional needs. We establish a rock-solid creative strategy.',
    details: [
      'Brand & Competitor Audit',
      'Creative Direction Workshops',
      'Sitemap / Information Architecture',
      'Technical Specification Outlines'
    ],
    timeline: 'Week 1'
  },
  {
    number: '02',
    title: 'Design Philosophy',
    description: 'We design visually stunning wireframes and high-fidelity mockups emphasizing typography pairing, structural white space, and modular layout rules. No templates — 100% custom visual styling.',
    details: [
      'Visual Mood Boards',
      'Homepage / Core Flow Conceptualization',
      'Detailed Typography Mockups',
      'Interactive Figma Prototypes'
    ],
    timeline: 'Weeks 2 - 3'
  },
  {
    number: '03',
    title: 'Bespoke Build',
    description: 'We build your approved screens using clean, semantic React code and responsive Tailwind layouts. We orchestrate subtle micro-animations that respond to mouse motion, hover, and scroll.',
    details: [
      'Responsive React Engineering',
      'Framer Motion Fluid Transitions',
      'Accessiblity & Semantic Tagging',
      'Performance Fine-Tuning'
    ],
    timeline: 'Weeks 4 - 5'
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'After passing robust quality-assurance checks, cross-device testing, and page-speed audits, your digital home is deployed. We configure custom styling guides and support handoffs.',
    details: [
      'Cross-Device Responsiveness Checks',
      'Lighthouse & Speed Testing',
      'Domain Setup & Launch Handholding',
      'Clean Code Documentation Layout'
    ],
    timeline: 'Week 6'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Zyvora redefined what we thought was possible with online experiences. Our brand has never felt so premium or pure. The response from our community has been absolutely overwhelming.",
    author: "Elise Laurent",
    role: "Founding Director",
    company: "Aether Paris"
  },
  {
    quote: "Zyvora understands silence. They know exactly how much space to give elements to make them powerful. Their craftsmanship, typography control, and raw coding skills are unmatched.",
    author: "Kenzō Tanaka",
    role: "Lead Architect",
    company: "Khora Studio"
  }
];
