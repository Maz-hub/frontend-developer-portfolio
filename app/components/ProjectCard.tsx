import type { Project } from "~/types";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const ProjectCard = ({ project }: { project: Project }) => {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="rounded-lg overflow-hidden border shadow-sm transition hover:shadow-md hover:scale-[1.02]
                    bg-glass-gray border-primary-blue-dark"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover rounded-sm"
        // image glow
        style={{ boxShadow: "0 0 8px rgba(14,26,43,0.6)" }}
      />

      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-[var(--color-text-dark)">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-light-gray">
          {project.description}
        </p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs px-2.5 py-1.5 rounded-md 
                         text-light-gray
                         bg-secondary-blue"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Date only */}
        <div className="text-xs mt-2 text-medium-gray">{formattedDate}</div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          {/* Primary: Live Demo (accent green) */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md
                       text-background-dark
                       bg-accent-green
                       hover:bg-secondary-green
                       active:bg-dark-green
                       transition shadow-sm hover:shadow
                       focus:outline-none focus:ring-2 focus:ring-offset-2
                       focus:ring-light-yellow focus:ring-offset-background-dark"
            aria-label={`${project.title} — Live Demo`}
          >
            <TfiWorld size={24} />
            Live Demo
          </a>

          {/* Secondary: GitHub (outline) */}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md
                       border border-secondary-green
                       text-light-gray
                       hover:bg-secondary-green
                       hover:text-primary-blue-dark
                       transition
                       focus:outline-none focus:ring-2 focus:ring-offset-2
                       focus:ring-light-yellow focus:ring-offset-background-dark"
            aria-label={`${project.title} — GitHub Repository`}
          >
            <FaGithub size={24} />
            View the Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
