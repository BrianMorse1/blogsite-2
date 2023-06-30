const router = require('express').Router();
const {User, Post, Comment} = require('../../models')
router.get('/', async (req, res) => {
    //get all posts
    const postData = await Post.findAll({
        include: [User]
    })
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
        // layout: "main",
        posts: posts,
        loggedin: req.session.loggedin
    })
});


//renders singlepost handlebars when provided post id
router.get("/post/:id", async (req, res) => {

    const postData = await Post.findByPk(req.params.id, {
        include: [Comment]
    });

    const post = postData.get({plain: true})
    console.log(post);
    res.render("singlepost", {
        post: post,
        loggedin: req.session.loggedin,
        comments: post.comments
    })

})


module.exports = router;