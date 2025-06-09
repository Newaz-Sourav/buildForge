import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Chose from './ChoseUs/Chose'
import Approach from './Approach/Approach'
import Table from './Table/Table'
import Quote from './Quote/Quote'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Hero></Hero>

      <Services></Services>

      <Chose></Chose>

      <Approach></Approach>

      <Table></Table>

      <Quote></Quote>

      <Footer></Footer>
    </div>
  )
}

export default Home
