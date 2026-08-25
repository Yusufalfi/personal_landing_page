const toneMap = {
  green: "bg-green",
  blue: "bg-blue",
  pink: "bg-pink",
  purple: "bg-purple",
};

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden border-4 border-ink bg-white shadow-[8px_8px_0_#111]">
      <div
        className={`relative flex min-h-65 items-center justify-center border-b-4 border-ink p-6 ${toneMap[project.tone]}`}
      >
        <div className="w-[84%] -rotate-2 border-4 border-ink bg-white p-4 shadow-[7px_7px_0_#111]">
          <div className="mb-3 flex justify-between border-b-3 border-ink pb-2 text-[10px] font-black">
            <span>{project.category}</span>
            <span>● LIVE</span>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="h-3 flex-1 border-2 border-ink bg-yellow" />
              <div className="h-3 w-[30%] border-2 border-ink bg-pink" />
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-[35%] border-2 border-ink bg-purple" />
              <div className="h-3 flex-1 border-2 border-ink bg-green" />
            </div>
            <div className="h-3 border-2 border-ink bg-blue" />
          </div>
        </div>

        <span className="absolute left-4 top-4 text-2xl font-black">✦</span>
      </div>

      <div className="p-6">
        <div className="text-xs font-black">{project.number} / {project.category}</div>
        <h3 className="mt-2 text-3xl font-black tracking-[-.05em]">{project.title}</h3>
        <p className="mt-2 font-semibold leading-6">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border-2 border-ink bg-white px-2 py-1 text-[10px] font-black shadow-[2px_2px_0_#111]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t-3 border-ink pt-4">
          <span className="text-xs font-black uppercase">Impact → </span>
          <span className="text-sm font-bold">{project.impact}</span>
        </div>
      </div>
    </article>
  );
}