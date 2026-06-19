export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-4xl font-bold">
        About
      </h2>

      <div className="grid gap-6 md:grid-cols-4">

        {[
          ["Current Role", "Assistant System Engineer @ TCS"],
          ["Focus", "Cloud Engineering"],
          ["Specialization", "Linux & Networking"],
          ["Interests", "DevOps • AI • Security"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h3 className="mb-2 font-semibold">
              {title}
            </h3>

            <p className="text-zinc-400">
              {value}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}