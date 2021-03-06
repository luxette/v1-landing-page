import React from 'react'
import styled from 'styled-components'

import { TestimonialCard, Title } from '@/style-guide'
import { secondary1, accent2 } from '@/style-guide/colors'

const StyledContainer = styled.div`
  background-color: ${secondary1};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 80px;
  align-items: center;

  @media (max-width: 992px) {
    padding: 30px 10px;
  }
`

const StyledTestimonials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }
`

const StyledFooter = styled.div`
  height: 110px;
  width: 100%;
  background-color: ${accent2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Hammersmith One";

  p {
    font-weight: bold;
    color: ${secondary1};
    text-align: center;
  }
`

const Testimonials = () => (
  <>
    <StyledContainer>
      <Title>
        WHAT OUR CLIENTS ARE SAYING
      </Title>
      <StyledTestimonials>
        <TestimonialCard client='Tiffany M., MOH'>
          "I had a wonderful experience planning my best friend's
          bachelorette party with Lauren! From beginning to end, Lauren
          was so meticulous about making sure that my vision for the
          event came to life, and that everything went off without a hitch. It
          was clear Lauren knows the best of the best when it comes to
          dining and nightlife in New Orleans - all of her restaurant
          recommendations were fantastic. I also loved all of the special
          touches she put in place while we were on the ground. Our entire
          party was blown away! Having her by my side was a HUGE help
          and I couldn't have done it without her (especially while working
          2 jobs!). I'd highly recommend Lauren and Luxette for any travel
          or event planning needs. 5 stars!!"
        </TestimonialCard>
        <TestimonialCard client='Aly T., Bride'>
          "I couldn't have imagined a better bachelorette trip than what
          Lauren (of Luxette) and my Maid of Honor organized for me in
          New Orleans! The itinerary was so well thought out and SO much
          fun—amazing restaurants and bars, super fun activities, and never
          a dull moment with my favorite ladies. Every detail was
          impeccable, including the communication with the entire group
          beforehand (complete with a detailed itinerary and outfit planner),
          the way my room was decorated when I arrived, the hotel choice,
          the pre-arrangement of details at each restaurant, and fun and
          hilarious activities every step of the way! I would 1,000%
          recommend Luxette to anyone who wants to take their next
        friends trip (bachelorette or otherwise) to the next level!"
        </TestimonialCard>
      </StyledTestimonials>
    </StyledContainer>
    <StyledFooter>
      <p>
        FINDING LOVE CAN BE HARD, BUT PLANNING YOUR BACHELORETTE IS EASY WITH US.
      </p>
    </StyledFooter>
  </>
)

export default Testimonials
