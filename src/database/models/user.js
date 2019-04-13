import knex from '../bookshelf';

export let insertUser = (user) => {
    let currentDate = new Date();
    user.dateCreated = currentDate.getDate();

    retrieveUser(user.employeeId).then(data => {
        if(data.length > 0) {
            return knex('users')
                    .where({employeeId: user.employeeId})
                    .update({...user});
        } else {
            return knex('users').insert({...user});
        }
    })

  

}

export let retrieveUser = (filter) => {
    if (!filter) {
        console.log('retrieving without filters');
        return knex.select().table('users');
    } else {
        console.log('retrieving with filters');
        return knex.from('users').select('*').where({employeeId: filter});
    }
}