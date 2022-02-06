exports.up = function (knex) {
  return knex.schema.createTable('bfdata', table => {
    table.increments('id')
    table.string('name')
    table.string('bfcode')
    table.string('comments')
    table.integer('memory')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('bfdata')
}
