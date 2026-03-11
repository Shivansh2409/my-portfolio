import React, { useState, useEffect, useRef } from "react";

// --- SVG ICONS ---
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3h.1c.4-.7 1.3-1.4 2.8-1.4 3.1 0 3.7 2 3.7 4.6V19z" />
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
          entry.target.classList.remove("opacity-0", "translate-y-4");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
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
  bio: "Hello! I'm a self-motivated Full Stack Web Developer with a deep passion for creating dynamic and user-friendly web applications. My core expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I also have a strong background in Java development. I thrive on the entire development lifecycle, from designing robust databases and building RESTful APIs to creating responsive and intuitive user interfaces.",
  contact: "shivanshrathore61@email.com",
  linkedinUrl: "https://www.linkedin.com/in/shivanshrathor/",
  profileImage: "/WhatsApp Image 2025-07-28 at 01.12.11.jpeg",
  skills: [
    {
      category: "Frontend",
      technologies: [
        "React & Next.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js & Express", "GraphQL", "RESTful APIs"],
    },
    {
      category: "Databases",
      technologies: ["MongoDB & Mongoose", "MySQL", "Redis"],
    },
    {
      category: "Tools & DevOps",
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
      details: "Basic concept of languages like Java, C++, HTML, CSS",
    },
  ],
  projects: [
    {
      title: "Davel AI - AI Content Generator",
      description:
        "Engineered a real-time, collaborative coding platform with integrated AI assistant that generates and debugs code. Supports Google Docs-style simultaneous editing and Web Containers for instant Node.js server deployment.",
      tech: [
        "React",
        "Node.js",
        "Redis",
        "JWT",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
        "Gemini API",
      ],
      imageUrl: "/Screenshot 2025-09-29 at 7.28.35 PM.png",
      liveUrl: "https://davel.vercel.app/",
      githubUrl: "https://github.com/Shivansh2409/Davel",
    },
    {
      title: "WonderLust - Travel Review Web App",
      description:
        "A full-stack CRUD-based travel review platform where users can share destinations, post reviews, upload images, and view places via an interactive map.",
      tech: [
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mapbox",
        "Passport.js",
      ],
      imageUrl: "/Screenshot 2025-05-27 at 1.51.48 PM.png",
      liveUrl: "https://wonderlust-1-2kty.onrender.com/",
      githubUrl: "https://github.com/Shivansh2409/WonderLust",
    },
    {
      title: "Zerodha Clone – Stock Portfolio Management",
      description:
        "A full-stack clone of the popular Indian trading platform. Complete client-server architecture with secure authentication and stock investment management.",
      tech: ["React", "Axios", "JWT", "CSS Modules", "MongoDB"],
      imageUrl: "/Screenshot 2025-07-22 at 1.57.52 AM.png",
      liveUrl: "https://github.com/Shivansh2409/ZerodhaClone",
      githubUrl: "https://github.com/Shivansh2409/ZerodhaClone",
    },
  ],
};

// --- Section Components ---

const TopNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["Overview", "Projects", "Skills", "Education"];

  return (
    <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-white border-blue-500"
                  : "text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileSidebar = ({ portfolioData, enhanceBio, isEnhancingBio }) => {
  const animRef = useAnimateOnScroll();

  return (
    <div
      ref={animRef}
      className="opacity-0 translate-y-4 transition-all duration-700 w-full md:w-80 mb-8 md:mb-0"
    >
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sticky top-20">
        {/* Profile Image */}
        <div className="mb-6 text-center md:text-left">
          <img
            src={portfolioData.profileImage}
            alt={portfolioData.name}
            className="w-32 h-32 rounded-full mx-auto md:mx-0 border-4 border-blue-500 object-cover"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/200x200/1f2937/3b82f6?text=Profile";
            }}
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-2xl font-bold text-white mb-2 text-center md:text-left">
          {portfolioData.name}
        </h1>
        <p className="text-gray-400 mb-4 text-center md:text-left text-sm">
          {portfolioData.title}
        </p>

        {/* Bio */}
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          {portfolioData.bio.substring(0, 150)}...
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-6 border-t border-gray-700 pt-6">
          <a
            href={`mailto:${portfolioData.contact}`}
            className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="truncate">{portfolioData.contact}</span>
          </a>
          <a
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            <LinkedinIcon />
            <span className="ml-2">LinkedIn</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href={`mailto:${portfolioData.contact}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm block"
          >
            Get In Touch
          </a>
          <button
            onClick={enhanceBio}
            disabled={isEnhancingBio}
            className="w-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            {isEnhancingBio ? "Enhancing..." : "✨ Enhance Bio"}
          </button>
        </div>
      </div>
    </div>
  );
};

const OverviewSection = ({ portfolioData }) => {
  const animRef = useAnimateOnScroll();

  return (
    <div
      ref={animRef}
      className="opacity-0 translate-y-4 transition-all duration-700 space-y-6"
    >
      {/* About Card */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {portfolioData.bio}
        </p>
      </div>

      {/* Top Skills */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Top Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {portfolioData.skills.map((skill) => (
            <div key={skill.category} className="bg-gray-700 rounded px-3 py-2">
              <p className="text-blue-400 text-sm font-semibold">
                {skill.category}
              </p>
              <p className="text-gray-400 text-xs">
                {skill.technologies.length} techs
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="space-y-4">
          {portfolioData.projects.map((project) => (
            <div
              key={project.title}
              className="pb-4 border-b border-gray-700 last:border-b-0"
            >
              <h3 className="text-blue-400 hover:text-blue-300 font-semibold text-sm md:text-base mb-1">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsGrid = ({
  portfolioData,
  generateProjectDescription,
  generatingProjectId,
}) => {
  const animRef = useAnimateOnScroll();

  return (
    <div
      ref={animRef}
      className="opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors"
          >
            {/* Project Image */}
            <div className="w-full h-40 sm:h-48 bg-gray-700 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x300/1f2937/3b82f6?text=Project";
                }}
              />
            </div>

            {/* Project Info */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 flex-wrap">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded text-center text-sm transition-colors"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded text-center text-sm transition-colors flex items-center justify-center"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = ({ portfolioData }) => {
  const animRef = useAnimateOnScroll();

  return (
    <div
      ref={animRef}
      className="opacity-0 translate-y-4 transition-all duration-700 space-y-6"
    >
      {portfolioData.skills.map((skill) => (
        <div
          key={skill.category}
          className="bg-gray-800 rounded-lg border border-gray-700 p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">
            {skill.category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {skill.technologies.map((tech) => (
              <div
                key={tech}
                className="bg-gray-700 hover:bg-blue-600 transition-colors rounded px-3 py-2 text-center text-sm"
              >
                <p className="text-gray-200 text-xs md:text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const EducationSection = ({ portfolioData }) => {
  const animRef = useAnimateOnScroll();

  return (
    <div
      ref={animRef}
      className="opacity-0 translate-y-4 transition-all duration-700 space-y-4"
    >
      {portfolioData.education.map((edu) => (
        <div
          key={edu.institution}
          className="bg-gray-800 rounded-lg border border-gray-700 p-6"
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-blue-400 text-lg font-bold mb-1">
                📚 {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
              <p className="text-gray-300 text-sm">{edu.details}</p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                {edu.period.split(" - ")[1]}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer = ({ portfolioData }) => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
          Reserved.
        </p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [isEnhancingBio, setIsEnhancingBio] = useState(false);
  const [generatingProjectId, setGeneratingProjectId] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  // --- Gemini API Call Function ---
  const callGeminiAPI = async (prompt) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
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
      (p) => p.title === projectTitle,
    );
    if (project) {
      const prompt = `Generate a professional project description for a software developer's portfolio. The project is called "${
        project.title
      }" and it uses the following technologies: ${project.tech.join(
        ", ",
      )}. Focus on the project's purpose, key features, and the value it brings. Make it sound impressive for a recruiter (within 150 words).`;
      const newDescription = await callGeminiAPI(prompt);
      setPortfolioData((prevData) => ({
        ...prevData,
        projects: prevData.projects.map((p) =>
          p.title === projectTitle ? { ...p, description: newDescription } : p,
        ),
      }));
    }
    setGeneratingProjectId(null);
  };

  return (
    <div className="bg-gray-900 text-white font-sans leading-relaxed selection:bg-blue-500 selection:text-white">
      <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Profile at top, then content */}
          <div className="md:hidden p-4 space-y-6">
            <ProfileSidebar
              portfolioData={portfolioData}
              enhanceBio={enhanceBio}
              isEnhancingBio={isEnhancingBio}
            />

            <div className="space-y-6">
              {activeTab === "Overview" && (
                <OverviewSection portfolioData={portfolioData} />
              )}
              {activeTab === "Projects" && (
                <ProjectsGrid
                  portfolioData={portfolioData}
                  generateProjectDescription={generateProjectDescription}
                  generatingProjectId={generatingProjectId}
                />
              )}
              {activeTab === "Skills" && (
                <SkillsSection portfolioData={portfolioData} />
              )}
              {activeTab === "Education" && (
                <EducationSection portfolioData={portfolioData} />
              )}
            </div>
          </div>

          {/* Desktop: Sidebar + Content */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 p-6">
            <ProfileSidebar
              portfolioData={portfolioData}
              enhanceBio={enhanceBio}
              isEnhancingBio={isEnhancingBio}
            />

            <div className="md:col-span-3 space-y-6 ml-5 mt-1">
              {activeTab === "Overview" && (
                <OverviewSection portfolioData={portfolioData} />
              )}
              {activeTab === "Projects" && (
                <ProjectsGrid
                  portfolioData={portfolioData}
                  generateProjectDescription={generateProjectDescription}
                  generatingProjectId={generatingProjectId}
                />
              )}
              {activeTab === "Skills" && (
                <SkillsSection portfolioData={portfolioData} />
              )}
              {activeTab === "Education" && (
                <EducationSection portfolioData={portfolioData} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer portfolioData={portfolioData} />
    </div>
  );
}
