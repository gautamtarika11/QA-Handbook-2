export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-4">
        QA Automation Handbook
      </h1>

      <p className="text-lg">
        Complete roadmap from Manual Tester to SDET.
      </p>

      <div className="mt-8">
        <a
          href="/chapter/introduction"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Start Reading
        </a>
      </div>
    </main>
  );
}