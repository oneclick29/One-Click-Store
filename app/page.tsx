import { ShoppingBag, Smartphone, Shirt, Home as HomeIcon, UtensilsCrossed, Sparkles } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, description: "Latest gadgets and tech" },
  { name: "Fashion", icon: Shirt, description: "Trendy apparel and accessories" },
  { name: "Home", icon: HomeIcon, description: "Everything for your living space" },
  { name: "Kitchen", icon: UtensilsCrossed, description: "Cookware and appliances" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-bold text-gray-900">One Click Store</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Products</a>
            <a href="#" className="hover:text-gray-900">Categories</a>
            <a href="#" className="hover:text-gray-900">About</a>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Sign In
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <Sparkles className="h-4 w-4" />
            Your Instant Shopping Hub
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            One Click Store
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover quality products across electronics, fashion, home, kitchen, and more.
            Enjoy a smooth shopping experience, great value, and convenient delivery.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-indigo-600 px-8 py-3 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700">
              Shop Now
            </button>
            <button className="rounded-lg border border-gray-300 px-8 py-3 text-gray-700 hover:bg-gray-50">
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group rounded-xl border border-gray-200 p-6 transition hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-indigo-50 p-3">
                <cat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 One Click Store. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
