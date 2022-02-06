const express = require('express')

const db = require('../db/dbFunc')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  const id = 2
  db.getById(id)
    .then(data => {
      res.json(data)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
