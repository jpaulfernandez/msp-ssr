
exports.up = function(knex, Promise) {
    return knex.schema.createTable('clients', (table) => {
        table.increments('id').unsigned().primary();
        table.string('customerId').notNull();
        table.string('firstName').notNull();
        table.string('lastName');
        table.string('midName');
        table.string('addressLine1');
        table.string('addressLine2');
        table.string('city');
        table.string('province');
        table.string('birthday');
        table.string('civilStatus');
        table.string('dateCreated');
        table.string('spouseFirstName');
        table.string('spouseLastName');
        table.string('spouseMidName');
        table.string('businessName');
        table.string('businessIndustry');
        table.string('businessAddress');
        table.string('businessCity');
        table.string('businessProvince');
        table.string('businessNotes');
        table.string('digitalSignature');
        table.string('files');
        table.string('profile');
        table.string('status');        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('clients');  
};
