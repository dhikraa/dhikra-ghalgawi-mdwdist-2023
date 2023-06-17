const express = require('express');
const router = express.Router();
const { checkRole } = require('./middleware');

const bcrypt = require('bcrypt');



// Route pour les visiteurs
router.get('/visitor', (req, res) => {
   res.render('visitor');
});

// Route pour les super-admins
router.get('/super-admin', checkRole(2), (req, res) => {
    res.render('super-admin');
});

// Route pour les commerçants
router.get('/commercant', checkRole(3), (req, res) => {
    res.render('commercant');
});

module.exports = router;
