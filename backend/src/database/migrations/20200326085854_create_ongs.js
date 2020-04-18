
exports.up = function(knex) {
  return knex.schema.createTable('ongs',function(table)
  {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('login').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('WhatsApp').notNullable();
    table.string('city').notNullable();
    table.string('Uf',2).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
