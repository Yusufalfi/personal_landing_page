import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="sticky top-3 z-50 mx-auto w-[92vw] max-w-300">
      <nav className="flex min-h-14 items-center justify-between rounded-full border-3 border-ink bg-white px-4 py-2 pl-5 shadow-[5px_5px_0_#111]">
        <a href="#top" className="text-lg font-black tracking-[-0.06em]">
          YUSUF <span className="border-2 border-ink bg-green px-1.5">ALFI</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-extrabold md:flex">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#about" className="hover:underline">About</a>
        </div>

        <a
          href="#contact"
          className="neo-button flex items-center gap-1 rounded-full border-3 border-ink bg-pink px-4 py-2 text-xs font-black shadow-[3px_3px_0_#111]"
        >
          Let's talk <ArrowUpRight size={14} strokeWidth={3} />
        </a>
      </nav>
    </div>
  );
}