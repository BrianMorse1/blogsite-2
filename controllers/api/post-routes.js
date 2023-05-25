const router = require('express').Router();
const {Post} = require("../../models")


//gets all posts
router.get("/all", (req, res) => {
    Post.findAll()
    .then(results => {
        res.json(results)
    })
})

    //creates a new post
    router.post('/', async (req, res) => {
        try {
         const post = await Post.create(req.body);
         res.status(200).json(post);
       }catch(err) {
       res.status(400).json(err);
       }});


      

      //delete post by title
      router.delete('/:title', async (req, res) => {
        try {
          const post = await Post.destroy(
            {
              where: {
                title: req.params.title
              }
            }
          )
          res.status(200).json(post);
      
        } catch(err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
          

module.exports = router;

module.exports = router;