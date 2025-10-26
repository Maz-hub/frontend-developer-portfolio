import type { Project } from "~/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 hover:scale-[1.02]"
    >
      <div className="bg-glass-gray border border-primary-blue-dark rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-sm shadow-blue-900"
        />
        <div className="p-5">
          <h3 className="text-3xl font-semi-bold text-border-glass mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300mb-2">{project.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
