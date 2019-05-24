import React, { useState } from 'react'
import styled from 'styled-components'

import { Input } from '@/style-guide'

const StyledContainer = styled.div`
  width: 60%;
  text-align: center;
`

const StyledButton = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
  margin: 20px 0;
  text-transform: uppercase;
`

const StyledTitle = styled.span`
  display: block;
  font-family: "Montserrat";
  font-size: 1.3em;
  text-transform: uppercase;
  font-weight: 600;
  margin: 60px 0 40px 0;
`

const defaultInputStyle = Object.freeze({ marginBottom: 14 })

const SubmitForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [weddingRole, setWeddingRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [destination, setDestination] = useState('')
  const [travelDates, setTravelDates] = useState('')
  const [numberGuests, setNumberGuests] = useState('')
  const [other, setOther] = useState('')

  return (
    <StyledContainer>
      <StyledTitle>
        Submit the form below to get started
      </StyledTitle>
      <Input
        placeholder='First Name*'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Last Name*'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder="What's your role in the wedding?*"
        value={weddingRole}
        onChange={e => setWeddingRole(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Email*'
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={defaultInputStyle}
        type='email'
      />
      <Input
        placeholder='Phone*'
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={defaultInputStyle}
        type='tel'
      />
      <Input
        placeholder='Desired Destination*'
        value={destination}
        onChange={e => setDestination(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Dates of Travel (Exact or General)*'
        value={travelDates}
        onChange={e => setTravelDates(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Number of Guests*'
        value={numberGuests}
        onChange={e => setNumberGuests(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Other Details We Should Know!'
        value={other}
        onChange={e => setOther(e.target.value)}
        style={defaultInputStyle}
      />
      <StyledButton>
        Submit
      </StyledButton>
    </StyledContainer>
  )
}

export default SubmitForm
