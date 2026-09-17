import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import OphinBanner from '@/components/OphinBanner'
import Technology from '@/components/Technology'
import About from '@/components/About'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <OphinBanner />
        <Technology />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
