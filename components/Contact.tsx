export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-24 text-center"
    >
      <h2 className="mb-4 text-4xl font-bold">
        Let's Connect
      </h2>

      <p className="mb-10 text-zinc-400">
        Open to opportunities in Cloud, Infrastructure,
        DevOps and Platform Engineering.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        <a
          href="mailto:kavalihemantharayudu@gmail.com"
          target="_blank"
          className="rounded-xl border border-zinc-700 px-6 py-3 hover:border-blue-500"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/hemantha-rayudu-kavali-2947bb231"
          target="_blank"
          className="rounded-xl border border-zinc-700 px-6 py-3 hover:border-blue-500"
        >
          LinkedIn
        </a>

        <a
        href="tel:+916305427022"
        className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500"
        >
            Phone: +91 63054 27022
        </a>


      </div>
    </section>
  );
}