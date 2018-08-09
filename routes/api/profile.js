const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile model
const profile = require('../../models/profile');
// Load user Profile
const User = require('../../models/User');

// @route GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

// @route GET api/profile
// @desc Get current user's profile
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(!profile => {
      return res.status(404).json();
    })
})



module.exports = router;
