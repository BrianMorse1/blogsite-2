const router = require('express').Router();
const {User} = require("../../models")

//gets all users
router.get("/all", (req, res) => {
    User.findAll()
    .then(results => {
        res.json(results)       
    })
})

//gets one user by id
router.get('/:id', async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      if (!user){
        res.status(404).json({ message: 'No user found with that id.'});
        return;
      }
  
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      }
    });

    //creates a new user
    router.post('/', async (req, res) => {
        try {
         const user = await User.create(req.body);
         res.status(200).json(user);
       }catch(err) {
       res.status(400).json(err);
       }});


       //update user by id
       router.put('/:id', async (req, res) => {
        try {
          const user = await User.update(
            {
              name: req.body.name,
              email: req.body.email
            },
            {
              where: {
                id: req.params.id
              }
            }
          )
      
          res.status(200).json(user);
      
      
        } catch(err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

      //delete user by id
      router.delete('/:id', async (req, res) => {
        try {
          const user = await User.destroy(
            {
              where: {
                id: req.params.id
              }
            }
          )
          res.status(200).json(user);
      
        } catch(err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
          

module.exports = router;