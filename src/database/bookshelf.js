var knex = require('knex')({
  client: 'mysql',
  connection: {
    database: 'msp',  // make sure you create this db
    user: 'root',         // can be something else
    password: '',         // your corresponding password
    host: 'mspmysql',
    port: '3306'
  }
});

//   var bookshelf = require('bookshelf')(knex);
//   bookshelf.plugin('registry');
  export default knex;