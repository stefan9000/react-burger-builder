import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-ce65f-default-rtdb.firebaseio.com/'
})

export default instance