const connection = require('./connection')

module.exports = {
  getById
}

function getById (id, db = connection) {
  return db('bfdata')
    .where('id', id)
    .select()
    .first()
}
