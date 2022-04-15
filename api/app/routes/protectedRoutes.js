const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('user in protected area', req.user);
    res.json({ user: req.user });
})

module.exports = router;