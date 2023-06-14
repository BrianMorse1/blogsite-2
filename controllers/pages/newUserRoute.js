const router = require('express').Router();

router.get('/', (req, res) =>{
res.render('newUser')
});

module.exports = router;