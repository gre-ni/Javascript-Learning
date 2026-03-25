const users = [{id:1,name:"Alice"},{id:2,name:"Bob"}];
const user = users.find(u => u.id === 2);
console.log(user.name);


const isIn = users.includes(user => user.name === 'Bob')
console.log(isIn)