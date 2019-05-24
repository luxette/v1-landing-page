import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Banner from './components/Banner'
import Introduction from './components/Introduction'
import Contact from './components/Contact'
import HowWorks from './components/HowWorks'
import SubmitForm from './components/SubmitForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Landing = () => (
  <StyledLanding>
    <Header />
    <Banner />
    <Introduction />
    <Contact />
    <HowWorks />
    <Testimonials />
    <SubmitForm />
    <Footer />
  </StyledLanding>
)

export default Landing
