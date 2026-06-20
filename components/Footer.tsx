export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <div>
            <p className="font-semibold">
              Hemantha Rayudu Kavali
            </p>

            <p className="text-sm text-zinc-500">
              Cloud • Networking • Infrastructure Engineer
            </p>
          </div>

          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Hemantha Rayudu Kavali
          </div>

        </div>

      </div>
    </footer>
  );
}