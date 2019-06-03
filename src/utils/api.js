import axios from 'axios'

const API_HOST = 'https://luxete-api-3z4w5ilef.now.sh/'

export const saveContact = values => axios.post(`${API_HOST}add-contact`, values)
