const router = require('express').Router();
const {Comment} = require("../../models")


//gets all comments for a given post
router.get("/:id", (req, res) => {
    Comment.findAll({
        where: {
            post_id: req.params.id
        }
    })
    .then(results => {
        res.json(results)
    })
})

    //creates a new comment
    router.post('/', async (req, res) => {
        try {
         const comment = await Comment.create(req.body);
         res.status(200).json(comment);
       }catch(err) {
       res.status(400).json(err);
       }});


      

      //delete comment by id
      router.delete('/:id', async (req, res) => {
        try {
          const comment = await Comment.destroy(
            {
              where: {
                id: req.params.id
              }
            }
          )
          res.status(200).json(comment);
      
        } catch(err) {
          console.log(err);
          res.status(500).json(err);
        }
      });


      //update comment by id
      router.put('/:id', async (req, res) => {
        try {
          const comment = await Comment.update(
            {
              body: req.body.body
            },
            {
              where: {
                id: req.params.id
              }
            }
          )
      
          res.status(200).json(comment);
      
      
        } catch(err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
          

module.exports = router;