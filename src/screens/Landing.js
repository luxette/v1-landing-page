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

const StyledGradientContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: linear-gradient(to top, #f1e3d0, #ffffff 93%);
`
const Landing = () => (
  <StyledLanding>
    <Header />
    <Banner />
    <Introduction />
    <Contact />
    <StyledGradientContent>
      <HowWorks />
      <SubmitForm />
      <Testimonials />
      <Footer />
    </StyledGradientContent>
  </StyledLanding>
)

export default Landing
