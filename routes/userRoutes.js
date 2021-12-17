var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

//for getting users
router.get('/', userController.get_users)
//for adding user
router.post('/', userController.add_users)
//for updating user
router.put('/:id', userController.update_users)
//for deleting user
router.delete('/:id', userController.delete_users)


module.exports = router;