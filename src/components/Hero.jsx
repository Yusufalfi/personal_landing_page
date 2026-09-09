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
      /* Tambah pt-28 di mobile agar tidak tertimpa Navbar fixed */
      className="relative overflow-hidden bg-paper px-4 pb-16 pt-28 md:px-8 md:pb-20 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto grid max-w-300 items-center gap-10 md:gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <span className="inline-block -rotate-1 border-3 border-ink bg-white px-3 py-1.5 text-[11px] font-black uppercase shadow-[3px_3px_0_#111] md:py-2 md:text-xs md:shadow-[4px_4px_0_#111]">
            RPA Developer · Web Automation · Web Scraping
          </span>

          <h1 className="mt-5 max-w-190 text-[clamp(2.2rem,6.5vw,6.5rem)] font-black leading-[.95] tracking-[-0.05em] md:mt-7 md:leading-[.88]">
            I make{" "}
            <span className="inline-block whitespace-nowrap translate-y-[2px] bg-pink px-2 py-0.5 shadow-[3px_3px_0_#111] md:translate-y-[4px] md:shadow-[6px_6px_0_#111]">
              boring work
            </span>{" "}
            disappear.
          </h1>

          <p className="mt-5 max-w-155 text-base font-semibold leading-relaxed md:mt-7 md:text-xl md:leading-7">
            I build automation that turns repetitive business processes into
            reliable systems — from RPA workflows and browser automation to web
            scrapers and data pipelines.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 md:mt-8 md:gap-4">
            <a
              href="#work"
              className="neo-button flex items-center gap-2 border-3 border-ink bg-ink px-4 py-2.5 text-xs font-black text-white shadow-[3px_3px_0_#111] md:px-5 md:py-3 md:text-sm md:shadow-[4px_4px_0_#111]"
            >
              See my work <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="neo-button flex items-center gap-2 border-3 border-ink bg-white px-4 py-2.5 text-xs font-black shadow-[3px_3px_0_#111] md:px-5 md:py-3 md:text-sm md:shadow-[4px_4px_0_#111]"
            >
              Work with me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Card Banner / Animation Box */}
        <div className="relative min-h-[380px] rotate-2 overflow-hidden rounded-3xl border-4 border-ink bg-purple p-4 shadow-[8px_8px_0_#111] sm:min-h-[420px] sm:p-6 md:h-[460px] md:p-8 md:shadow-[10px_10px_0_#111] transition-transform duration-500 hover:-translate-y-2">
          <span className="absolute right-3 top-2 text-2xl font-black md:right-4 md:top-3 md:text-3xl">✦</span>

          {/* Badge Top Left */}
          <div className="absolute left-3 top-3 -rotate-6 border-3 border-ink bg-white px-2 py-0.5 text-[10px] font-black shadow-[2px_2px_0_#111] sm:left-4 sm:top-4 sm:text-[11px] sm:shadow-[3px_3px_0_#111] md:left-6 md:top-5">
            <ShieldCheck className="mr-1 inline text-green-600" size={13} /> 100% ACCURATE
          </div>

          {/* Terminal Box */}
          <div className="absolute left-3 right-3 top-12 -rotate-2 border-3 border-ink bg-white p-3 shadow-[4px_4px_0_#111] sm:left-6 sm:right-6 sm:top-14 sm:p-4 sm:shadow-[6px_6px_0_#111] md:left-8 md:right-8 md:top-16">
            <div className="mb-2 flex gap-1.5 sm:mb-3">
              <i className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-pink sm:h-3 sm:w-3" />
              <i className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-yellow sm:h-3 sm:w-3" />
              <i className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-green sm:h-3 sm:w-3" />
            </div>

            <div className="h-[150px] overflow-hidden font-mono text-[11px] leading-6 sm:h-[170px] sm:text-xs sm:leading-7 md:text-sm">
              {LOG_STEPS.slice(0, visibleCount).map((step, idx) => (
                <div key={idx}>
                  {step.type === "header" ? (
                    <div>
                      <Terminal className="mr-1.5 inline sm:mr-2" size={13} /> {step.text}
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
              <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-black align-middle sm:h-4 sm:w-2" />
            </div>
          </div>

          {/* Bottom Badges: Menggunakan flex wrap di mobile agar tidak bertumpuk */}
          <div className="absolute bottom-4 left-3 right-3 flex flex-wrap items-center justify-between gap-2 sm:left-6 sm:right-6 sm:bottom-6 md:bottom-8 md:left-8 md:right-8">
            <div className="-rotate-3 border-3 border-ink bg-green px-2.5 py-1 text-[10px] font-black shadow-[3px_3px_0_#111] sm:px-3 sm:py-1.5 sm:text-xs sm:shadow-[4px_4px_0_#111]">
              <Check className="mr-1 inline" size={12} /> TIME SAVED
            </div>

            <div className="rotate-3 border-3 border-ink bg-yellow px-2.5 py-1 text-[10px] font-black shadow-[3px_3px_0_#111] sm:px-3 sm:py-1.5 sm:text-xs sm:shadow-[4px_4px_0_#111]">
              <Zap className="mr-1 inline fill-black" size={12} /> MANUAL → AUTOMATED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}