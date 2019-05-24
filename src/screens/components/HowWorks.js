import React from 'react'
import styled from 'styled-components'

import phone from '@/assets/images/phone.png'
import cal from '@/assets/images/calendar.svg'
import polish from '@/assets/images/polish.png'
import pack from '@/assets/images/pack.png'

import { Step, Title } from '@/style-guide'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
`

const HowWorks = () => (
  <>
    <Title>
      How It Works
    </Title>
    <StyledContainer>
      <Step
        icon={phone}
        title="Destination Consultation"
        small
      >
        Once we have received your inquiry and we have exchanged greetings and hellos,
        we will send you an in-depth questionnaire to learn more about the vision
        for the trip and to collect basic information. From there we will schedule a
        consultation call to get to know each other and run through some initial ideas
        and our available packages. Don’t forget: if you like what you see but don’t
        see your destination offered, we are happy to customize something for you.
        We love researching new places!
      </Step>
      <Step
        icon={cal}
        title="Save Your Spot"
      >
        Once you have decided on your destination and your desired package, we will
        need to get started with a proposed itinerary. Since we spend our time combing
        the right sites and calling the right people to get you the best offers and
        value, at this time we ask that you submit a 50% deposit so that we can begin
        working together right away. Once that is submitted we are all hands on deck
        to begin planning a dream bachelorette.
      </Step>
      <Step
        icon={polish}
        title="Make It Yours"
      >
        Now it’s time for us to make the magic happen! Once we’ve collected everything
        we need to know from likes to dislikes, budget, and allergies, we will draft
        an itinerary and keep drafting until it is 100% to your liking. From there we
        will require the remaining 50% deposit to confirm reservations & book
        activities.
      </Step>
      <Step
        icon={pack}
        small
        title="Pack & Party"
      >
        Now comes the fun part! You get to sit back and relax while we handle the
        rest. We will even include a customized look book to make packing easy so that
        everything feels seamless from the start. Get ready to have a perfect weekend
        with your best friends. The Luxette Concierge team will be accessible the
        whole time to make sure of it!
      </Step>
    </StyledContainer>
  </>
)

export default HowWorks
