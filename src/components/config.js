import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 8hF29UrHYM6nE62H4TcImo4TRsT8aRbmh4CvjeyfXTg",
      },
})