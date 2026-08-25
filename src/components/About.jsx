
const steps = [
  ["01", "Understand the process", "Map the current manual flow, exceptions, inputs and expected output."],
  ["02", "Design the automation", "Choose the simplest reliable approach: RPA, browser automation, API or scraping."],
  ["03", "Build & validate", "Handle real-world cases, failures, data quality and repeatability."],
  ["04", "Measure the result", "Show what changed: time saved, effort removed and reliability improved."],
];

export default function About() {
  return (
    <section id="about" className="bg-paper px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-300 gap-14 lg:grid-cols-[.8fr_1.2fr] items-start">
        
      
        <div className="-rotate-2 border-4 border-ink bg-green p-6 shadow-[9px_9px_0_#111]">
          
          {/* Foto Profil */}
          <div className="border-3 border-ink bg-white p-2 shadow-[4px_4px_0_#111]">
            <img
              src="https://portfolio-react-yusufalfi.vercel.app/static/media/about-1.62b171ad19f6c99c05a3.png"
              alt="Yusuf"
              className="h-64 w-full object-cover border-2 border-ink"
            />
          </div>

          <div className="mt-5">
            <h2 className="text-4xl font-black leading-none tracking-tight">
              Hey,
              <br />
              I'm Yusuf.
            </h2>
            <p className="mt-3 text-base font-black">
              Transforming Repetitive Tasks into Scalable Systems.
            </p>
            <p className="mt-2 font-semibold leading-6 text-sm">
              I design end-to-end automation and smart workflows that save human-hours and eliminate manual operational bottlenecks.
            </p>
          </div>

   
          <div className="mt-6 border-3 border-ink bg-white p-4 shadow-[4px_4px_0_#111] grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Key Details - Dipendekkan agar tidak membungkus terlalu banyak baris */}
            <div className="space-y-2 text-xs font-bold border-b-2 md:border-b-0 md:border-r-2 border-ink pb-3 md:pb-0 md:pr-3">
              <div className="flex justify-between items-start gap-2">
                <span className="text-gray-600 shrink-0">Role:</span>
                <span className="font-black text-right">RPA & Web Auto</span>
              </div>
              <div className="flex justify-between items-start gap-2">
                <span className="text-gray-600 shrink-0">Focus:</span>
                <span className="font-black text-right">Workflow & Scraping</span>
              </div>
              <div className="flex justify-between items-start gap-2">
                <span className="text-gray-600 shrink-0">Stack:</span>
                <span className="font-black text-right">Python, UiPath, PowerAuto</span>
              </div>
              <div className="flex justify-between items-start gap-2">
                <span className="text-gray-600 shrink-0">Impact:</span>
                <span className="font-black text-right">Reduce time & 24/7 Run</span>
              </div>
            </div>

            {/* Engineering Style Sliders */}
            <div className="space-y-3">
              <span className="block text-xs font-black uppercase border-b-2 border-ink pb-1">
                Engineering Style
              </span>

              {/* Slider 1 */}
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                  <span>Pragmatic</span>
                  <span>Theoretical</span>
                </div>
                <div className="relative h-3 w-full border-2 border-ink bg-gray-100">
                  <div className="h-full bg-green" style={{ width: "25%" }}></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-4 w-2 border-2 border-ink bg-black"
                    style={{ left: "25%" }}
                  ></div>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                  <span>Business-First</span>
                  <span>Code-First</span>
                </div>
                <div className="relative h-3 w-full border-2 border-ink bg-gray-100">
                  <div className="h-full bg-green" style={{ width: "20%" }}></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-4 w-2 border-2 border-ink bg-black"
                    style={{ left: "20%" }}
                  ></div>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                  <span>System Design</span>
                  <span>Quick Fixes</span>
                </div>
                <div className="relative h-3 w-full border-2 border-ink bg-gray-100">
                  <div className="h-full bg-green" style={{ width: "15%" }}></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-4 w-2 border-2 border-ink bg-black"
                    style={{ left: "15%" }}
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div>
          <span className="inline-block -rotate-1 border-3 border-ink bg-white px-3 py-2 text-xs font-black uppercase shadow-[4px_4px_0_#111]">
            How I think
          </span>
          <p className="mt-5 text-lg font-semibold leading-7">
            My background sits between software development and business process automation.
            I don't start with “Which tool should we use?” — I start with
            “Where is the wasted effort, and what should happen instead?”
          </p>

          <div className="mt-8 border-t-3 border-ink">
            {steps.map(([num, title, text]) => (
              <div key={num} className="grid grid-cols-[60px_1fr] border-b-3 border-ink py-5 md:grid-cols-[80px_1fr]">
                <div className="text-2xl font-black">{num}</div>
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-1 font-semibold leading-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}