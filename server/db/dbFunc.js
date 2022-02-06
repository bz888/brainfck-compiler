const connection = require('./connection')

module.exports = {
  getById,
  getData
}

function getById (id, db = connection) {
  return db('bfdata')
    .where('id', id)
    .select()
    .first()
}
function getData (db = connection) {
  return db('bfdata')
    .select()
}
