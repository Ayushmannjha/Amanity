import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const features = [
    'Client Focused Solutions',
    'Secure & Reliable Systems',
    'Innovative & Scalable Technology',
    'On-time Delivery & Dedicated Support',
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-orange-500" />
              <p className="text-orange-500 font-semibold tracking-widest text-sm">ABOUT US</p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
              We Are Amanity Tech Solutions
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Amanity Tech Solutions builds smart, secure and scalable digital solutions to empower organizations. We combine deep technical expertise with a user-first approach to deliver measurable outcomes.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-orange-50 text-orange-500">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/#about"
                className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3 text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Learn More
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-lg border border-slate-200 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.12),transparent_30%)]" />
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="w-50 h-64 md:w-72 md:h-62 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent flex items-center justify-center">
                <Image
                  src="/amanity-logo-new.png"
                  alt="Amanity Logo"
                  width={280}
                  height={250}
                  className="w-40 h-40 md:w-56 md:h-46 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
