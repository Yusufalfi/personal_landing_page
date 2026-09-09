
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
              Hey, I'm Yusuf.
            </h2>
            <p className="mt-3 text-base font-black">
              Transforming Repetitive Tasks into Scalable Systems.
            </p>
            <p className="mt-2 font-semibold leading-4 text-sm">
              I design end-to-end automation and smart workflows that save human-hours and eliminate manual operational bottlenecks.
            </p>
          </div>

          <div className="mt-6 border-3 border-black bg-white p-5 shadow-[4px_4px_0_#111] font-mono block w-full">

            <div className="block mb-5 w-full">
              <span className="inline-block bg-green text-black font-black uppercase text-xs sm:text-sm tracking-wider px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
                Specialized In
              </span>
            </div>


            <div className="block space-y-3.5 w-full">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 border-2 border-black text-black text-xs font-black shrink-0 mt-0.5">
                  +
                </span>
                <span className="text-black font-black uppercase text-xs sm:text-sm leading-tight tracking-wide">
                  RPA Development
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 border-2 border-black text-black text-xs font-black shrink-0 mt-0.5">
                  +
                </span>
                <span className="text-black font-black uppercase text-xs sm:text-sm leading-tight tracking-wide">
                  Process Automation
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 border-2 border-black text-black text-xs font-black shrink-0 mt-0.5">
                  +
                </span>
                <span className="text-black font-black uppercase text-xs sm:text-sm leading-tight tracking-wide">
                  System Integration
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 border-2 border-black text-black text-xs font-black shrink-0 mt-0.5">
                  +
                </span>
                <span className="text-black font-black uppercase text-xs sm:text-sm leading-tight tracking-wide">
                  Web Scraping & Data Extraction
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 border-2 border-black text-black text-xs font-black shrink-0 mt-0.5">
                  +
                </span>
                <span className="text-black font-black uppercase text-xs sm:text-sm leading-tight tracking-wide">
                  AI & Workflow Automation
                </span>
              </div>
            </div>

            
            <hr className="my-6 border-t-2 border-dashed border-black/30" />

            <div className="grid grid-cols-4 gap-1 text-center text-[10px] font-black tracking-wider uppercase w-full">
              

              <div className="flex flex-col items-center justify-start border-r-2 border-black/10 last:border-r-0 px-1 py-1">
                <div className="bg-black text-white w-7 h-7 flex items-center justify-center font-black text-xs shrink-0 mb-2">
                  Ui
                </div>
                <div className="flex flex-col leading-tight min-h-[24px] justify-center">
                  <span className="text-black font-black ">UiPath</span>
                  <span className="text-black font-black">RPA</span>
                </div>
              </div>


              <div className="flex flex-col items-center justify-start border-r-2 border-black/10 last:border-r-0 px-1 py-1">
                <svg className="w-7 h-7 fill-black shrink-0 mb-2" viewBox="0 0 24 24">
                  <path d="M12 2c5.523 0 6 2 6 4.5v1.5H12V9h7.5c2.5 0 2.5 3 2.5 4.5S20.5 18 18 18h-1.5v-1.5c0-2.5-.5-4.5-6-4.5H9V9.5C9 7 9.5 2 12 2z" opacity="0.3"/>
                  <path d="M12 22c-5.523 0-6-2-6-4.5V16h6v1h-7.5C2 17 2 14 2 12.5S3.5 8 6 8h1.5v1.5c0 2.5.5 4.5 6 4.5H15v2.5c0 2.5-.5 7-3 7z"/>
                </svg>
                <div className="flex flex-col leading-tight min-h-[24px] justify-center">
                  <span className="text-black font-black">Python</span>
                  <span className="text-black font-black ">Automation</span>
                </div>
              </div>

    
              <div className="flex flex-col items-center justify-start border-r-2 border-black/10 last:border-r-0 px-1 py-1">
                <svg className="w-7 h-7 stroke-black fill-none stroke-2 shrink-0 mb-2" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                </svg>
                <div className="flex flex-col leading-tight min-h-[24px] justify-center">
                  <span className="text-black font-black">SQL</span>
                  <span className="text-black font-black  ">Database</span>
                </div>
              </div>

      
              <div className="flex flex-col items-center justify-start border-r-2 border-black/10 last:border-r-0 px-1 py-1">
                <svg className="w-7 h-7 stroke-black fill-none stroke-2 shrink-0 mb-2" viewBox="0 0 24 24">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <div className="flex flex-col leading-tight min-h-[24px] justify-center">
                  <span className="text-black font-black ">Workflow</span>
                  <span className="text-black font-black">Integration</span>
                </div>
              </div>

            </div>
          </div>

          {/* <div className="mt-6 border-3 border-ink bg-white p-4 shadow-[4px_4px_0_#111] grid grid-cols-1 md:grid-cols-2 gap-4">
         
            
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

         
            <div className="space-y-3">
              <span className="block text-xs font-black uppercase border-b-2 border-ink pb-1">
                Engineering Style
              </span>

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
          </div> */}
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