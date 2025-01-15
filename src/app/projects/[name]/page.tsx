import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await params;

  const project = projects.find(async (p) => p.name === name);

  if (!project) {
    console.log("hellooooo");
    return notFound();
  }

  return (
    <div>
      <h1>{project.displayName}</h1>
      <p>{project.description}</p>

      <div className="flex gap-4">
        <a
          href={`/projects/${project.name}/index.html}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
}
