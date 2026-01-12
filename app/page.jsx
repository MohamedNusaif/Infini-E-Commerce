export default async function HomePage() {
  // You can fetch data directly here in 2026
  // const products = await getFeaturedProducts();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        The Future of Shopping
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
        Explore our curated collection of 2026's most innovative products, 
        delivered straight to your door with Next.js speed.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/products"
          className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-indigo-500"
        >
          Browse Products
        </a>
        <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
          Sign In <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
