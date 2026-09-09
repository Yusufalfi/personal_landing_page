
import { useEffect } from "react";
import { X, Play, Clock, Zap, Target, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto border-4 border-ink bg-white p-6 shadow-[12px_12px_0_#111] md:p-8 font-mono">
        
  
        <button
          onClick={onClose}
          className="absolute right-4 top-4 border-3 border-ink bg-pink p-1.5 font-black shadow-[3px_3px_0_#111] transition-transform hover:scale-110 active:translate-y-0.5"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

  
        <div className="flex items-center gap-2 mb-2">
          <span className="border-2 border-ink bg-yellow px-2 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0_#111]">
            {project.category}
          </span>
          <span className="text-xs font-black text-neutral-500">
            {project.number}
          </span>
        </div>

        <h2 className="text-2xl font-black md:text-4xl text-black">
          {project.title}
        </h2>
        
        <p className="mt-2 inline-block border-2 border-ink bg-black text-white px-3 py-1 text-xs md:text-sm font-bold">
          {project.description}
        </p>

    
        <div className="mt-6 grid gap-8 lg:grid-cols-12 border-t-3 border-ink pt-6">
          
        
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-video w-full overflow-hidden border-3 border-ink bg-black shadow-[6px_6px_0_#111]">
              {project.demoMedia ? (
                <iframe
                  src={project.demoMedia}
                  title={`Demo ${project.title}`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4 text-center text-white">
                  <Play size={44} className="mb-2 text-yellow" />
                  <p className="text-xs font-bold uppercase">
                    [ Demo Preview Not Available ]
                  </p>
                </div>
              )}
            </div>

       
            <div className="grid grid-cols-2 gap-4">
              <div className="border-3 border-ink bg-pink/30 p-3.5 shadow-[4px_4px_0_#111]">
                <div className="flex items-center gap-1.5 text-xs font-black text-red-600 uppercase">
                  <Clock size={14} /> Before (Manual)
                </div>
                <p className="mt-1 text-xs md:text-sm font-black text-black">
                  {project.beforeText}
                </p>
              </div>

              <div className="border-3 border-ink bg-green-200 p-3.5 shadow-[4px_4px_0_#111]">
                <div className="flex items-center gap-1.5 text-xs font-black text-green-800 uppercase">
                  <Zap size={14} /> After (Automated)
                </div>
                <p className="mt-1 text-xs md:text-sm font-black text-black">
                  {project.afterText}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-600 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-ink bg-white px-3 py-1 text-xs font-black shadow-[2px_2px_0_#111]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

    
          <div className="lg:col-span-5 space-y-5 border-t-3 lg:border-t-0 lg:border-l-3 border-ink pt-6 lg:pt-0 lg:pl-6">
            
            {project.goal && (
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase text-black">
                  <Target size={16} className="text-yellow bg-black p-0.5 rounded-xs" />
                  <span>Goal</span>
                </div>
                <p className="mt-1 text-xs md:text-sm font-semibold leading-relaxed text-neutral-800">
                  {project.goal}
                </p>
              </div>
            )}

            {project.problem && (
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase text-red-600">
                  <AlertTriangle size={16} />
                  <span>Problem</span>
                </div>
                <p className="mt-1 text-xs md:text-sm font-semibold leading-relaxed text-neutral-800">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase text-green-700">
                  <Lightbulb size={16} />
                  <span>Solution</span>
                </div>
                <p className="mt-1 text-xs md:text-sm font-semibold leading-relaxed text-neutral-800">
                  {project.solution}
                </p>
              </div>
            )}

            {project.impact && (
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-700">
                  <CheckCircle2 size={16} />
                  <span>Impact</span>
                </div>
                <p className="mt-1 text-xs md:text-sm font-semibold leading-relaxed text-neutral-800">
                  {project.impact}
                </p>
              </div>
            )}

          </div>

        </div>

     
        <div className="mt-8 flex justify-end gap-3 border-t-3 border-ink pt-5">
          <button
            onClick={onClose}
            className="border-3 border-ink bg-white px-6 py-2.5 text-xs font-black uppercase shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}