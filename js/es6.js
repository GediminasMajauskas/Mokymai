const users = [
    { name: 'Jonas', isActive: true },
    { name: 'Ona', isActive: false },
    { name: 'Petras', isActive: true }
  ];
//   const aktyvusUserNames = users =>
//     users
//       .filter(user => user.isActive)
//       .map(user => user.name);
      
// console.log(aktyvusUserNames(users));

console.log('________________________________')

const usersID = users =>
    users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
const usersById = usersID(users);

console.log(usersById);

const user = {
    id: 7,
    name: 'Gabija',
    city: 'Vilnius',
    age: 28,
    isActive: true,
    email: 'gabija@example.com'
  };
  
  const userInfo = `
ID: ${user.id}
Vardas: ${user.name}
Miestas: ${user.city}
Amžius: ${user.age}
Aktyvus: ${user.isActive ? 'Taip' : 'Ne'}
El. paštas: ${user.email}
  `;
  
  console.log(userInfo);


let message2 = `printinam`
console.log(message2)

console.log(`4 + 5 = ${4 + 5}`);


//pirmas objekta//
let userInfos = {
    vardas: 'Petras' ,
    pavarde: 'Petraitis',
}
//antras objektas//
let userVieta = {
    miestas: 'Vilnius',
    gatve: 'Antakalnis'
}
const abuUser = {
    ...userInfos,
    ...userVieta
}
console.log(abuUser)

console.log('Parašyk funkciją, kuri išskaido argumentus su rest operatoriumi ir grąžina jų vidurkį')

function funk(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(funk(1, 2));
console.log(funk(5, 8, 2));
console.log(funk(14, 29));

console.log('???????????????????????')

function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');


//sukurk Map struktūrą naudotojams, kuri leidžia greitai pasiekti naudotoją pagal ID.

let users1 = [
    { id: 1, name: "Aistė" },
    { id: 2, name: "Jonas" },
    { id: 3, name: "Gabija" }
  ];
  // Naujas Map, kur ID yra raktas, o naudotojs reikšmė
  const userMap = new Map();

users1.forEach(user => {
  userMap.set(user.id, user);
})  

const user2 = userMap.get(1);
console.log(user2);

console.log('------------------------')

//pasalinu pasikartojanciu skaicius

const numbers = [1, 2, 2, 3, 6, 7, 4, 4, 5, 1, 7, 6 ];

// Naudojame Set, kad pašalintume ( istrina) pasikartojančius skaičius
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

console.log('------------------------')

const user3 = {
    name: "Aistė",
    age: 28,
    city: "Vilnius",
    job: "Dizainerė"
  };
  function showUserInfo({ name, age }) {
    console.log(`Vardas: ${name}, Amžius: ${age}`);
  }

  showUserInfo(user);


let employee_details = ["Rohit", 1211, "Software Engineer"];


let getDetails = ([name_of_an_employee, employee_id, employee_designation]) => {
  console.log(
    `Employee's name : ${name_of_an_employee} , Employee's ID: ${employee_id}, Employee's Designation: ${employee_designation}`
  );
};

getDetails(employee_details);

console.log('------------------------')

const emp = ['Rohit', 1211, 'Software Engineer'];


function getDetails1([ , id, designation]){
    console.log(`Employee ID: ${id}, Designation: ${designation}`);
 }

 getDetails1(emp);

 console.log('------------------------')

 async function waitOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return "Baigta";
  }
  
 
  waitOneSecond().then(result => console.log(result));
