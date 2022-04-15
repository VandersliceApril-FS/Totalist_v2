// load in the models
const { User, ShoppingList, Item } = require('../models');

exports.getUsers = async (req, res) => {
  // run the find all function on the model
  const users = await User.findAll({
    include: [{ model: ShoppingList, include: [Item] }],
  });
  res.json(users);
};


exports.getOneById = async (req, res) => {
  console.log(req)
  const { id } = req.user;
  const user = await User.findByPk(id, {
    include: [{ model: ShoppingList, include: [Item] }],
  });
  if (!user) {
    // return a not found code
    res.sendStatus(404);
    return;
  }
  // if the user is found, send it back
  res.json(user);
};

// create new user
exports.createUser = async (req, res) => {
  // get the user info from the request body
  const { firstName, lastName, email, password } = req.body;
  // create the user object and save the new id
  const id = await User.create({ firstName, lastName, email, password });
  res.json({ id });
};

// update user info
exports.updateUser = async (req, res) => {
  // get the user id from params
  const { id } = req.params;

  let updateUser = await User.update(req.body, {
    where: { id },
  });
  res.json(updateUser);
};

// delete user account
exports.removeUser = async (req, res) => {
  // get the id from the route
  const { id } = req.params;
  // destroy user
  await User.destroy({ where: { id } });
  // send a good status
  res.sendStatus(200);
};

// 62ef5da3-0f57-49c8-a93b-aad28ff95c6e
