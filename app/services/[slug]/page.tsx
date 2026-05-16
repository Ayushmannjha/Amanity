import { notFound } from 'next/navigation'
import Link from 'next/link'
import { findService } from '@/lib/services'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = findService(slug)

  if (!service) return notFound()

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero band */}
      <div className="bg-gradient-to-r from-[#0b3b91] to-[#06285f] text-white">
        {/* page-only spacer to separate hero from fixed navbar without affecting other pages */}
        <div className="h-6 md:h-8" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-28">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">{service.title}</h1>
            <p className="mt-4 text-white/90 max-w-3xl">{service.short}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-10">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main column */}
            <div className="md:col-span-2">

              <div className="prose prose-slate max-w-none text-slate-700">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <h3>What we deliver</h3>
                <ul>
                  <li>Consultation & scoping</li>
                  <li>Architecture & integration planning</li>
                  <li>Implementation & testing</li>
                  <li>Onboarding and training</li>
                  <li>Managed support and maintenance</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="text-lg font-semibold text-slate-900">Key features</h4>
                {service.features ? (
                  <ul className="mt-3 list-disc list-inside text-slate-700">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-slate-600">Features and capabilities will be listed soon.</p>
                )}

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-500">Need help or a demo?</p>
                  <a href="mailto:info@securetechsolutions.in" className="mt-2 inline-block text-orange-500 font-semibold">Email us</a>
                  <p className="mt-2 text-slate-700 font-semibold">7000563687</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}
