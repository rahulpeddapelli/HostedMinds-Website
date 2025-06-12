import image1 from './assets/servicesPreview/service-robotics.jpg';
import image2 from './assets/servicesPreview/service-iot.jpeg';
import image3 from './assets/servicesPreview/service-it.jpg';

const servicesData = [
  {
    "id": 1,
    "title": "STEM",
    "shortDes": "An educational program focused on Science, Technology, Engineering, and Mathematics.",
    "fullDes": "STEM, in full science, technology, engineering, and mathematics, is a curriculum centred on education in these disciplines. It prepares students for higher education and careers while promoting inquiry, reasoning, and collaboration.",
    "image": image3,
    "features": ["Subject-specific learning", "College and career preparation", "Fosters logical reasoning"],
    "audience": ["Primary students", "Secondary students", "Educational institutions"],
    "benefits": ["Enhanced analytical skills", "Career readiness", "Collaborative learning"],
    "cta": "Explore STEM Education"
  },
  {
    "id": 2,
    "title": "STEM LAB Setup",
    "shortDes": "Hands-on STEM lab environments for project-based learning.",
    "fullDes": "STEM labs enable hands-on, project-based learning of STEM concepts. Hostedminds helps schools set up Hi-Tech STEM labs aligning with core principles of Science, Technology, Engineering, and Mathematics.",
    "image": image1,
    "features": ["Hi-Tech equipment", "Project-based learning", "Customized setup"],
    "audience": ["Schools", "Institutes", "Educators"],
    "benefits": ["Enhanced engagement", "Practical application", "Tech-enabled education"],
    "cta": "Set Up a STEM Lab"
  },
  {
    "id": 3,
    "title": "E-Learning",
    "shortDes": "Hostedminds’ digital learning platform for all age groups.",
    "fullDes": "Our e-learning platform, HOSTEDMINDS LEARNING, offers a variety of free and paid courses across domains. Courses are delivered through videos and texts to enable accessible education for everyone.",
    "image": image2,
    "features": ["Video & text content", "Free and paid courses", "Wide range of subjects"],
    "audience": ["Students", "Professionals", "Lifelong learners"],
    "benefits": ["Flexible learning", "Practical sessions", "Wide accessibility"],
    "cta": "Start Learning Online"
  },
  {
    "id": 4,
    "title": "Learn to Code",
    "shortDes": "Master software development with Hostedminds courses.",
    "fullDes": "Hostedminds provides beginner to advanced programming courses to help students learn software development and build apps, websites, and more using languages like JavaScript and Python.",
    "image": image3,
    "features": ["Real-world projects", "Multiple programming languages", "Career-oriented learning"],
    "audience": ["Students", "Aspirant developers", "Tech enthusiasts"],
    "benefits": ["Build job-ready skills", "Understand coding logic", "Create real applications"],
    "cta": "Learn Coding Today"
  },
  {
    "id": 5,
    "title": "Experiential Learning",
    "shortDes": "Learning through experience and reflection.",
    "fullDes": "Experiential learning helps learners understand themselves and their environments better through real-world experiences. It encourages personal growth and performance improvement.",
    "image": image1,
    "features": ["Problem-solving", "Decision making", "Personal reflection"],
    "audience": ["Students", "Professionals", "Trainers"],
    "benefits": ["Improved decision-making", "Lifelong learning", "Performance enhancement"],
    "cta": "Experience Learning"
  },
  {
    "id": 6,
    "title": "Robotics",
    "shortDes": "Learn and build real robots with practical training.",
    "fullDes": "Hostedminds’ Robotics courses teach learners to build and program robots, integrating skills in coding, physics, and electronics, with a focus on hands-on experience.",
    "image": image2,
    "features": ["Hands-on kits", "Robotic projects", "STEM-based"],
    "audience": ["Students", "Hobbyists", "Aspiring engineers"],
    "benefits": ["Fun learning", "STEM integration", "Build working robots"],
    "cta": "Start with Robotics"
  },
  {
    "id": 7,
    "title": "Educational Projects",
    "shortDes": "End-to-end academic project support.",
    "fullDes": "Hostedminds provides design, feasibility analysis, raw designs, and guided support for educational projects to meet academic requirements and foster innovation.",
    "image": image3,
    "features": ["Blueprints", "Timeline & guidance", "Feasibility reports"],
    "audience": ["Students", "Researchers", "Academicians"],
    "benefits": ["Project clarity", "Expert support", "Innovation boost"],
    "cta": "Build Your Project"
  },
  {
    "id": 8,
    "title": "Circuit & PCB Designing",
    "shortDes": "Professional circuit and PCB design services.",
    "fullDes": "We design high-quality PCBs for industries, startups, and student projects, ensuring electrical integrity and efficiency in electronic product development.",
    "image": image1,
    "features": ["Custom PCB design", "Track & pad layout", "Industrial quality"],
    "audience": ["Industries", "IoT developers", "Students"],
    "benefits": ["Accurate designs", "Faster development", "Expert review"],
    "cta": "Design Your PCB"
  },
  {
    "id": 9,
    "title": "Electronics Manufacturing Services",
    "shortDes": "Complete electronics manufacturing solutions.",
    "fullDes": "Hostedminds offers electronics manufacturing from PCB design to full assembly, including R&D and enclosure integration for OEMs and startups.",
    "image": image2,
    "features": ["R&D to assembly", "End-to-end EMS", "Custom enclosures"],
    "audience": ["OEMs", "Startups", "Electronics companies"],
    "benefits": ["One-stop solution", "Cost-effective", "Rapid production"],
    "cta": "Start Manufacturing"
  },
  {
    "id": 10,
    "title": "Component Procurement",
    "shortDes": "Low-cost and reliable component sourcing.",
    "fullDes": "We manage the procurement of electronic components, reviewing BOMs, ensuring low-cost sourcing, and tailoring solutions to project-specific needs.",
    "image": image3,
    "features": ["BOM review", "Vendor management", "Custom sourcing"],
    "audience": ["Manufacturers", "Product teams", "Startups"],
    "benefits": ["Cost saving", "Streamlined procurement", "Expert support"],
    "cta": "Procure Components"
  },
  {
    "id": 11,
    "title": "Reverse Engineering",
    "shortDes": "Analyze and replicate existing electronic products.",
    "fullDes": "We provide reverse engineering services to re-engineer or analyze products, recover legacy designs, or conduct competitor analysis.",
    "image": image1,
    "features": ["Component analysis", "Redesign support", "Documentation"],
    "audience": ["R&D teams", "Manufacturers", "Students"],
    "benefits": ["Recover lost designs", "IP investigation", "Boost innovation"],
    "cta": "Start Reverse Engineering"
  },
  {
    "id": 12,
    "title": "Product Unit Testing",
    "shortDes": "Test your electronic products for certification and quality.",
    "fullDes": "We help manufacturers test their electronic assemblies under different conditions to ensure product reliability and readiness for certification.",
    "image": image2,
    "features": ["Pre-certification tests", "Condition simulation", "Compliance testing"],
    "audience": ["Product makers", "Manufacturers", "QA teams"],
    "benefits": ["Avoid certification failure", "Ensure quality", "Meet standards"],
    "cta": "Test Your Product"
  },
  {
    "id": 13,
    "title": "IoT & IIoT Services",
    "shortDes": "Smart solutions for industrial and home automation.",
    "fullDes": "Hostedminds builds IoT-enabled systems for factories, homes, and offices to monitor, manage, and automate operations through web-based applications.",
    "image": image3,
    "features": ["Remote monitoring", "Web access", "Automation"],
    "audience": ["Factories", "Homes", "Enterprises"],
    "benefits": ["Smart control", "Real-time data", "Efficiency gains"],
    "cta": "Enable Smart IoT"
  },
  {
    "id": 14,
    "title": "Software & Website Development",
    "shortDes": "Customized web and software development services.",
    "fullDes": "From business websites to enterprise software, we build scalable solutions with modern technology stacks for various commercial and industrial needs.",
    "image": image1,
    "features": ["Websites", "Custom apps", "Cross-device access"],
    "audience": ["Businesses", "Startups", "Institutes"],
    "benefits": ["Boost visibility", "Streamline operations", "Professional UX"],
    "cta": "Develop Your Software"
  },
  {
    "id": 15,
    "title": "Mobile App Development",
    "shortDes": "Mobile solutions from concept to deployment.",
    "fullDes": "We offer end-to-end mobile app development, from analysis and UI/UX to launch and scaling across Android and iOS platforms.",
    "image": image2,
    "features": ["Android & iOS", "Custom design", "Integration ready"],
    "audience": ["Entrepreneurs", "Enterprises", "Educators"],
    "benefits": ["Mobile presence", "Customer engagement", "On-the-go access"],
    "cta": "Build Your App"
  },
  {
    "id": 16,
    "title": "Research & Development",
    "shortDes": "Innovate new products with our R&D expertise.",
    "fullDes": "Our engineers work on enabling technologies and product innovation to help clients build advanced solutions tailored to specific needs.",
    "image": image3,
    "features": ["Idea to prototype", "Technology innovation", "Exploratory projects"],
    "audience": ["Tech companies", "Startups", "Inventors"],
    "benefits": ["Faster innovation", "Custom solutions", "Expertise access"],
    "cta": "Start R&D"
  },
  {
    "id": 17,
    "title": "POC & Prototypes",
    "shortDes": "Prove your idea with working models.",
    "fullDes": "We help validate product ideas by building Proof of Concept and prototypes that test design feasibility and support decision making.",
    "image": image1,
    "features": ["Feasibility tests", "Working models", "Design visualization"],
    "audience": ["Startups", "Engineers", "Investors"],
    "benefits": ["Validate ideas", "Reduce risk", "Win stakeholder confidence"],
    "cta": "Create a Prototype"
  },
  {
    "id": 18,
    "title": "Product Development/Pilot",
    "shortDes": "Turn ideas into scalable products with pilot testing.",
    "fullDes": "Hostedminds supports clients from ideation to product development and pilot launches. We handle engineering, lifecycle development, and mass production if validated.",
    "image": image2,
    "features": ["End-to-end development", "Pilot trials", "Mass production"],
    "audience": ["Inventors", "Entrepreneurs", "Businesses"],
    "benefits": ["Scalable products", "Faster time-to-market", "Production-ready"],
    "cta": "Launch Your Product"
  }
]


export default servicesData;
