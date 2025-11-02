let fruits: string[] = ['apple', 'banana', 'orange'];
console.log(fruits); 
console.log(fruits[0]); 
fruits.push('grape'); // Add an element to the end of the array console.log(fruits);
console.log(fruits.length); 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log(fruits. indexOf('banana'));
console.log(fruits.includes('pear')); 
console.log(fruits.unshift('kiwi'));
console.log(fruits.shift());
console.log(fruits.pop());
console.log(fruits.reverse());
console.log(fruits.sort());

let users = [
    { name: 'John', age: 25,email:'john@example.com' },
    { name: 'Alice', age: 30,email:'alice@example.com' },
    { name: 'Bob', age: 28,email:'bob@example.com' }
];
for(let user of users){
    console.log(user.name,user.age,user.email);
}

let user = users.find((user) => user.name === 'Alice');
const year = user?.age

let filteredUsers = users.filter((user) => user.age > 27);
console.log(filteredUsers);
filteredUsers[0].age=40;
