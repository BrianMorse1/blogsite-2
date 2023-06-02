const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoute = require('./loginRoute');
// const profileRoutes = require('./profileRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoute);
// router.use('/profile', profileRoutes);





module.exports = router;