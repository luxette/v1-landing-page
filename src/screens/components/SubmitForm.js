import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import styled, { keyframes } from 'styled-components'

import { Input, Button, Title } from '@/style-guide'

import { saveContact } from '@/utils/api'

const StyledContainer = styled.div`
  width: 60%;
  text-align: center;
  padding-top: 30px;

  @media (max-width: 992px) {
    width: 100%;
    padding: 30px 20px;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const StyledMessage = styled.div`
  color: #fff;
  margin: 20px auto;
  text-align: center;
  padding: 10px 0;
  border-radius: 5px;
  opacity: 1;
  animation: ${fadeOut} 1s linear 2s;
`

const StyledSuccessMessage = styled(StyledMessage)`
  background-color: #66d566;
`

const StyledErrorMessage = styled(StyledMessage)`
  background-color: #fa7b7b;
`

const REQUIRED_MESSAGE = 'This field is required'
const VALID_EMAIL_MESSAGE = 'Please type a valid email'
const VALID_NUMBER_MESSAGE = 'Please type a valid number'
const VALID_LIMIT_NUMBER_MESSAGE = 'The number must be greater or equal to zero'
const MESSAGE_TIME = 3000

const initialValues = {
  firstName: '',
  lastName: '',
  weddingRole: '',
  email: '',
  phone: '',
  destination: '',
  travelDates: '',
  numberGuests: '',
  other: '',
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required(REQUIRED_MESSAGE),
  lastName: yup.string().required(REQUIRED_MESSAGE),
  weddingRole: yup.string().required(REQUIRED_MESSAGE),
  email: yup.string().email(VALID_EMAIL_MESSAGE).required(REQUIRED_MESSAGE),
  phone: yup.string().required(REQUIRED_MESSAGE),
  destination: yup.string().required(REQUIRED_MESSAGE),
  travelDates: yup.string().required(REQUIRED_MESSAGE),
  numberGuests: yup.number()
    .min(0, VALID_LIMIT_NUMBER_MESSAGE)
    .typeError(VALID_NUMBER_MESSAGE)
    .required(REQUIRED_MESSAGE),
  other: yup.string(),
})

const defaultInputStyle = Object.freeze({ marginBottom: 10 })

const SubmitForm = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false)
  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const showSuccessMessage = () => {
    setErrorMessageVisible(false)
    setSuccessMessageVisible(true)

    setTimeout(() => {
      setSuccessMessageVisible(false)
    }, MESSAGE_TIME)
  }

  const showErrorMessage = () => {
    setSuccessMessageVisible(false)
    setErrorMessageVisible(true)

    setTimeout(() => {
      setErrorMessageVisible(false)
    }, MESSAGE_TIME)
  }

  const sendFormValues = async (values, { resetForm }) => {
    try {
      const postValues = {
        FIRSTNAME: values.firstName,
        LASTNAME: values.lastName,
        WEDDINGROL: values.weddingRole,
        EMAIL: values.email,
        PHONE: values.phone,
        DESTINATIO: values.destination,
        TRAVELDATE: values.travelDates,
        NUMBERGUES: values.numberGuests,
        OTHER: values.other
      }

      await saveContact(postValues)

      resetForm()
      showSuccessMessage()
    } catch (err) {
      showErrorMessage()
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={sendFormValues}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <StyledContainer>
          <Title>
            Submit the form below to get started
          </Title>
          <Input
            placeholder='First Name*'
            value={values.firstName}
            error={errors.firstName}
            name='firstName'
            onChange={handleChange}
            style={{ ...defaultInputStyle, marginTop: 20 }}
          />
          <Input
            placeholder='Last Name*'
            value={values.lastName}
            error={errors.lastName}
            name='lastName'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder="What's your role in the wedding?*"
            value={values.weddingRole}
            error={errors.weddingRole}
            name='weddingRole'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder='Email*'
            value={values.email}
            error={errors.email}
            type='email'
            name='email'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder='Phone*'
            value={values.phone}
            error={errors.phone}
            type='tel'
            name='phone'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder='Desired Destination*'
            value={values.destination}
            error={errors.destination}
            name='destination'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder='Dates of Travel (Exact or General)*'
            value={values.travelDates}
            error={errors.travelDates}
            name='travelDates'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder='Number of Guests*'
            value={values.numberGuests}
            error={errors.numberGuests}
            name='numberGuests'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Input
            placeholder='Other Details We Should Know!'
            value={values.other}
            error={errors.other}
            name='other'
            onChange={handleChange}
            style={defaultInputStyle}
          />
          <Button
            label='SUBMIT'
            onClick={handleSubmit}
          />

          {successMessageVisible && (
            <StyledSuccessMessage>
              Your contact was successfully sent :)
            </StyledSuccessMessage>
          )}

          {errorMessageVisible && (
            <StyledErrorMessage>
              An error has occurred, please try again later :(
            </StyledErrorMessage>
          )}
        </StyledContainer>
      )}
    </Formik>
  )
}

export default SubmitForm
