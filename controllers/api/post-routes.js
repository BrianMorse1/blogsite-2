const router = require('express').Router();
const {Post} = require("../../models")

// ---> /api/posts

router.get("/all", (req, res) => {
    Post.findAll()
    .then(results => {
        res.json(results)
    })
})


module.exports = router;