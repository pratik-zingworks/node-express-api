const { default: axios } = require("axios");
var config = require('../config/config.json')

//getting user data.
// axios.get(config.localHostApi)
// .then(response => {
//     console.log(response.data)
// })
// .catch(err => {
//     console.log(err)
// })

//adding user data.
// axios.post(config.localHostApi, {
//     name : "pratik",
//     organization : "Zingworks llp"
// })
// .then(response => {
//     console.log(response.data)
// })
// .catch(err => {
//     console.log(err)
// })

//updating user data.
// axios.put(config.localHostApi + '1', {
//     name : "pratik"
// })
// .then(response => {
//     console.log(response.data)
// })
// .catch(err => {
//     console.log(err)
// })

//deleting user data.
axios.delete(config.localHostApi + '2')
.then(response => {
    console.log(response.data)
})
.catch(err => {
    console.log(err)
})