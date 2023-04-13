import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
        <Header></Header>
        <video className="absolute drop-shadow-lg hidden lg:inline w-full -z-10" autoPlay loop muted>
            <source src="carousel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <main className="mx-auto pt-20 px-24 z-10">
            <div id="kicker" className="flex flex-col justify-between">
                <Hero></Hero>
                <Products></Products>
            </div>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </main>
        <Footer></Footer>
    </>
  )
}
