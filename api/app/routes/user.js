// import express router
const router = require('express').Router();
// import the user controller
const userCtrl = require('../controllers/user');
// GET /users
router.get('/', userCtrl.getUsers);
// GET /user/:id
router.get('/:id', userCtrl.getOneById);
// POST /user
router.post('/', userCtrl.createUser);
// PUT /user/:id
router.put('/:id', userCtrl.updateUser);
// DELETE /user/:id
router.delete('/:id', userCtrl.removeUser);
// export the routes from this file
module.exports = router;