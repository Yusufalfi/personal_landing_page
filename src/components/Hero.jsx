
import { useState, useEffect } from "react";
import { ArrowDown, ArrowUpRight, Check, Terminal, Zap, ShieldCheck } from "lucide-react";

const LOG_STEPS = [
  { type: "header", text: "run automation" },
  { type: "highlight", text: "invoice.pdf", color: "bg-green font-black" },
  { type: "text", text: "extracting fields..." },
  { type: "text", text: "validating data..." },
  { type: "text", text: "uploading to system..." },
  { type: "highlight", text: "DONE ✓", color: "bg-pink font-black" },
];

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev < LOG_STEPS.length ? prev + 1 : prev));
    }, 600);

    if (visibleCount === LOG_STEPS.length) {
      const resetTimeout = setTimeout(() => {
        setVisibleCount(1);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }

    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper px-5 pb-20 pt-24 md:px-8 lg:pb-24 lg:pt-28"
    >
      <div className="mx-auto grid max-w-300 items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <span className="inline-block -rotate-1 border-3 border-ink bg-white px-3 py-2 text-xs font-black uppercase shadow-[4px_4px_0_#111]">
            RPA Developer · Web Automation · Web Scraping
          </span>

          <h1 className="mt-7 max-w-190 text-[clamp(2rem,6.5vw,6.5rem)] font-black leading-[.92] tracking-[-0.05em] md:leading-[.88]">
            I make{" "}
            <span className="inline-block whitespace-nowrap translate-y-[2px] bg-pink px-2 py-0.5 shadow-[4px_4px_0_#111] md:translate-y-[4px] md:shadow-[6px_6px_0_#111]">
              boring work
            </span>{" "}
            disappear.
          </h1>

          <p className="mt-7 max-w-155 text-lg font-semibold leading-7 md:text-xl">
            I build automation that turns repetitive business processes into
            reliable systems — from RPA workflows and browser automation to web
            scrapers and data pipelines.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="neo-button flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-black text-white shadow-[4px_4px_0_#111]"
            >
              See my work <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="neo-button flex items-center gap-2 border-3 border-ink bg-white px-5 py-3 text-sm font-black shadow-[4px_4px_0_#111]"
            >
              Work with me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* CONTAINER KANAN: Diberi kelas `animate-bounce` halus / float tanpa mempengaruhi layout luar */}
        <div className="relative h-[430px] rotate-2 overflow-hidden rounded-3xl border-4 border-ink bg-purple p-6 shadow-[10px_10px_0_#111] md:h-[460px] md:p-8 transition-transform duration-500 hover:-translate-y-2">
          <span className="absolute right-4 top-3 text-3xl font-black">✦</span>

          <div className="absolute left-4 top-4 -rotate-6 border-3 border-ink bg-white px-2.5 py-1 text-[11px] font-black shadow-[3px_3px_0_#111] md:left-6 md:top-5">
            <ShieldCheck className="mr-1 inline text-green-600" size={13} /> 100% ACCURATE
          </div>

          <div className="absolute left-6 right-6 top-14 -rotate-2 border-3 border-ink bg-white p-4 shadow-[6px_6px_0_#111] md:left-8 md:right-8 md:top-16">
            <div className="mb-3 flex gap-1.5">
              <i className="h-3 w-3 rounded-full border-2 border-ink bg-pink" />
              <i className="h-3 w-3 rounded-full border-2 border-ink bg-yellow" />
              <i className="h-3 w-3 rounded-full border-2 border-ink bg-green" />
            </div>

            <div className="h-[170px] overflow-hidden font-mono text-xs leading-7 md:text-sm">
              {LOG_STEPS.slice(0, visibleCount).map((step, idx) => (
                <div key={idx}>
                  {step.type === "header" ? (
                    <div>
                      <Terminal className="mr-2 inline" size={14} /> {step.text}
                    </div>
                  ) : (
                    <div>
                      &gt;{" "}
                      {step.type === "highlight" ? (
                        <span className={`px-1 ${step.color}`}>{step.text}</span>
                      ) : (
                        step.text
                      )}
                    </div>
                  )}
                </div>
              ))}
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-black align-middle" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 -rotate-3 border-3 border-ink bg-green px-3 py-1.5 text-xs font-black shadow-[4px_4px_0_#111] md:bottom-8 md:left-8">
            <Check className="mr-1 inline" size={14} /> TIME SAVED
          </div>

          <div className="absolute bottom-6 right-6 rotate-3 border-3 border-ink bg-yellow px-3 py-1.5 text-xs font-black shadow-[4px_4px_0_#111] md:bottom-8 md:right-8">
            <Zap className="mr-1 inline fill-black" size={13} /> MANUAL → AUTOMATED
          </div>
        </div>
      </div>
    </section>
  );
}