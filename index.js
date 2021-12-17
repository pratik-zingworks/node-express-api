const express = require('express')
const app = express();
var userRoutes = require('./routes/userRoutes')
const PORT = 8000;

// getting user data.
app.use('/', userRoutes)

app.listen(PORT, () => {
    console.log('Hey come here : ' + PORT)
})

module.exports = app