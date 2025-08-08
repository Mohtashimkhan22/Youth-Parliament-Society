import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Team from './Team'
import ContactUs from './ContactUs'
import Registration from './Registration'
import Events from './Events'
import CommitteesAndAgendas from './CommitteesAndAgendas'
import Mission from './Mission'
import Objectives from './Objectives'
import Vission from './Vission'
import AboutUs from './Aboutus'

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <AboutUs />
    <Mission />
    <Vission />
    <Objectives />
    <CommitteesAndAgendas />
    <Events />
    <Registration />
    <ContactUs />
    <Team />
    <Footer />
    </>
  )
}

export default Home