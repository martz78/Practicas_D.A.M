//METODO FILTER//

const users = [
  {
    name: "Karla",
    age: 15,
  },
  {
    name: "María",
    age: 21,
  },
  {
    name: "Pedro",
    age: 33,
  },
  {
    name: "carlos",
    age: 16,
  },
  {
    name: "Karen",
    age: 38,
  },
];

const userGreaterThan18 = users.filter(user => user.age > 18);

console.log(userGreaterThan18);
/*
[
  { name: 'María', age: 21 },
  { name: 'Pedro', age: 33 },
  { name: 'Karen', age: 38 }
]
*/