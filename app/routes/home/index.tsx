import type { Route } from "./+types/index";

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

export default function Home() {
  return <>HomePage</>;
}
