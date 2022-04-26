export const getClient = () => {
  console.log('create Client')
  let client;
  return client = client ?? {
    name: 'John Doe',
    date: new Date(),
    age: 30,
    address: {
      street: 'Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  };
};

// singleton getClient
export const getClients = (() => {
  let clients: any;
  return () => {
    clients = clients ?? {
      name: 'John Doe',
      date: new Date(),
      age: 30,
      address: {
        street: 'Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
    }
    return clients;
  };
})();

// export const getss = (a: number) => {
//
// };
// // export const getsss = (() => {})
//
// const a = ((aa)=>{})('z');
// // a(2)
// // (console.log('11'))()
// getss(1)
// getClients();
//
// let newVar = (((function (a) {
//
// })));
// newVar(4)