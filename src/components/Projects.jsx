import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="bg-paper px-5 py-20 md:px-8">
      <div className="mx-auto max-w-300">
        <div className="mb-11 grid gap-7 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <span className="inline-block -rotate-1 border-3 border-ink bg-white px-3 py-2 text-xs font-black uppercase shadow-[4px_4px_0_#111]">
              Selected work
            </span>
            <h2 className="mt-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
              Things I've
              <br />
              automated.
            </h2>
          </div>
          <p className="font-semibold leading-6">
            Real projects, demos and case studies go here. The goal is to show
            what changed after automation — not just which technology was used.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}