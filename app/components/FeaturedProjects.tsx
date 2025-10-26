import ProjectCard from "./ProjectCard";
import type { Project } from "~/types";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);
  return (
    <section>
      <h2 className="text-3xl text-center font-bold mb-8 text-light-gray">
        Featured Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:px-16">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
