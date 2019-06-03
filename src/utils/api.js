import axios from 'axios'

const API_HOST = 'http://localhost:3006/'

export const saveContact = values => axios.post(`${API_HOST}add-contact`, values)
