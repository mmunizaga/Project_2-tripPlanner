// const APIHandler = axios.create({
//     baseURL : 'http://localhost:4040'
// })

const APIHandler = axios.create({
    baseURL : 'https://world-trip.herokuapp.com/all-trips'
})

export default APIHandler;