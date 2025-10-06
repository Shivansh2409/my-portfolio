import React, { useState, useEffect, useRef } from "react";

// --- SVG ICONS ---
// Using inline SVGs for icons to avoid external dependencies.
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3h.1c.4-.7 1.3-1.4 2.8-1.4 3.1 0 3.7 2 3.7 4.6V19z"></path>
  </svg>
);

const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624l.21-2.121a3.375 3.375 0 00-2.455-2.455l-2.122-.21a3.375 3.375 0 00-2.455 2.455l-.21 2.121a3.375 3.375 0 002.455 2.455l2.121.21a3.375 3.375 0 002.455-2.455z"
    />
  </svg>
);

const ComputerDesktopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-4 text-cyan-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
    />
  </svg>
);

const ServerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-4 text-cyan-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0h13.5m-13.5 0a3 3 0 00-3 3v.75a3 3 0 003 3h13.5a3 3 0 003-3v-.75a3 3 0 00-3-3H5.25z"
    />
  </svg>
);

const CircleStackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-4 text-cyan-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"
    />
  </svg>
);

const BeakerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-4 text-cyan-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 6.087c0-.66.537-1.197 1.197-1.197h.006c.66 0 1.197.537 1.197 1.197v7.506c0 .66-.537 1.197-1.197 1.197h-.006c-.66 0-1.197-.537-1.197-1.197V6.087zM6 18.75a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75v-1.125a.75.75 0 00-.75-.75h-10.5a.75.75 0 00-.75.75v1.125zM6.006 6.087c0-.66.537-1.197 1.197-1.197h.006c.66 0 1.197.537 1.197 1.197v7.506c0 .66-.537 1.197-1.197 1.197h-.006c-.66 0-1.197-.537-1.197-1.197V6.087z"
    />
  </svg>
);

const GraduationCapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m0 0l15.482 0"
    />
  </svg>
);

const ArrowTopRightOnSquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H13.5m-4.5 0h-2.25"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-5 h-5 ml-1"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

