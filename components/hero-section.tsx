'use client'

import {
  ArrowRight,
  Code2,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: ShieldCheck,
    label: 'CYBER\nSECURITY',
    className: 'left-[18%] top-[18%]',
    connector: 'left-[30%] top-[34%] w-[22%] rotate-[28deg]',
  },
  {
    icon: GraduationCap,
    label: 'SCHOOL\nERP',
    className: 'right-[6%] top-[16%]',
    connector: 'right-[20%] top-[35%] w-[26%] -rotate-[30deg]',
  },
  {
    icon: HeartPulse,
    label: 'HIMS\nSOLUTIONS',
    className: 'left-[8%] bottom-[20%]',
    connector: 'left-[25%] bottom-[38%] w-[26%] -rotate-[6deg]',
  },
  {
    icon: Code2,
    label: 'SOFTWARE\nDEVELOPMENT',
    className: 'right-[4%] bottom-[20%]',
    connector: 'right-[20%] bottom-[38%] w-[26%] rotate-[6deg]',
  },
]

export default function HeroSection() {
  return (
    <section
  id="home"
  className="relative overflow-hidden bg-[#000E1F] pt-6 lg:pt-8"
>
      {/* MAIN GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(0,176,255,0.2),transparent_35%),linear-gradient(to_bottom,#021224,#010814)]" />

      {/* GRID DOTS */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle,rgba(90,200,255,0.6)_1px,transparent_1px)] [background-size:42px_42px]" />

      {/* DIAGONAL SCIFI STREAKS */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(130deg,transparent_25%,rgba(0,140,255,0.12)_40%,transparent_58%,transparent_64%,rgba(0,140,255,0.08)_76%,transparent_90%)]" />

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-[radial-gradient(circle_at_center,rgba(0,160,255,0.32),transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 py-10 md:px-10 lg:py-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr]">

          {/* LEFT CONTENT */}
          {/*
            Typography adjusted: reduced heading and paragraph sizes to improve
            balance and avoid oversized text on common screen sizes. If you need
            to tweak sizes further, modify the numeric classes above (text-[], md:text-[]).
          */}
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-14 bg-orange-500" />
              <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
                Innovate. Secure. Empower.
              </span>
            </div>

            <h1 className="text-[44px] font-black leading-[1.05] tracking-[-1px] text-white md:text-[56px] lg:text-[54px]">
              Smart Technology
              <span className="block">
                <span className="text-orange-500">Stronger</span> Tomorrow
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Amanity Tech Solutions delivers intelligent software, secure systems,
              and digital solutions that drive better healthcare, education and businesses.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex h-12 items-center gap-3 rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition-all duration-300 hover:scale-105 hover:bg-orange-400"
              >
                Explore Solutions
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/#about"
                className="group inline-flex h-12 items-center gap-4 rounded-xl border border-white/60 px-6 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:bg-white/5"
              >
                About Us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/team"
                className="group inline-flex h-12 items-center gap-3 rounded-xl bg-white/5 px-6 text-sm font-bold text-white border border-white/10 hover:bg-white/7 transition-all"
              >
                Meet Our Team
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto h-[460px] w-full max-w-[720px]">
            
            {/* LOGO GLOW */}
            <div className="absolute left-1/2 top-[52%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl" />

            {/* RINGS */}
            <div className="absolute left-1/2 top-[72%] h-[185px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-400/40 shadow-[0_0_70px_rgba(34,211,238,0.45)]" />
            <div className="absolute left-1/2 top-[72%] h-[130px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/70 shadow-[0_0_50px_rgba(34,211,238,0.5)]" />
            <div className="absolute left-1/2 top-[72%] h-[60px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/40 blur-xl" />

            {/* MAIN LOGO */}
            <div className="absolute left-1/2 top-[46%] z-30 -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src="/amanity-logo-new.png"
                          alt="Amanity Logo"
                          width={480}
                          height={480}
                          priority
                          className="drop-shadow-[0_0_55px_rgba(14,165,233,0.55)]"
                        />
            </div>

            

            {/* SERVICE CARDS */}
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.label} className={`absolute z-40 hidden md:block ${service.className}`}>
                  <div className="flex w-28 flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/90 bg-[#07192d]/90 text-cyan-300 shadow-[0_0_40px_rgba(14,165,233,0.5)] backdrop-blur-md">
                      <Icon size={40} strokeWidth={1.9} />
                    </div>
                    <span className="mt-4 whitespace-pre-line text-sm font-extrabold text-white/90">
                      {service.label}
                    </span>
                  </div>
                </div>
              )
            })}

            {/* CONNECTORS */}
            {services.map((service) => (
              <span
                key={service.connector}
                className={`absolute hidden border-t border-dashed border-cyan-400/40 md:block ${service.connector}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
