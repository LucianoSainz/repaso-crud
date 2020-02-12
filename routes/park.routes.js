const express = require('express')
const router = express.Router()
const Park = require('../models/park.model');
// Aquí los endpoints


router.get('/new-park', (req, res, next) => {
    res.render('parks/new-park');
  });

router.post('/new-park', (req, res, next) => {
    Park.create({
        name:req.body.name,
        descriptions:req.body.descriptions,
      })
     
.then( park => {
    res.redirect('park/new-park'); 
  })
})

module.exports = router