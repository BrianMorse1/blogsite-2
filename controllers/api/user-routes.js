const router = require('express').Router();
const {User} = require("../../models")

// ---> /api/users

router.get("/all", (req, res) => {
    User.findAll()
    .then(results => {
        res.json(results)
    })
})

module.exports = router;