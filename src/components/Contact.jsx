import { ArrowUpRight, MessageSquare } from "lucide-react";


export default function Contact() {
  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="px-5 pb-20 md:px-8"
    >
      <div 
        itemScope 
        itemType="https://schema.org/Person"
        className="mx-auto max-w-300 border-4 border-ink bg-pink px-6 py-16 text-center shadow-[10px_10px_0_#111] md:px-10"
      >
        <div className="mb-4 text-3xl font-black" aria-hidden="true">✦</div>
        
        <h2 
          id="contact-heading"
          className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[.88] tracking-[-.07em]"
        >
          Got a process
          <br />
          that sucks?
        </h2>
        
        <p className="mx-auto mt-6 max-w-145 font-semibold leading-6">
          Send me the workflow. I'll help you figure out whether it should be
          automated — and how.
        </p>

        {/* Hidden SEO Metadata for Search Engines */}
        <meta itemProp="name" content="Yusuf Alfi" />
        <meta itemProp="jobTitle" content="RPA & AI Automation Engineer" />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Email Link */}
          <a
            href="mailto:yusufalfi91@gmail.com"
            itemProp="email"
            aria-label="Send an email to Yusuf Alfi"
            className="neo-button flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-black text-white shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            Email me <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Yusuf,%20saya%20tertarik%20diskusi%20tentang%20otomasi%20workflow."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Yusuf Alfi on WhatsApp"
            className="neo-button flex items-center gap-2 border-3 border-ink bg-green px-5 py-3 text-sm font-black shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            <MessageSquare size={16} aria-hidden="true" /> WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/yusuf-alfi/"
            target="_blank"
            rel="noopener noreferrer me"
            itemProp="sameAs"
            aria-label="Visit Yusuf Alfi's LinkedIn profile"
            className="neo-button flex items-center gap-2 border-3 border-ink bg-white px-5 py-3 text-sm font-black shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5"
          >
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}