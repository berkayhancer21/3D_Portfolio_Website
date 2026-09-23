const navLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Experience",
        link: "/experience",
    },
    {
        name: "Skills",
        link: "/skills",
    },
    {
        name: "CV",
        link: "/cv",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

// Eski tek sayfa (#hash) linklerini yeni sayfalara yönlendirmek için
const legacyHashRoutes = {
    "#hero": "/",
    "#works": "/projects",
    "#experience": "/experience",
    "#skills": "/skills",
    "#cv": "/cv",
    "#contact": "/contact",
};

// Ana sayfadaki profil fotoğrafı - kendi fotoğrafını public/images/ altına koyup yolu buraya yaz
const profile = {
    photo: "/images/profile.jpg",
    name: "Berkay Hançer",
    role: "Computer Engineer",
    location: "Turkey",
};

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

// Ana sayfadaki kısa öne çıkanlar (CV'deki bilgilere dayanır)
const heroHighlights = [
    { icon: "🎓", text: "Valedictorian · GPA 3.72" },
    { icon: "📈", text: "TÜBİTAK-funded trading research" },
    { icon: "💼", text: "2 software internships" },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Data-Driven Solutions",
        desc: "With TÜBİTAK-backed experience, I turn market data into measurable results—building algorithmic trading strategies and web products that actually perform.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Transparent Process & Communication",
        desc: "I share assumptions, metrics, and progress at every step so decisions stay clear, collaborative, and grounded in data.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time, Scalable Delivery",
        desc: "I design React/Next.js architectures for performance and easy maintenance, delivering production-ready solutions on schedule.",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        category: "Frontend",
        desc: "Fast, responsive interfaces with modern React tooling.",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
        stack: ["React", "Next.js", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "CSS Modules", "GSAP", "Three.js"],
    },
    {
        name: "Python Developer",
        category: "Data & Algorithmic Trading",
        desc: "Backtesting, data analysis and ML-driven trading strategies.",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
        stack: ["pandas", "NumPy", "scikit-learn", "matplotlib", "Plotly", "Flask API", "Django", "Binance API"],
    },
    {
        name: "Backend Developer",
        category: "Backend & APIs",
        desc: "RESTful services and integrations that connect everything.",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
        stack: ["Node.js", "npm", "ASP.NET", "RESTful APIs", "Fetch / Axios", "JSON", "Telegram Bot API"],
    },
    {
        name: "Game Developer",
        category: "Game Development",
        desc: "Exploring interactive experiences and gameplay with Unity.",
        modelPath: "/models/unity_logo_3d_mesh.glb",
        scale: 1.7,
        rotation: [-150, 150, 0.2],
        stack: ["Unity", "C# Scripting", "3D Web (Three.js)"],
    },
    {
        name: "C# Developer",
        category: ".NET & Databases",
        desc: "Desktop and web apps with clean data layers.",
        modelPath: "/models/csharp_3d_model.glb",
        scale: 0.09,
        rotation: [0, -Math.PI / 12, 0],
        stack: ["C#", "ASP.NET", "Entity Framework", "Code First & Migrations", "LINQ", "MSSQL", "MySQL", "MongoDB"],
    },
];

// Skills sayfasındaki 3D modeli olmayan "araçlar" kartı
const toolsCard = {
    name: "Tools & Workflow",
    category: "Everyday Toolkit",
    desc: "The tools that keep projects organized, tested and shipped.",
    stack: ["Git", "GitHub / GitLab", "Linux", "Postman (API testing)", "Project Management", "Technical Documentation"],
};

const expCards = [
    {
        review: "Working on algorithmic trading projects taught me how to turn complex market data into practical insights. I gained strong skills in data analysis, optimization, and system design while contributing to a TÜBİTAK-supported project that connected research with real-world applications.",
        logoPath: "/images/python_logo.png",
        title: "Intern – 2KEKGAMES, Turkey (Summer 2024)",
        date: "July 2024 - August 2024",
        responsibilities: [
            "Contributed to the design, testing, and optimization of automated trading strategies to enhance efficiency and reliability.",
            "Collaborated with a cross-functional team to integrate new features and improve overall system performance.",
            "Increased trading system performance by 20% through data-driven analysis and iterative optimization."
        ],
    },
    {
        review: "Developing a C# desktop app with Entity Framework improved my understanding of databases and clean architecture. Optimizing performance with SQL and LINQ queries strengthened my problem-solving skills and focus on efficient, maintainable code.",
        logoPath: "/images/csharp_icon.png",
        title: "Intern – KAANLAR, Turkey (Summer 2025)",
        date: "June 2025 - July 2025",
        responsibilities: [
            "Developed a desktop application with Entity Framework to manage employee records and task tracking through full CRUD functionality.",
            "Implemented SQL and LINQ queries to optimize data retrieval and processing efficiency.",
            "Enhanced overall application performance by approximately 20% through code and database optimization.\n"
        ],
    },
];

const socialImgs = [
    {
        name: "instagram",
        imgPath: "/images/insta.png",
        url: "https://instagram.com/berkay_hancer_", // Buraya Instagram kullanıcı adını ekle
    },
    {
        name: "facebook",
        imgPath: "/images/fb.png",
        url: "https://www.facebook.com/profile.php?id=100005361766727", // Buraya Facebook kullanıcı adını ekle
    },
    {
        name: "twitter",
        imgPath: "/images/x.png",
        url: "https://twitter.com/hberkay2159", // Buraya Twitter/X kullanıcı adını ekle
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://linkedin.com/in/berkayhancer", // Buraya LinkedIn kullanıcı adını ekle
    },
];

export {
    words,
    abilities,
    expCards,
    socialImgs,
    techStackIcons,
    toolsCard,
    heroHighlights,
    navLinks,
    legacyHashRoutes,
    profile,
};