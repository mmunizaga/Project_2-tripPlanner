const APIHandler = axios.create({
    baseURL : 'http://localhost:4040'
})

// const APIHandler = axios.create({
//     baseURL : 'https://trip-plan-manager.herokuapp.com/'
// })

export default APIHandler;