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
  font-size: 1em;
  font-weight: 600;
  margin: 20px 0;
`

const defaultInputStyle = Object.freeze({ marginBottom: 14 })

const SubmitForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [weddingRole, setWeddingRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <StyledContainer>
      <StyledTitle>
        Submit the form below to get started
      </StyledTitle>
      <Input
        placeholder='First name'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Last name'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='What is your role in the wedding?'
        value={weddingRole}
        onChange={e => setWeddingRole(e.target.value)}
        style={defaultInputStyle}
      />
      <Input
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={defaultInputStyle}
        type='email'
      />
      <Input
        placeholder='Phone'
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={defaultInputStyle}
        type='tel'
      />
      <StyledButton>
        Submit
      </StyledButton>
    </StyledContainer>
  )
}

export default SubmitForm
