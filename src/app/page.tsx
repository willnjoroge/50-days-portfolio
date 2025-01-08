// import Link from "next/link";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.name} className="border rounded p-4 shadow">
            <h2 className="text-xl font-semibold">{project.displayName}</h2>
            <div className="flex-justify-between mt-4">
              {/* <Link
                className="text-blue-600 hover:underline"
                href={`/projects/${project.name}`}
              >
                View App
              </Link> */}
              <a
                href={`/projects/${project.name}/index.html`}
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
