const router = require('express').Router();

router.get('/', (req, res) => {
    if(req.session.loggedin){
        req.session.destroy();
    }
    res.redirect('/');
});

module.exports = router;