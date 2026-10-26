
"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    category: "Web Application",
    image: "/bazar-dor.png",
    description:
      "A product browsing platform designed to help users explore products and product information.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Better Auth"],
    live: "https://bazar-dor-liart.vercel.app/",
    github: "https://github.com/najmuntushi-hue/bazar-dor",
  },
  {
    slug: "dev-stack",
    name: "Dev Stack",
    category: "Technology Platform",
    image: "/dev-stack.png",
    description:
      "A technology discovery website showcasing useful technologies and developer tools.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "DaisyUI"],
    live: "https://jazzy-jelly-8cb5f7.netlify.app/",
    github: "https://github.com/najmuntushi-hue/dev-stack",
  },
  {
    slug: "fit-log",
    name: "FitLog",
    category: "Fitness Application",
    image: "/fit-log.png",
    description:
      "A fitness application project focused on workout organization and tracking.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    live: "https://fit-log-blond.vercel.app/",
    github: "https://github.com/najmuntushi-hue/fit-log",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Core languages I use to build and solve problems.",
    icon: "💻",
    skills: [
      ["C", 75, "⚙️"],
      ["C++", 75, "🔧"],
      ["Java", 60, "☕"],
      ["Python", 60, "🐍"],
      ["JavaScript", 70, "🟨"],
    ],
  },
  {
    title: "Web Development",
    description: "Building modern and responsive web applications.",
    icon: "🌐",
    skills: [
      ["HTML", 85, "🟠"],
      ["CSS", 80, "🎨"],
      ["React", 65, "⚛️"],
      ["Next.js", 60, "▲"],
      ["Tailwind CSS", 70, "🌊"],
    ],
  },
  {
    title: "Tools & Database",
    description: "Tools for development and data management.",
    icon: "🗄️",
    skills: [
      ["Git & GitHub", 70, "🐙"],
      ["SQL", 60, "🗃️"],
      ["Problem Solving", 65, "💡"],
    ],
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Metropolitan University, Sylhet",
    period: "Currently in 4th Year",
    description:
      "Pursuing a Bachelor's degree in Computer Science & Engineering, with a focus on software development, data structures and algorithms, database management, and modern web technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sunamgonj Govt. Women's College",
    period: "HSC",
    description: "Group: Science",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Polash High School and College",
    period: "SSC",
    description: "Group: Science",
  },
];

