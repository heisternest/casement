import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import infrastructure from "@/assets/project-infrastructure.jpg";
import renovation from "@/assets/project-renovation.jpg";

export const company = {
  name: "Casement Construction",
  short: "Casement",
  tagline: "Building Strong Foundations for the Future",
  description:
    "A full-service construction and civil engineering firm delivering residential, commercial, and infrastructure projects with uncompromising quality.",
  phone: "+1 (555) 248-7600",
  email: "hello@casementconstruction.com",
  address: "1820 Foundry Avenue, Suite 400, Baltimore, MD 21211",
  hours: "Mon – Fri · 8:00 AM – 6:00 PM",
};

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "120+", label: "Completed Projects" },
  { value: "50+", label: "Skilled Professionals" },
  { value: "98%", label: "Client Satisfaction" },
];

export const services = [
  {
    slug: "residential",
    title: "Residential Construction",
    icon: "Home",
    image: residential,
    description:
      "Custom homes, multi-family residences, and luxury developments built to the highest craft standards.",
  },
  {
    slug: "commercial",
    title: "Commercial Buildings",
    icon: "Building2",
    image: commercial,
    description:
      "Offices, retail, and mixed-use developments that perform for tenants, owners, and communities.",
  },
  {
    slug: "infrastructure",
    title: "Road & Infrastructure",
    icon: "TrafficCone",
    image: infrastructure,
    description:
      "Roads, bridges, and civil works delivered safely, on schedule, and ready for decades of service.",
  },
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    icon: "Hammer",
    image: renovation,
    description:
      "Thoughtful renovations that modernize spaces while honoring original structure and detail.",
  },
  {
    slug: "interior",
    title: "Interior Finishing",
    icon: "Paintbrush",
    image: residential, // Reusing for dummy data
    description:
      "Fit-out, finishes, and millwork executed with precision for a flawless final delivery.",
  },
  {
    slug: "management",
    title: "Project Planning & Management",
    icon: "ClipboardList",
    image: commercial, // Reusing for dummy data
    description:
      "End-to-end project management from feasibility and budgeting through closeout and handover.",
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Infrastructure" | "Renovation";
  year: number;
  client: string;
  duration: string;
  image: string;
  description: string;
  overview: string;
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "harbor-point-residences",
    title: "Harbor Point Residences",
    location: "Baltimore, MD",
    category: "Residential",
    year: 2024,
    client: "Harbor Living Group",
    duration: "22 months",
    image: residential,
    description:
      "A 48-unit luxury waterfront residence with private terraces and a rooftop sky lounge.",
    overview:
      "Harbor Point Residences sets a new benchmark for waterfront living, combining a precise concrete frame with a curtain-wall facade engineered for the harbor microclimate. Casement led the project from foundations through final fit-out, coordinating six trades on a tight urban site.",
    scope: [
      "Site preparation and deep-pile foundations",
      "Cast-in-place concrete superstructure",
      "Unitized curtain-wall facade installation",
      "Full MEP coordination and commissioning",
      "Premium interior fit-out and millwork",
    ],
  },
  {
    slug: "meridian-tower",
    title: "Meridian Corporate Tower",
    location: "Washington, DC",
    category: "Commercial",
    year: 2023,
    client: "Meridian Holdings",
    duration: "30 months",
    image: commercial,
    description:
      "A 24-story Class A office tower with LEED Gold certification and ground-floor retail.",
    overview:
      "Meridian Tower is a 24-story Class A office tower delivered for an institutional client. The building targets LEED Gold and incorporates a high-performance facade, raised access flooring throughout, and a column-free trading floor at level three.",
    scope: [
      "Excavation and three-level below-grade structure",
      "Steel frame erection and metal deck",
      "High-performance unitized curtain wall",
      "Tenant fit-out coordination across 22 floors",
      "LEED Gold documentation and commissioning",
    ],
  },
  {
    slug: "northbridge-interchange",
    title: "Northbridge Interchange",
    location: "Frederick County, MD",
    category: "Infrastructure",
    year: 2024,
    client: "State Department of Transportation",
    duration: "36 months",
    image: infrastructure,
    description:
      "A four-level interchange and twin-span bridge serving 80,000 vehicles per day.",
    overview:
      "Northbridge is a public-works interchange with twin post-tensioned bridges spanning the river basin. Casement self-performed the structural concrete and managed all traffic-control phases to keep two existing routes open throughout construction.",
    scope: [
      "Drilled-shaft foundations and pier construction",
      "Post-tensioned segmental bridge spans",
      "Asphalt paving and lane re-alignment",
      "Stormwater management and erosion control",
      "Phased traffic management plan",
    ],
  },
  {
    slug: "alder-house-renovation",
    title: "Alder House Renovation",
    location: "Annapolis, MD",
    category: "Renovation",
    year: 2024,
    client: "Private Owner",
    duration: "11 months",
    image: renovation,
    description:
      "A complete renovation of a historic townhome with modern interiors and concealed services.",
    overview:
      "A century-old townhome reimagined for contemporary living. The team carefully preserved the original masonry shell while inserting a new structural steel diaphragm, allowing fully open living spaces and a continuous oak-clad volume from front to rear.",
    scope: [
      "Historic facade preservation",
      "Structural steel reinforcement",
      "Bespoke joinery and oak panelling",
      "New mechanical, electrical, and plumbing",
      "Landscape and rear courtyard works",
    ],
  },
  {
    slug: "lakeside-villas",
    title: "Lakeside Villas",
    location: "Columbia, MD",
    category: "Residential",
    year: 2022,
    client: "Lakeside Development",
    duration: "18 months",
    image: residential,
    description:
      "A community of 24 architect-designed villas around a restored lakefront promenade.",
    overview:
      "A boutique residential community of 24 villas, each tuned to its plot orientation. Casement self-performed concrete and led a full-service general contracting role with a single point of accountability for the developer.",
    scope: [
      "Mass earthworks and lakefront stabilization",
      "Concrete superstructure for 24 villas",
      "External works and shared landscape",
      "Premium interior package",
      "Owner handover and snagging program",
    ],
  },
  {
    slug: "civic-plaza",
    title: "Civic Plaza Mixed-Use",
    location: "Richmond, VA",
    category: "Commercial",
    year: 2023,
    client: "Civic Partners LLC",
    duration: "26 months",
    image: commercial,
    description:
      "Mixed-use plaza combining offices, ground-floor retail, and a public courtyard.",
    overview:
      "A vibrant mixed-use development knitting two city blocks together with a generous public courtyard. The project required careful staging on a constrained urban site and coordination with three adjoining stakeholders.",
    scope: [
      "Demolition and shoring of adjacent structures",
      "Concrete podium and steel-framed upper levels",
      "Retail shell delivery for 14 tenants",
      "Public realm and hardscape works",
      "Client and tenant coordination",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Casement delivered our flagship office tower three weeks ahead of schedule, and the build quality is genuinely best-in-class.",
    author: "Elena Marchetti",
    role: "Director of Real Estate, Meridian Holdings",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "Their planning discipline made a complex public-works program feel manageable. Communication was excellent at every level.",
    author: "Robert Chen",
    role: "Senior Engineer, MD DOT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "From the first site visit to handover, the team treated our home as if it were their own. Exceptional craftsmanship.",
    author: "Sarah Whitfield",
    role: "Private Owner, Alder House",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "We've partnered with Casement on three multi-family developments now. Their self-perform concrete division is an absolute game changer.",
    author: "David Rosenberg",
    role: "Managing Partner, Lakeside",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "Safety, quality, and integrity. They don't just talk about these values—they live them on the job site every single day.",
    author: "Michael O'Connor",
    role: "Lead Architect, Studio O'Connor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "A truly professional organization. They anticipated supply chain issues months in advance and kept our project perfectly on track.",
    author: "Jessica Lin",
    role: "VP Operations, Civic Partners",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export const team = [
  {
    name: "Marcus Calder",
    role: "Founder & Chief Executive",
    bio: "Three decades of experience leading commercial and civil programs across the East Coast.",
  },
  {
    name: "Priya Anand",
    role: "Chief Operating Officer",
    bio: "Operational leader focused on delivery discipline, safety culture, and project performance.",
  },
  {
    name: "Daniel Okafor",
    role: "Director of Construction",
    bio: "Self-perform structures specialist with deep experience in concrete and steel superstructure.",
  },
  {
    name: "Hannah Rivera",
    role: "Director of Pre-Construction",
    bio: "Leads estimating, planning, and design coordination from feasibility through GMP.",
  },
];

export const timeline = [
  { year: "2010", title: "Founded in Baltimore", text: "Casement opens with a six-person crew and a focus on residential renovations." },
  { year: "2014", title: "First commercial program", text: "Awarded a multi-site retail rollout across the mid-Atlantic." },
  { year: "2017", title: "Civil & infrastructure division", text: "Launched dedicated civil works practice for public-sector projects." },
  { year: "2020", title: "100th project delivered", text: "Reached 100 completed projects across four states." },
  { year: "2024", title: "120+ projects, 50+ professionals", text: "Recognized by industry peers for safety performance and on-time delivery." },
];

export const values = [
  { title: "Safety", text: "An uncompromising safety culture on every site, every shift." },
  { title: "Quality", text: "Engineered details and rigorous QA at every stage of construction." },
  { title: "Transparency", text: "Open books, open schedules, honest conversations." },
  { title: "Timely Delivery", text: "Disciplined planning so milestones are predictable, not aspirational." },
  { title: "Innovation", text: "Modern methods and digital tools applied with practical judgment." },
];

export type Blog = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
};

export const blogs: Blog[] = [
  {
    slug: "future-of-sustainable-concrete",
    title: "The Future of Sustainable Concrete in Urban Infrastructure",
    category: "Sustainability",
    author: "Marcus Calder",
    date: "May 12, 2026",
    excerpt: "Exploring new concrete formulations that reduce carbon footprint without compromising structural integrity.",
    content: "The construction industry is at a crossroads where sustainability is no longer optional. Traditional concrete production is responsible for a significant portion of global carbon emissions. However, recent advancements in materials science have introduced low-carbon concrete alternatives that utilize industrial byproducts like fly ash and slag.\n\nAt Casement Construction, we are actively piloting these new formulations on our urban infrastructure projects. Early results show that not only do these mixes significantly reduce the carbon footprint, but they also offer improved durability against harsh urban environments. As we look towards the next decade, sustainable concrete will become the baseline standard for all major public works.",
    image: infrastructure,
  },
  {
    slug: "navigating-supply-chain-challenges",
    title: "Navigating Supply Chain Challenges in Commercial Builds",
    category: "Project Management",
    author: "Priya Anand",
    date: "April 28, 2026",
    excerpt: "Strategies for mitigating delays and managing costs in a volatile global supply chain environment.",
    content: "Supply chain volatility continues to be one of the most pressing challenges in commercial construction today. From fluctuating steel prices to delays in specialized MEP equipment, project managers must adopt a more proactive approach to procurement.\n\nOur strategy at Casement involves early engagement with key suppliers and the use of predictive analytics to forecast material shortages before they impact the critical path. By shifting away from just-in-time delivery to strategic stockpiling for essential components, we have successfully shielded our clients from the worst effects of global supply chain disruptions. Transparent communication and flexible scheduling remain our best tools for delivering on time and on budget.",
    image: commercial,
  },
  {
    slug: "adaptive-reuse-historic-structures",
    title: "Adaptive Reuse: Breathing New Life into Historic Structures",
    category: "Renovation",
    author: "Daniel Okafor",
    date: "March 15, 2026",
    excerpt: "The technical and structural considerations of converting century-old buildings for modern use.",
    content: "Adaptive reuse is both an art and a highly complex engineering challenge. Upgrading historic masonry structures to meet modern seismic, fire, and accessibility codes often requires inserting completely new structural systems within an existing shell.\n\nIn our recent Alder House project, the key to success was extensive pre-construction surveying and non-destructive testing to understand the true condition of the original fabric. By carefully designing a new steel diaphragm that integrated with the historic brickwork, we were able to create expansive, open-plan interiors while preserving the streetscape's heritage. Adaptive reuse is the ultimate form of sustainable construction—recycling an entire building.",
    image: renovation,
  },
];
