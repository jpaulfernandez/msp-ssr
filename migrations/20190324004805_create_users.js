
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').unsigned().primary();
        table.string('employeeId').notNull();
        table.string('firstName').notNull();
        table.string('lastName');
        table.string('midName');
        table.string('role');
        table.string('civilStatus');
        table.string('birthDate');
        table.string('contactNo');
        table.string('email');
        table.string('password');
        table.string('dateCreated');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};