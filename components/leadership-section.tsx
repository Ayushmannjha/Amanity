'use client'

import { Linkedin, Mail, Twitter } from 'lucide-react'

const leaders = [
  {
    name: 'Aman Jain',
    title: 'Founder & CEO',
    bio: 'Visionary leader with expertise in cyber security, software development and healthcare technologies. Driving the company\'s strategy, innovation and overall growth.',
    img: '/team/aman.jpg',
  },
  {
    name: 'Aditya Raj',
    title: 'Co-Founder',
    bio: 'Co-founder steering operations, technology solutions and strategic initiatives to build scalable and impactful digital products.',
    img: '/team/aditya.jpg',
  },
  {
    name: 'Ayushman Jha',
    title: 'Business Development Lead',
    bio: 'Business growth strategist focused on building strong client relationships, partnerships and expanding our market presence.',
    img: '/team/ayushman.jpg',
  },
  {
    name: 'Rishkesh Mishra',
    title: 'Marketing & Growth Lead',
    bio: 'Leading marketing initiatives, brand building and outreach strategies to drive visibility, engagement and growth.',
    img: '/team/rishkesh.jpg',
  },
]

export default function LeadershipSection() {
  return (
    <section className="bg-white">
      {/* Header band: royal blue gradient with orange accent */}
      <div className="bg-gradient-to-r from-[#0b3b91] to-[#06285f] text-white pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-sm" />
            <p className="mt-4 text-white/90">
              Meet the passionate individuals driving innovation, security, and growth at SecureTech Solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Cards area on soft gray background */}
  <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => {
              // use inline hex colors for the bottom stripe to ensure styles are applied
              const accentColors = ['#FB923C', '#06B6D4', '#FB7185', '#34D399']
              const accent = accentColors[idx % accentColors.length]
              return (
                <div
                  key={leader.name}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
                  style={{ borderBottom: `4px solid ${accent}` }}
                >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    {/* icon placeholder: simple circle with peach stroke */}
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500">
                      {/* If you prefer an SVG icon per role, swap here */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/><path d="M6 20a6 6 0 0 1 12 0"/></svg>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">{leader.name}</h3>
                  <p className="text-sm text-orange-400 font-medium">{leader.title}</p>
                  <div className="w-10 h-[2px] bg-orange-100 mt-3 mb-3" />
                  <p className="text-sm text-slate-600">{leader.bio}</p>

                  
                </div>
              </div>
              )
            })}
          </div>

          {/* CTA stripe */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75 12.05 12.05 0 0 0 .7 2.81 1 1 0 0 1-.23 1l-2 2a16 16 0 0 0 6.37 6.37l2-2a1 1 0 0 1 1-.23 12.05 12.05 0 0 0 2.81.7 1 1 0 0 1 .75 1V22z"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Let's Build Something Amazing Together!</p>
                  <p className="text-sm text-slate-600">We are always open to discussing new projects, partnerships or opportunities.</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-sm text-slate-500">Contact Number</p>
                  <p className="font-semibold text-slate-900">7000563687</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">info@securetechsolutions.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}