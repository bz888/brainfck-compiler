exports.up = function (knex) {
  return knex.schema.createTable('bfdata', table => {
    table.increments('id')
    table.string('name')
    table.text('bfcode', 2000)
    table.string('comments')
    table.integer('memory')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('bfdata')
}
