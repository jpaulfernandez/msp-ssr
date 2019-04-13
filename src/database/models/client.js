import knex from '../bookshelf';

export let insertClient = (client) => {
    let currentDate = new Date();
    client.dateCreated = currentDate.getDate();

    retrieveClient(client.customerId).then(data => {
        if(data.length > 0) {
            return knex('clients')
                    .where({customerId: client.customerId})
                    .update({...client});
        } else {
            return knex('clients').insert({...client});
        }
    })

  

}

export let retrieveClient = (filter) => {
    if (!filter) {
        console.log('retrieving without filters');
        return knex.select().table('clients');
    } else {
        console.log('retrieving with filters');
        return knex.from('clients').select('*').where({id: filter});
    }
}