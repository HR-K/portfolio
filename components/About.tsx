export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-6 text-4xl font-bold">
        About
      </h2>

      <p className="mb-12 max-w-3xl text-lg leading-relaxed text-zinc-400">
        Assistant System Engineer at TCS and Computer Science graduate from SRKR Engineering College.
        
        Experienced in AWS cloud infrastructure, networking and system design through internships, academic projects and hands-on implementation.

        Interested in Cloud Computing, Infrastructure, Networking, Security, and emerging AI technologies.
      </p>

      <div className="grid gap-6 md:grid-cols-4">

        {[
          ["Current Role", "Assistant System Engineer @ TCS"],
          ["Focus", "Cloud & Infrastructure Engineering"],
          ["Specialization", "Linux • Networking"],
          ["Interests", "DevOps • Security • Automation"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-blue-500"
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