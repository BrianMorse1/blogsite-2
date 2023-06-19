const router = require('express').Router();
const pages = require('./pages');
const api = require("./api");


// const checkLoggedIn = (req, res, next) => {
//     if (req.session.loggedIn) {
//       next();
//     } else {
//       res.redirect('/');
//     }
//   };
  
// //checks to ensure user is logged in before proceeding with routing. Redirects to home page if not.
// router.use(checkLoggedIn);

router.use('/', pages);
router.use('/api', api);



module.exports = router;