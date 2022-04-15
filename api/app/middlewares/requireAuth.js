const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in'})
    }
    const token = authorization.replace('Bearer ', '');
    
    try {
        jwt.verify(token, process.env.SECRET, async (err, payload) =>{
            if (err) {
                return res.status(401).send({ error: 'You must be logged in' });
            }
            const { id } = payload;
            console.log('Attempting to verify', id);
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(401).send({ error: 'Account deactivated.' });
            }
            req.user = user;
            
            next();
            
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ error: 'Auth error occurred.' });
    }
    
}