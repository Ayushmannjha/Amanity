import { Users, Briefcase, Trophy, Headphones } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Briefcase, number: '100+', label: 'Projects Completed' },
    { icon: Trophy, number: '5+', label: 'Years of Excellence' },
    { icon: Headphones, number: '24/7', label: 'Support' },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-6 md:p-10 border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800/90 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 rounded-xl bg-slate-900/50 p-4 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-md">
                    <Icon size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
