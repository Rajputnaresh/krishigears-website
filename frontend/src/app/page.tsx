import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-darker text-white">
      <section className="kg-section relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center py-20">
          <p className="kg-eyebrow mb-4">India's Premium Farm Machinery Network</p>
          <h1 className="kg-h1 mb-6">
            Equipping <span className="text-lime-500">Farmers</span> For The Future
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Wholesale supply, dealer networking, and institutional procurement of agricultural machinery.
          </p>
          <Link href="/power-weeders-in-pune" className="lime-btn rounded-md px-8 py-4 inline-block">
            View Example Geo-SEO Page
          </Link>
        </div>
      </section>
    </main>
  );
}
