import {getClient, getClients} from './client';

setInterval(() => {
    let client = getClients();
    console.log('-22-', client);
}, 1000);
