const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model');


// Aquí los endpoints

router.get('/coasters/new', (req, res, next) => {
    res.render('coasters/new');
  });

router.post('coasters/new', (req, res, next) => {
        Coaster.create({
        name:req.body.name,
        descriptions:req.body.descriptions,
      })
     
.then( park => {
    res.redirect('coasters/new'); 
  })
})
module.exports = router