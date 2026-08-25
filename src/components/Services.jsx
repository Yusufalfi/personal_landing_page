import { Bot, Globe, Database } from "lucide-react";

const services = [
  {
    number: "01 / RPA",
    title: "Business Process Automation",
    description: "Automate repetitive desktop and business workflows with reliable RPA flows.",
    tags: ["UiPath", "Excel", "Email", "API"],
    icon: Bot,
    bg: "bg-green",
  },
  {
    number: "02 / WEB",
    title: "Web Automation",
    description: "Control modern websites, handle dynamic pages, automate actions and collect data.",
    tags: ["Playwright", "Selenium", "Puppeteer"],
    icon: Globe,
    bg: "bg-pink",
  },
  {
    number: "03 / DATA",
    title: "Web Scraping",
    description: "Turn messy public web data into structured datasets ready for analysis or systems.",
    tags: ["Python", "BeautifulSoup", "Scrapy", "Pandas"],
    icon: Database,
    bg: "bg-purple",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-yellow px-5 py-20 md:px-8">
      <div className="mx-auto max-w-300">
        <div className="mb-11 grid gap-7 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <span className="inline-block -rotate-1 border-3 border-ink bg-white px-3 py-2 text-xs font-black uppercase shadow-[4px_4px_0_#111]">
              What I do
            </span>
            <h2 className="mt-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
              Automation,
              <br />
              without the fluff.
            </h2>
          </div>
          <p className="font-semibold leading-6">
            I focus on practical automation: understand the process, remove
            repetitive work, connect the systems, and make the result measurable.
          </p>
        </div>

        <div className="grid border-4 border-ink shadow-[10px_10px_0_#111] md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className={`${service.bg} min-h-75 border-b-4 border-ink p-7 last:border-b-0 md:border-b-0 md:border-r-4 md:last:border-r-0`}
              >
                <div className="flex items-center justify-between text-sm font-black">
                  <span>{service.number}</span>
                  <Icon size={28} strokeWidth={3} />
                </div>
                <h3 className="mt-17 text-3xl font-black leading-8 tracking-[-.05em]">
                  {service.title}
                </h3>
                <p className="mt-3 font-semibold leading-6">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-ink bg-white px-2 py-1 text-[10px] font-black shadow-[2px_2px_0_#111]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}