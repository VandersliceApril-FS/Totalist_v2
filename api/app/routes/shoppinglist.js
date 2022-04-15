// import the express router
const router = require('express').Router();
// import the list controller
const shoppinglistCtrl = require('../controllers/shoppinglist');
// GET /shoppinglists route
router.get('/', shoppinglistCtrl.getAll);
// GET /list/:id
router.get('/:id', shoppinglistCtrl.getOneById);
// GET users lists
// router.get('/:id/lists', shoppinglistCtrl.getListCollection)
// POST /lists
router.post('/', shoppinglistCtrl.createShoppinglist);
router.put('/:id', shoppinglistCtrl.updateShoppinglist)
router.delete('/:id', shoppinglistCtrl.deleteShoppinglist)

// export the route from this file
module.exports = router;

