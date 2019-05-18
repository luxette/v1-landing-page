import React from 'react'

import phone from '@/assets/images/phone.png'
import cal from '@/assets/images/calendar.svg'
import polish from '@/assets/images/polish.png'
import pack from '@/assets/images/pack.png'

import { About, Step } from '@/style-guide'

const HowWorks = () => {
  const callBody = 'Take a look at our different destinations & packages, then send us a note! Once we’ve exchanged greetings and hellos, we’ll send you a more in-depth questionnaire to learn more about the bride to be and how your group likes to travel. From there we will schedule a consultation call to get to know each other and run through some initial ideas. Don’t forget: if you like what you see but don’t see your destination offered, we are happy to customize something for you. We love researching new places!'
  const makeBody = 'Now it’s time for us to make the magic happen! Once we’ve collected everything we need to know from likes to dislikes, budget, and allergies, we will draft an itinerary and keep drafting until it is 100% to your liking. From there we will require a 50% deposit to make reservations & book activities.'
  const sportBody = 'Once you decide on your destination and party package, we’ll need to get started with a proposed itinerary. Since we spend our time combing the right sites and calling the right people to get you the best offers and value, at this time we ask that you submit your planning fee so that we can begin working together right away. Once that is submitted we are all hands on deck to begin planning a dream bachelorette.'
  const packBody = 'Now comes the fun part. You get to sit back and relax while we handle the rest. We will even include a packing list to make sure that everything feels seamless from the start. Get ready to have the most perfect weekend with your best friends. We will be here the whole time to make sure of it! '

  return (
    <div className="how-works">
      <About />
      <div className="how-works-title">How does it work?</div>
      <div className="how-works-wrap">
        <Step
          className="first-step"
          icon={phone}
          title="Destination consultation"
          body={callBody}
          small
        />
        <Step icon={cal} title="Save your spot" body={sportBody} />
        <Step icon={polish} title="Make it yours" body={makeBody} />
        <Step icon={pack} small title="Pack and party" body={packBody} />
      </div>
    </div>
  )
}

export default HowWorks
