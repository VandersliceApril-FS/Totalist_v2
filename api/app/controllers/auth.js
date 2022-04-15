const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10; //sets the intensity of the encoding
const { User } = require('../models');

exports.registerUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const hash = await bcrypt.hash(password, saltRounds);

  try {
    const user = await User.create({
      email,
      password: hash,
      firstName,
      lastName,
    });
    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.json({ token, loggedIn: true });
  } catch (error) {
    console.error(error.errors[0].message);
    return res.status(422).send(error.errors[0].message);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).send({ error: 'You need an email and password' });
  }
  
  try {
    const [user] = await User.findAll({
      where: {
        // TODO: What happens if unable to find user?
        email,
      },
    });
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(401).send({ error: 'Unauthorized' });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.json({ token, loggedIn: true, user });
  } catch (error) {
    
    console.log('ERROR >>>', error);
  }
};
