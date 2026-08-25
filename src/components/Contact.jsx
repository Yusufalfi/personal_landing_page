import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 md:px-8">
      <div className="mx-auto max-w-300 border-4 border-ink bg-pink px-6 py-16 text-center shadow-[10px_10px_0_#111] md:px-10">
        <div className="mb-4 text-3xl font-black">✦</div>
        <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[.88] tracking-[-.07em]">
          Got a process
          <br />
          that sucks?
        </h2>
        <p className="mx-auto mt-6 max-w-145 font-semibold leading-6">
          Send me the workflow. I'll help you figure out whether it should be
          automated — and how.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Email Link (Fixed with mailto:) */}
          <a
            href="mailto:yusufalfi91@gmail.com"
            className="neo-button flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-black text-white shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            Email me <ArrowUpRight size={16} />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/6289508095112?text=Halo%20Yusuf,%20saya%20tertarik%20diskusi%20tentang%20otomasi%20workflow."
            target="_blank"
            rel="noreferrer"
            className="neo-button flex items-center gap-2 border-3 border-ink bg-green px-5 py-3 text-sm font-black shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            <MessageSquare size={16} /> WhatsApp <ArrowUpRight size={16} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/yusuf-alfi/"
            target="_blank"
            rel="noreferrer"
            className="neo-button flex items-center gap-2 border-3 border-ink bg-white px-5 py-3 text-sm font-black shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}