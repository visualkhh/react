import {getClient, getClients} from './client';

// setInterval(() => {
//     let client = getClients();
//     console.log('-22-', client);
// }, 1000);


const test = <T>(param: T, property: keyof T) => {
    console.log(param[property])
}


type AType = {
    a: string
}
// type AType = {
//     [key: string]: string;
// }


const a: AType = {
    a: 'a33333'
}

test(a, 'a');


