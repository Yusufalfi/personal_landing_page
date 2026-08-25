export default function Marquee() {
  const text =
    "AUTOMATE IT ✦ SCRAPE IT ✦ CONNECT IT ✦ SHIP IT ✦ AUTOMATE IT ✦ SCRAPE IT ✦ CONNECT IT ✦ SHIP IT ✦";

  return (
    <div className="overflow-hidden border-y-4 border-ink bg-pink py-3.5">
      <div className="animate-marquee flex w-max whitespace-nowrap text-xl font-black">
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
      </div>
    </div>
  );
}