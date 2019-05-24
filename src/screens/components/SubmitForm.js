import React, { useState } from 'react'
import styled from 'styled-components'

import { Input, Button, Title } from '@/style-guide'

const StyledContainer = styled.div`
  width: 60%;
  text-align: center;
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
      <Title
        style={{ marginTop: 30, marginBottom: 20 }}
      >
        Submit the form below to get started
      </Title>
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
      <Button
        label='SUBMIT'
        onClick={() => console.log('Submit form!')}
      />
    </StyledContainer>
  )
}

export default SubmitForm
