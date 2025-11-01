import { useState } from "react";
import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  // Loader
  const { projects } = loaderData as { projects: Project[] };
  // Sort by date (newest first)
  projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  // Get unique Categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on the category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  // Get current pages projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-blue-dark via-[#0b1423] to-[#04070d]">
      <div className="pointer-events-none absolute -top-40 left-[-10rem] h-72 w-72 rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-[-8rem] h-96 w-96 rounded-full bg-glass-yellow opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-14rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 py-24 lg:px-10">
        <section className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            Projects
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
              One project at a time
            </h1>
          </div>
        </section>

        <section className="space-y-10">
          <div className="rounded-3xl border border-(--border-glass) bg-glass-gray px-6 py-8 backdrop-blur md:px-10 md:py-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-xl border transition ${
                    selectedCategory === category
                      ? "border-light-yellow bg-light-yellow/90 text-primary-blue-dark shadow-sm"
                      : "border-(--border-glass) bg-glass-blue/60 text-light-gray hover:border-light-yellow/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory + currentPage}
                  layout
                  className="grid gap-6 sm:grid-cols-2"
                >
                  {currentProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mx-auto max-w-md">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
