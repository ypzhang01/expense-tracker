// const person = {
//     name: 'Jason',
//     age: 20,
//     location: {
//         city: 'Melbourne',
//         temp: 9
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

//array destructure

// const address = ['6/832', 'Blackburn Rd', 'Clayton', '3168'];
// const [, street, suburb, postcode] = address;
// console.log(`You are in ${street} ${suburb}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [name, , medium, , ] = item;
console.log(name, medium)