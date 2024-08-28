import React, {useEffect} from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import ClientsCard from '../sections/ClientsCard'
import Goal from '../sections/Goal'
import Portfolio from '../sections/Portfolio'
import Team from '../sections/Team'
import Services from '../sections/Services'
import Reviews from '../sections/Reviews'
import Contact from '../sections/Contact'
import Blog from '../sections/Blog'
import Subscribe from '../sections/Subscribe'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ClientsCard />
      <Goal />
      <Portfolio />
      <Team />
      <Reviews />
      <Contact />
      <Blog />
      <Subscribe />
    </>
  )
}

export default HomePage