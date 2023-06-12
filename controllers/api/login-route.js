const router = require('express').Router();
const { User } = require("../../models");

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
          where: {
            name: req.body.name,
          },
        });
        if (!userData) {
          res.status(400).json({ message: 'Incorrect username or password, please try again' });
          return;
        }

const validPassword = await userData.checkPassword(req.body.password);
if (!validPassword) {
    res.status(400).json({ message: 'Incorrect username or password, please try again' });
    return;
    }

    req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json({ user: userData, message: "You are now logged in!" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;