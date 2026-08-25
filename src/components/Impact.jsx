export default function Impact() {
  const metrics = [
    ["70–80%", "Manual effort reduced on the right processes."],
    ["580+", "Hours saved per year in one automation example."],
    ["24/7", "Automation can execute consistently without waiting for a person."],
  ];

  return (
    <section className="bg-ink px-5 py-20 text-white md:px-8">
      <div className="mx-auto max-w-300">
        <div className="mb-11 grid gap-7 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <span className="inline-block -rotate-1 border-3 border-white bg-white px-3 py-2 text-xs font-black uppercase text-ink shadow-[4px_4px_0_#b9ff73]">
              Why automation?
            </span>
            <h2 className="mt-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
              Don't sell
              <br />
              features. Sell impact.
            </h2>
          </div>
          <p className="font-semibold leading-6 text-white/90">
            Good automation is not about how complicated the workflow looks.
            It is about what repetitive work disappears afterward.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {metrics.map(([number, text], index) => (
            <div
              key={number}
              className={`min-h-48 border-3 border-white bg-[#1b1b1b] p-7 shadow-[7px_7px_0_${
                index === 0 ? "#b9ff73" : index === 1 ? "#ff8bd7" : "#ffe58a"
              }]`}
            >
              <strong className="block text-5xl font-black tracking-[-.06em] md:text-6xl">
                {number}
              </strong>
              <span className="mt-4 block font-bold leading-6">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}