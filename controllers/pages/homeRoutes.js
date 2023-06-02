const router = require('express').Router();
const {User, Post, Comment} = require('../../models')
router.get('/', async (req, res) => {
    //get all posts
    const postData = await Post.findAll({
        include: [User]
    })
    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts)

    res.render('homepage', {
        // layout: "main",
        posts: posts,
        loggedin: true
    })
});

router.get("/post/:id", async (req, res) => {

    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({plain: true})

    res.render("singlepost", {
        post: post
    })

})


module.exports = router;