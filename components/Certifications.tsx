const certifications = {
  Cloud: [
    {
      title: "Microsoft Azure Fundamentals",
      file: "/certificates/Microsoft-Azure-Fundamentals-AZ900-Cert-Prep-1-Cloud-Concepts.pdf",
    },
    {
      title: "Introduction to Cloud Computing for IT Pros",
      file: "/certificates/Introduction-to-Cloud-Computing-for-IT-Pros.pdf",
    },
  ],

  Networking: [
    {
      title: "Cisco Networking Essentials",
      file: "/certificates/CISCO-Networking-Academy-Netwroking-Essentials.pdf",
    },
    {
      title: "Cisco Networking Foundations",
      file: "/certificates/Cisco-Networking-Foundations.pdf",
    },
    {
      title: "Network Addressing & Troubleshooting",
      file: "/certificates/Network-Addressing-and-Basic-Troubleshooting-Badge.pdf",
    },
  ],

  Linux: [
    {
      title: "Learning Linux Command Line",
      file: "/certificates/Learning-Linux-Command-Line.pdf",
    },
    {
      title: "Learning Linux Shell Scripting",
      file: "/certificates/Learning-Linux-Shell-Scripting.pdf",
    },
    {
      title: "Linux System Information & Directory Tools",
      file: "/certificates/Linux-System-Information-and-Directory-Structure-Tools.pdf",
    },
  ],

  Security: [
    {
      title: "IT Security Foundations",
      file: "/certificates/IT-Security-Foundations-Core-Concepts.pdf",
    },
    {
      title: "Tata Group Cybersecurity Analyst",
      file: "/certificates/Tata-Group-Cybersecurity-Analyst.pdf",
    },
  ],

  Professional: [
    {
      title: "JPMorgan Chase Agile Job Simulation",
      file: "/certificates/JPMorgan-Chase-&-Co.-Agile-Job-Simulation.pdf",
    },
  ],
};

export default function Certifications() {
  return (
    <section
  id="certifications"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <h2 className="text-4xl font-bold">
    Certifications
  </h2>

  <p className="mt-4 mb-12 text-zinc-400">
    Certifications across cloud computing, networking,
    Linux administration, cybersecurity and professional development.
  </p>

  {Object.entries(certifications).map(([category, certs]) => (
    <div key={category} className="mb-12">

      <h3 className="mb-6 text-2xl font-semibold text-blue-400">
        {category}
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {certs.map((cert) => (
          <div
            key={cert.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h4 className="font-semibold">
              {cert.title}
            </h4>

            <a
              href={cert.file}
              target="_blank"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              View Certificate →
            </a>
          </div>
        ))}

      </div>

    </div>
  ))}
</section>
  );
}