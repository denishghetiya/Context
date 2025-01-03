const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    
});

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item))
    
});

module.exports = router;
