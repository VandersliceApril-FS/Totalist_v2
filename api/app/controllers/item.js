// load in the model

const { Item, ShoppingList } = require('../models')
// get all the items that belong to one list
exports.getListItems = async (req, res) => {
    // get the list id from the query
    const { shoppingListId } = req.query;
    // run the find all function on the model
    const items = await Item.findAll();
    // filter the list itemss to only list itemss for this List
    const listitems = items.filter(item => item.shoppingListId === shoppingListId);
    // respond with json of the list's item array
    res.json(listitems)
}

//find one item by id
exports.getOneById = async (req, res) => {
    //get the id from the route params
    const { id } = req.params;
    // search the item model for the list item
    const item = await Item.findByPk(id);
    if(!item) {
        // return not found code 404
        res.sendStatus(404);
        return;
    }
    // if the list items is found send it back
    res.json(item)
}

// add a new list item
exports.createItem = async (req, res) => {
    // get the name and cost from the request body
    const { name, costPerItem, quantity, isComplete, shoppingListId, store} = req.body;
    // create the new item and save the new id
    const id = await Item.create({ name, costPerItem, quantity,isComplete, shoppingListId, store });
    console.log(id)
    // send the new id back to the request
    res.json({ id });
}

// update a list item
exports.updateItem = async (req, res) => {
    // get the id from the route params
    const { id } = req.params;
    // try {
        // update the list item with any data form the req.body and the id
    const { updateItem } = await Item.update(req.body, {
        where: { id }
    });
    
    // respond with the updated list item
    res.json(updateItem)
    // } catch (e) {
    //     //map the error messages to send them back
    //     const er = e.errors
    //     if(er !== null) {
    //         const errors = er.map((err) => err.message);
    //         res.status(400).json({ errors })
    //     }
        
    // }
    
}

// delete a list item
exports.removeItem = async (req, res) => {
    // get the id from the route
    const { id } = req.params;
    // remove the list item
    await Item.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200)
}


// curl -X DELETE http://localhost:3001/items/fdbf3282-2fcd-413e-b011-29fc11375bcc