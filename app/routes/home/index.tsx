import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marianna Mirabile | Frontend Developer" },
    {
      name: "description",
      content:
        "Frontend Developer with recent hands-on experience building projects while learning React and modern web tools.!",
    },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
};

export default HomePage;
