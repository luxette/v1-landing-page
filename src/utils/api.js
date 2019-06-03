import axios from 'axios'

export const saveContact = values => axios.post(`${process.env.REACT_APP_API_HOST}add-contact`, values)
