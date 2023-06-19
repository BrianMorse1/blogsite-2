// const router = require('express').Router();
// const { User } = require("../../models");

// // Login
// router.post('/login', async (req, res) => {
//   const logEmail =  req.body.email;
//   const logPassword = req.body.password;
  
//   try {
//       const currentUser = await User.findOne({
//             where: {email: logEmail}
//         });

//     if (currentUser && currentUser.password === logPassword) {
//         req.session.loggedin = true;
//     }
        
//         if (!currentUser) {
//           res.status(400).json({ message: 'Incorrect username or password, please try again' });
//           return;
//         }}catch(error){
//           res.status(500).json(error);
//         }});

// const validPassword = await userData.checkPassword(req.body.password);
// if (!validPassword) {
//     res.status(400).json({ message: 'Incorrect username or password, please try again' });
//     return;
//     }

//     req.session.save(() => {
//         req.session.loggedIn = true;
//         res.status(200).json({ user: userData, message: "You are now logged in!" });
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// module.exports = router;


const router = require('express').Router();
const { User } = require("../../models");
const bcrypt = require('bcrypt');

// Login
router.post('/login', async (req, res) => {
  const logEmail = req.body.email;
  const logPassword = req.body.password;

  try {
    const currentUser = await User.findOne({
      where: { email: logEmail }
    });

    if (currentUser) {
      const validPassword = await bcrypt.compare(logPassword, currentUser.password);
      if (validPassword) {
        req.session.loggedin = true;
        req.session.save(() => {
          res.status(200).json({ user: currentUser, message: "You are now logged in!" });
        });
      } else {
        res.status(400).json({ message: 'Incorrect username or password, please try again' });
      }
    } else {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
