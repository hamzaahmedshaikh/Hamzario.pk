"use client";

import useSWR from "swr";
import { Project } from "../../packages/types";
const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ProjectsSection() {
  const { data: projects, error } = useSWR<Project[]>("/api/v1/projects", fetcher);

  if (error) return <div>Error loading projects</div>;
  if (!projects) return <div>Loading...</div>;

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-pink">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project._id} className="border rounded-lg p-6 bg-gray-50 shadow-sm">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink font-semibold underline"
                aria-label="View Live"
              >
                Live
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline"
                aria-label="View Repo"
              >
                Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}