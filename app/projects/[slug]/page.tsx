export const instant = false;
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "bazar-dor": {
    name: "Bazar Dor",
    category: "Web Application",
    stack: ["Next.js", "React", "Tailwind CSS", "Better Auth"],
    description:
      "A product browsing application designed to display product information through a modern and responsive interface.",
    live: "https://bazar-dor-liart.vercel.app/",
    github: "https://github.com/najmuntushi-hue/bazar-dor",
    challenges: [
      "Creating responsive layouts for different screen sizes.",
      "Organizing product categories and application routes.",
      "Integrating authentication and database functionality.",
    ],
    improvements: [
      "Improve search and product filtering.",
      "Complete and test authentication workflows.",
      "Improve accessibility and loading performance.",
    ],
  },
  "dev-stack": {
    name: "Dev Stack",
    category: "Technology Platform",
    stack: ["React", "JavaScript", "Tailwind CSS", "DaisyUI"],
    description:
      "A technology discovery platform for browsing developer technologies and tools.",
    live: "https://jazzy-jelly-8cb5f7.netlify.app/",
    github: "https://github.com/najmuntushi-hue/dev-stack",
    challenges: [
      "Creating reusable React components.",
      "Displaying technology information clearly.",
      "Maintaining responsive layouts.",
    ],
    improvements: [
      "Add more technology categories.",
      "Improve filtering and navigation.",
      "Add additional learning resources.",
    ],
  },
  "fit-log": {
    name: "FitLog",
    category: "Fitness Application",
    stack: ["Next.js", "React", "Tailwind CSS"],
    description:
      "A fitness application project focused on organizing workouts and tracking fitness activities.",
    live: "https://fit-log-blond.vercel.app/",
    github: "https://github.com/najmuntushi-hue/fit-log",
    challenges: [
      "Structuring the application pages.",
      "Designing a clear workout interface.",
      "Managing application data.",
    ],
    improvements: [
      "Complete and verify the live deployment.",
      "Add workout history and progress summaries.",
      "Improve the user experience.",
    ],
  },
};

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.hasOwn(projects, slug)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <main className="section">
      <div className="container">
        <Link className="text-link" href="/#projects">
          ← Back to Projects
        </Link>

        <div className="section-heading" style={{ marginTop: 35 }}>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <p className="heading-description">
            Detailed overview of the project, its technologies,
            challenges and future plans.
          </p>
        </div>

        <article className="info-card">
          <h2>Project Description</h2>
          <p>{project.description}</p>

          <h2>Main Technology Stack</h2>
          <div className="tech-tags">
            {project.stack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <h2>Challenges Faced</h2>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>

          <h2>Potential Improvements & Future Plans</h2>
          <ul>
            {project.improvements.map((improvement) => (
              <li key={improvement}>{improvement}</li>
            ))}
          </ul>

          <div className="button-group">
            {project.live && (
              <a
                className="btn btn-primary"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Visit Live Project ↗
              </a>
            )}

            <a
              className="btn btn-secondary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository ↗
            </a>
          </div>

          {!project.live && (
            <p className="small-note">
              A verified live project URL has not been added yet.
            </p>
          )}
        </article>
      </div>
    </main>
  );
}
