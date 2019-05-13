import React from 'react'

import {
  Header,
  Landing,
  Destinations,
  HowWorks,
  MainImage,
  Testimonials
} from '@/style-guide'

import './App.css'

import luxette from '@/assets/images/luxette.png'

const App = () => (
  <div>
    <img src={luxette} alt="check" />
    <Header />
    <MainImage />
    <Landing />
    <HowWorks />
    <Destinations />
    <Testimonials />
  </div>
)

export default App
