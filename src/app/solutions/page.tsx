// src/app/solutions/page.tsx
export default function SolutionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Solutions Directory (Beta)</h1>
      <p className="mt-3 text-slate-600">
        Browse AI-discovered and curated solutions to common SaaS micro-problems.
      </p>
      <div className="mt-8 rounded-xl border border-slate-200">
        {/* Embed your Softr/Airtable or placeholder for now */}
        {/* <iframe src={process.env.NEXT_PUBLIC_FEED_URL} className="w-full h-[70vh] rounded-xl" /> */}
        <div className="p-6 text-slate-500">Coming soon.</div>
      </div>
    </section>
  );
}
