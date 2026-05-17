import HeroSection from '@/components/hero-section'
import WhatWeDoSection from '@/components/what-we-do'
import StatsSection from '@/components/stats-section'
import AboutSection from '@/components/about-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhatWeDoSection />
      
      <AboutSection />
      <Footer />
    </main>
  )
}
