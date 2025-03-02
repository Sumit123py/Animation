import Hero from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Additional sections for scrolling */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Build beautiful websites faster
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With our comprehensive component library and design system, you can create stunning websites in a fraction
              of the time it would normally take.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">{i}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Feature {i}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

