// load in the list model
const { ShoppingList, Item } = require('../models');

exports.getAll = async (req, res) => {
    // run the find all function on the model
    const userId = req.user.id;
    const shoppinglists = await ShoppingList.findAll({
        include: Item
    });
    const listCollection = shoppinglists.filter(list => list.userId === userId);
    res.json(listCollection)
};


exports.getOneById = async (req, res) => {
    const { id } = req.params;
    const list = await ShoppingList.findByPk(id, {
        include: Item
    });
    console.log(list);
    if (!list) {
        // return a 404 not found code
        res.sendStatus(404);
        return;
    }
    // if the list is found send it back
    res.json(list);
}

// add a new list
exports.createShoppinglist = async (req, res) => {
    // get the title from the request body
    const { title } = req.body;
    // create the item and save the new id
    const id = await ShoppingList.create({ title, userId: req.user.id });
    console.log(`created new list with id ${id}`)
    
    res.json({ id })
}

// update a list title
exports.updateShoppinglist = async (req, res) => {
    
    let list = await ShoppingList.update( req.body, {
        where: { id: req.params.id}
    })
    res.json(list)
}

// delete list
exports.deleteShoppinglist = async (req, res) => {
    // get the id from params
    const { id } = req.params;
    debugger
    console.log(id)
    await ShoppingList.destroy({ where: { id } });
    res.sendStatus(200)
}
