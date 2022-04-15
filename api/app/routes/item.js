// import express router
const router = require('express').Router();
//import the list item controller
const itemCtrl = require('../controllers/item');
// GET /items?lists_id=___
router.get('/', itemCtrl.getListItems);
// GET /item/:id
router.get('/:id', itemCtrl.getOneById);
// POST /item
router.post('/', itemCtrl.createItem);
// PUT /item/:id
router.put('/:id', itemCtrl.updateItem);
// DELETE /item/:id
router.delete('/:id', itemCtrl.removeItem);
// export the route from this file
module.exports = router;
