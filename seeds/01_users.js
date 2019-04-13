
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Admin',
          midName: 'Admin',
          lastName: 'Admin',
          role: 'admin',
          employeeId: '0001',
          civilStatus: 'single',
          birthdate: '01/01/0001',
          email: 'admin@mspfamilylending.com',
          contactNo: '',
          password: 'mspadmin'
        }
      ]);
    });
};
