import Link from 'next/link'
import { SERVICES } from '@/lib/services'
import { Heart, BookOpen, Code, Shield } from 'lucide-react'

export default function WhatWeDoSection() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <div className="h-0.5 w-10 bg-orange-500" />
            <span className="text-orange-500 font-semibold tracking-widest text-sm">WHAT WE DO</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Solutions That Transform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
            We build secure, scalable and smart digital products designed to solve real-world problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => {
            // fallback icon mapping for visual variety
            const Icon = [Heart, BookOpen, Code, Shield][idx % 4]
            return (
              <article
                key={service.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{service.short}</p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600"
                >
                  Learn More →
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
