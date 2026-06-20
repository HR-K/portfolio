export default function Credentials() {
  return (
    <section
      id="credentials"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="text-4xl font-bold">
        Digital Credentials
      </h2>

      <p className="mt-4 mb-12 max-w-2xl text-zinc-400">
        Verified industry badges and credentials earned through
        cloud, networking and professional development programs.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <a
          href="https://www.credly.com/users/hemantha-rayudu-kavali/badges/credly"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-blue-500"
        >
          <h3 className="text-2xl font-semibold">
            Google Cloud Badges
          </h3>

          <p className="mt-3 text-zinc-400">
            Professional cloud badges and technical certifications.
          </p>
        </a>

        <a
          href="https://www.credly.com/users/hemantha-rayudu-kavali.7a58a50f/badges/credly"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-blue-500"
        >
          <h3 className="text-2xl font-semibold">
            Networking & Process Mining Badges
          </h3>

          <p className="mt-3 text-zinc-400">
            Additional Networking and Process Mining credentials.
          </p>
        </a>

      </div>
    </section>
  );
}