const experiences = [
  {
    role: "Academic & Personal Projects",
    organization: "Independent Learning",
    period: "Ongoing",
    description:
      "Building web development projects and improving programming, debugging and problem-solving skills.",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/najmuntushi-hue",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={darkMode ? "theme-dark" : "theme-light"}>
      {/* NAVBAR */}
      <header className="site-header">
        <nav className="navbar container">
          <Link href="#home" className="brand" onClick={closeMenu}>
            Najmun<span>.</span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Education", "#education"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Link key={href} href={href} onClick={closeMenu}>
                {label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((current) => !current)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero section" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Najmun Nahar</span>
            </h1>

            <h2>Computer Science Student & Web Developer</h2>

            <p className="hero-description">
              I am passionate about programming, software development
              and building useful digital experiences. I enjoy learning
              new technologies and turning ideas into practical projects.
            </p>

            <div className="button-group">
              <Link href="#projects" className="btn btn-primary">
                Explore My Work ↗
              </Link>

              <a className="btn btn-secondary" href="/resume.pdf" download>
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/profile.jpeg"
                alt="Portrait of Najmun Nahar"
                className="profile-image"
              />
            </div>

            <div className="floating-card">
              <span className="status-dot" />
              Learning. Building. Growing.
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <SectionHeading eyebrow="GET TO KNOW ME" title="About Me" />

          <div className="about-grid">
            <div className="about-highlight">
              <span className="big-symbol">&lt;/&gt;</span>
              <h3>Curious by nature.</h3>
              <p>
                Creative thinking, continuous learning and
                problem-solving drive my programming journey.
              </p>
            </div>

            <div className="about-text">
              <p>
                I'm Najmun Nahar, a Computer Science and Engineering
                student at Metropolitan University, Sylhet. My
                programming journey has introduced me to problem-solving,
                object-oriented programming, algorithms, databases and
                modern web development.
              </p>

              <p>
                I enjoy creating practical applications, designing
                user-friendly interfaces and understanding how different
                parts of a software system work together. I use personal
                and academic projects to apply what I learn and improve
                my development skills.
              </p>

              <p>
                Outside programming, I enjoy exploring new technology,
                learning creative skills and collaborating with others.
                My goal is to become a capable software developer who
                creates useful, accessible and reliable digital products.
              </p>

              <div className="interest-tags">
                <span>Web Development</span>
                <span>Competitive Programming</span>
                <span>Problem Solving</span>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section-alt" id="skills">
        <div className="container">
          <SectionHeading
            eyebrow="MY TECHNICAL TOOLKIT"
            title="Skills & Technologies"
            description="Technologies I have learned or am currently practicing through coursework and projects."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                className={`skill-group skill-group-${index + 1}`}
                key={group.title}
              >
                <div className="skill-group-header">
                  <div className="skill-group-icon" aria-hidden="true">
                    {group.icon}
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-list">
                  {group.skills.map(([name, level, icon]) => (
                    <div className="skill-item" key={name}>
                      <div className="skill-label">
                        <span className="skill-name">
                          <span className="skill-emoji" aria-hidden="true">
                            {icon}
                          </span>
                          {name}
                        </span>

                        <span>{level}%</span>
                      </div>

                      <div
                        className="skill-track"
                        role="progressbar"
                        aria-label={`${name} skill level`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Number(level)}
                      >
                        <div
                          className="skill-fill"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="container">
          <SectionHeading
            eyebrow="MY ACADEMIC JOURNEY"
            title="Education"
            description="My academic background and educational journey."
          />

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-card" key={item.degree}>
                <span className="timeline-dot" />
                <p className="timeline-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-alt" id="experience">
        <div className="container">
          <SectionHeading
            eyebrow="MY DEVELOPMENT JOURNEY"
            title="Experience"
            description="My current practical learning and project-building experience."
          />

          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="info-card" key={item.role}>
                <span className="card-icon">✦</span>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      

<section id="certificates" className="section section-alt">
  <div className="container">
    <div className="section-heading">
      <p className="eyebrow">MY ACHIEVEMENT</p>
      <h2>My Certificate</h2>
    </div>
    
<div className="certificates-grid">
  <div className="certificate-card">
    <img
      src="/Certificates1.jpg"
      alt="My Certificate"
      className="certificate-image"
    />
  </div>
</div>
  </div>
</section>


      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="SOME THINGS I HAVE BUILT"
            title="Featured Projects"
            description="A selection of my academic and personal development projects."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.slug}>
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    className="project-image"
                  />

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn btn-primary"
                    >
                      View Details ↗
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-alt" id="contact">
        <div className="container contact-container">
          <SectionHeading
            eyebrow="LET'S CONNECT"
            title="Get In Touch"
            description="Have a project idea, an opportunity or a question? Feel free to reach out."
          />

          <div className="contact-grid">
            <a
    href="mailto:najmunnahartushi@gmail.com"
    className="contact-card"

  >
    <span className="contact-icon">✉</span>
    <span className="contact-label">Email</span>
    <strong>najmunnahartushi@gmail.com</strong>
  </a>
            <a className="contact-card" href="tel:+8801XXXXXXXXX">
              <span className="contact-icon">☎</span>
              <span className="contact-label">Phone</span>
              <strong>+880 1351475430</strong>
            </a>

            <a
              className="contact-card"
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">◉</span>
              <span className="contact-label">WhatsApp</span>
              <strong>Message Me</strong>
            </a>
          </div>

          <a
            className="btn btn-primary contact-button"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Say Hello ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <Link href="#home" className="brand">
            Najmun<span>.</span>
          </Link>

          <p>© 2026 Najmun Nahar.</p>

          <Link href="#home" className="text-link">
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className="heading-description">{description}</p>
      )}
    </div>
  );
}
