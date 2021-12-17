var axios = require('axios')
var config = require('../config/config.json')

var data = [{
    id: "1",
    name : "Mohanish",
    organization : "Zingworks llp"
},
{
    id: "2",
    name : "Mohanish",
    organization : "Zingworks llp"
}]

//module for getting users.
exports.get_users = (req, res) => {

    res.json(data)

}

//module for adding users.
exports.add_users = (req, res) => {

    req.on('data', result => {
        data.push(JSON.parse(result))
        res.json(data)
    })
}

//Update user
exports.update_users = (req, res) => {

    var filterData = data.filter(e => e.id === req.params.id)
    //[{name : "mohanish"}]
    req.on('data', result => {

        filterData[0].name = JSON.parse(result).name
        
        res.json(data)
    })    
}

//delete user
exports.delete_users = (req, res) => {

    var filterData = data.filter(e => e.id !== req.params.id)
    
    data = filterData

    res.json(data)
}
