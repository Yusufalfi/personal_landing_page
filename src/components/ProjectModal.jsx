import { useEffect } from "react";
import { X, Play, CheckCircle2, Clock, Zap } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  // Menutup modal jika tombol Escape ditekan
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
      {/* Backdrop Gelap (Klik di luar untuk close) */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Kontainer Pop-Up / Modal */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto border-4 border-ink bg-white p-6 shadow-[12px_12px_0_#111] md:p-8">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 border-3 border-ink bg-pink p-1.5 font-black shadow-[3px_3px_0_#111] transition-transform hover:scale-110 active:translate-y-0.5"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header Modal */}
        <div className="flex items-center gap-2">
          <span className="border-2 border-ink bg-yellow px-2 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0_#111]">
            {project.category}
          </span>
          <span className="font-mono text-xs font-black text-neutral-500">
            {project.number}
          </span>
        </div>

        <h2 className="mt-2 text-2xl font-black md:text-3xl">{project.title}</h2>
        <p className="mt-2 text-sm font-semibold text-neutral-700 md:text-base">
          {project.description}
        </p>

        
       {/* Demo Section */}
        <div className="mt-6 aspect-video w-full overflow-hidden border-3 border-ink bg-black shadow-[5px_5px_0_#111]">
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
            <p className="font-mono text-xs font-bold uppercase">
                [ Interactive Demo / GIF Preview ]
            </p>
            </div>
        )}
        </div>

        {/* Sebelum vs Sesudah (Automation Impact) */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="border-3 border-ink bg-pink/20 p-4 shadow-[4px_4px_0_#111]">
            <div className="flex items-center gap-1.5 text-xs font-black text-red-600 uppercase">
              <Clock size={14} /> Before (Manual)
            </div>
            <p className="mt-1 text-sm font-black md:text-base">
              {project.beforeText || "2-3 Hours / day"}
            </p>
          </div>

          <div className="border-3 border-ink bg-green/20 p-4 shadow-[4px_4px_0_#111]">
            <div className="flex items-center gap-1.5 text-xs font-black text-green-700 uppercase">
              <Zap size={14} /> After (Automated)
            </div>
            <p className="mt-1 text-sm font-black md:text-base">
              {project.afterText || "< 2 Minutes run"}
            </p>
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="mt-6">
          <h4 className="text-xs font-black uppercase tracking-wider">
            Technologies Used:
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <span
                key={t}
                className="border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs font-black shadow-[2px_2px_0_#111]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Modal Action */}
        <div className="mt-8 flex justify-end gap-3 border-t-3 border-ink pt-5">
          <button
            onClick={onClose}
            className="border-3 border-ink bg-white px-5 py-2.5 text-xs font-black uppercase shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}