// --- CUSTOM HOOK for Scroll Animations ---
const useAnimateOnScroll = () => {
  const ref = useRef(null);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          if (entry.target.dataset.direction === "left") {
            entry.target.classList.remove("-translate-x-10");
          } else {
            entry.target.classList.remove("translate-x-10");
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  return ref;
};

// --- Initial DATA ---
const initialPortfolioData = {
  name: "Shivansh Rathor",
  title: "Full-Stack Web Developer",
  bio: "Hello! I'm a self-motivated Full Stack Web Developer with a deep passion for creating dynamic and user-friendly web applications. My core expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I also have a strong background in Java development.I thrive on the entire development lifecycle, from designing robust databases and building RESTful APIs to creating responsive and intuitive user interfaces. For me, it's not just about making things work; it's about writing clean, efficient code and optimizing for the best possible performance. I enjoy collaborating in agile teams to bring powerful ideas to life",
  contact: "shivanshrathore61@email.com",
  linkedinUrl: "https://www.linkedin.com/in/shivanshrathor/",
  profileImage: "/WhatsApp Image 2025-07-28 at 01.12.11.jpeg",
  skills: [
    {
      category: "Frontend",
      icon: <ComputerDesktopIcon />,
      technologies: [
        "React & Next.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: <ServerIcon />,
      technologies: ["Node.js & Express", "GraphQL", "RESTful APIs"],
    },
    {
      category: "Databases",
      icon: <CircleStackIcon />,
      technologies: ["MongoDB & Mongoose", "MySQL", "Redis"],
    },
    {
      category: "Tools & DevOps",
      icon: <BeakerIcon />,
      technologies: [
        "Git & GitHub",
        "Jest",
        "Cloudinary",
        "Mapbox",
        "Passport.js",
        "Multer",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Shri Ramswaroop College Of Engineering and Management",
      period: "2023 - 2027",
      details:
        "Focus on web-development and learn the fundamental concept of computer science",
    },
    {
      degree: "10+2",
      institution: "Rani Laxmi Bai Memorial School",
      period: "2018 - 2022",
      details: "Basic concept of languages like Java, C++, HTML,CSS",
    },
  ],
  projects: [
    {
      title: "Davel AI - AI Content Generator ",
      description:
        "Engineered a real-time, collaborative coding platform to accelerate team development workflows. The application features an integrated AI assistant that generates and debugs code, with suggestions that can be discussed in a built-in team chat. It supports Google Docs-style simultaneous code editing, with all changes saved instantly. A core innovation is the use of Web Containers to spin up live Node.js servers in the cloud with a single click, eliminating local setup.",
      tech: [
        "React",
        "Node.js",
        "Redis",
        "JWT tokens",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
        "Web Containers",
        "Gemini API",
        "Express.js",
      ],
      imageUrl: "/Screenshot 2025-09-29 at 7.28.35 PM.png",
      liveUrl: "https://davel.vercel.app/",
      githubUrl: "https://github.com/Shivansh2409/Davel",
    },
    {
      title: "WonderLust - Travel Review Web App",
      description:
        "A full-stack CRUD-based travel review platform where users can share destinations,post reviews, upload images, and view places via an interactive map.",
      tech: [
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mapbox",
        "Passport.js",
        "Joi",
        "Multer",
        "Cloudinary",
      ],
      imageUrl: "/Screenshot 2025-05-27 at 1.51.48 PM.png",
      liveUrl: "https://wonderlust-1-2kty.onrender.com/",
      githubUrl: "https://github.com/Shivansh2409/WonderLust",
    },
    {
      title: "Zerodha Clone – Stock Portfolio Management System",
      description:
        "This project is a full-stack clone of the popular Indian trading platform, Zerodha. The goal was to build a secure and intuitive application where users can manage their stock investments. The application features a complete client-server architecture, from a dynamic frontend to a robust backend with secure authentication.",
      tech: ["React", "Axios", "JWT", "CSS Modules", "MongoDB"],
      imageUrl: "/Screenshot 2025-07-22 at 1.57.52 AM.png",
      liveUrl: "https://github.com/Shivansh2409/ZerodhaClone",
      githubUrl: "https://github.com/Shivansh2409/ZerodhaClone",
    },
  ],
};

// --- Reusable Components ---
const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center ${className}`}
  >
    <div className="max-w-7xl mx-auto w-full">{children}</div>
  </section>
);

const AnimatedItem = ({ children, direction = "left" }) => {
  const itemRef = useAnimateOnScroll();
  return (
    <div
      ref={itemRef}
      data-direction={direction}
      className={`opacity-0 transform transition-all duration-1000 ease-in-out ${
        direction === "left" ? "-translate-x-10" : "translate-x-10"
      }`}
    >
      {children}
    </div>
  );
};

// --- Section Components ---

const Header = ({ portfolioData }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Skills", "Projects", "Education"];
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-cyan-400">
            {portfolioData.name.split(" ")[0]}
            <span className="text-white">.</span>
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Hero = ({ portfolioData, enhanceBio, isEnhancingBio }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-cyan-900/60 animate-gradient-move"></div>
      </div>
      <div className="relative z-10 p-8">
        <AnimatedItem direction="left">
          <img
            src={portfolioData.profileImage}
            alt={portfolioData.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/200x200/111827/7dd3fc?text=A+D";
            }}
          />
        </AnimatedItem>
        <AnimatedItem direction="right">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            Hi, I'm <span className="text-cyan-400">{portfolioData.name}</span>
          </h1>
        </AnimatedItem>
        <AnimatedItem direction="left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            {portfolioData.title}
          </h2>
        </AnimatedItem>
        <AnimatedItem direction="right">
          <p className="max-w-2xl mx-auto text-gray-400 mb-4">
            {portfolioData.bio}
          </p>
          <button
            onClick={enhanceBio}
            disabled={isEnhancingBio}
            className="inline-flex items-center justify-center px-4 py-2 mb-8 border border-cyan-500 text-sm font-medium rounded-md text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SparklesIcon />{" "}
            {isEnhancingBio ? "Enhancing..." : "Enhance with AI"}
          </button>
        </AnimatedItem>
        <AnimatedItem>
          <a
            href={`mailto:${portfolioData.contact}`}
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white bg-[#0A66C2] p-4 m-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <LinkedinIcon />
          </a>
        </AnimatedItem>
      </div>
    </section>
  );
};

const Skills = ({ portfolioData }) => {
  return (
    <Section id="skills" className="bg-gray-900">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">
            Professional <span className="text-cyan-400">Skillset</span>
          </h2>
          <p className="text-gray-400 mt-2">My technical toolbox.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((skillCategory, index) => (
            <AnimatedItem
              key={skillCategory.category}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg h-full group hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-cyan-500">
                {skillCategory.icon}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {skillCategory.category}
                </h3>
                <ul className="space-y-2">
                  {skillCategory.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Projects = ({
  portfolioData,
  generateProjectDescription,
  generatingProjectId,
}) => {
  return (
    <Section id="projects">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">
            My <span className="text-cyan-400">Creations</span>
          </h2>
          <p className="text-gray-400 mt-2">
            A selection of projects I'm proud of.
          </p>
        </div>
        <div className="space-y-24">
          {portfolioData.projects.map((project, index) => (
            <AnimatedItem
              key={project.title}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/111827/7dd3fc?text=Project+Image";
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <button
                    onClick={() => generateProjectDescription(project.title)}
                    disabled={generatingProjectId === project.title}
                    className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-cyan-500 text-sm font-medium rounded-md text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <SparklesIcon />{" "}
                    {generatingProjectId === project.title
                      ? "Generating..."
                      : "Generate Description with AI"}
                  </button>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-gray-700 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-500 hover:bg-cyan-600"
                    >
                      Live Demo <ArrowTopRightOnSquareIcon />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Source Code <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Education = ({ portfolioData }) => {
  return (
    <Section id="education">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 mt-2">
            My academic background and qualifications.
          </p>
        </div>
        <div className="relative border-l-2 border-cyan-700 ml-6">
          {portfolioData.education.map((edu, index) => (
            <AnimatedItem
              key={edu.institution}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="mb-10 ml-10">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-cyan-500 rounded-full -left-4 ring-8 ring-gray-900">
                  <GraduationCapIcon />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {edu.institution} | {edu.period}
                </time>
                <p className="text-base font-normal text-gray-500">
                  {edu.details}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Footer = ({ onDownload, portfolioData }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
          Reserved.
        </p>
        <p className="mt-1">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [isEnhancingBio, setIsEnhancingBio] = useState(false);
  const [generatingProjectId, setGeneratingProjectId] = useState(null);

  // --- Gemini API Call Function ---
  const callGeminiAPI = async (prompt) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log("Using API Key:", apiKey);
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      const result = await response.json();
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        return result.candidates[0].content.parts[0].text;
      } else {
        console.error("Unexpected API response structure:", result);
        return "Error: Could not generate content.";
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return `Error: ${error.message}`;
    }
  };

  // --- AI Feature Handlers ---
  const enhanceBio = async () => {
    setIsEnhancingBio(true);
    const prompt = `Rewrite the following biography to be more professional and impactful for a tech recruiter. Keep it concise (around 3-4 sentences) and highlight key skills and passion for development. Bio: "${portfolioData.bio}"`;
    const enhancedBio = await callGeminiAPI(prompt);
    setPortfolioData((prevData) => ({ ...prevData, bio: enhancedBio }));
    setIsEnhancingBio(false);
  };

  const generateProjectDescription = async (projectTitle) => {
    setGeneratingProjectId(projectTitle);
    const project = portfolioData.projects.find(
      (p) => p.title === projectTitle
    );
    if (project) {
      const prompt = `Generate a professional project description for a software developer's portfolio. The project is called "${
        project.title
      }" and it uses the following technologies: ${project.tech.join(
        ", "
      )}. Focus on the project's purpose, key features, and the value it brings. Make it sound impressive for a recruiter (within 150 words).`;
      const newDescription = await callGeminiAPI(prompt);
      setPortfolioData((prevData) => ({
        ...prevData,
        projects: prevData.projects.map((p) =>
          p.title === projectTitle ? { ...p, description: newDescription } : p
        ),
      }));
    }
    setGeneratingProjectId(null);
  };

  // Function to handle the download

  return (
    <div className="bg-gray-900 text-white font-sans leading-relaxed selection:bg-cyan-500 selection:text-white">
      <style>{}</style>
      <Header portfolioData={portfolioData} />
      <main>
        <Hero
          portfolioData={portfolioData}
          setPortfolioData={setPortfolioData}
          enhanceBio={enhanceBio}
          isEnhancingBio={isEnhancingBio}
        />
        <Skills portfolioData={portfolioData} />
        <Projects
          portfolioData={portfolioData}
          generateProjectDescription={generateProjectDescription}
          generatingProjectId={generatingProjectId}
        />
        <Education portfolioData={portfolioData} />
      </main>
      <Footer portfolioData={portfolioData} />
    </div>
  );
}
