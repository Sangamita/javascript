/*

var a = 10;
const pi = 3.145;
let area = 20;
console.log(a);
console.log(pi);
console.log(area);

// strings
let firstName = "Sabin";
let lastName = "Bajracharya";
console.log(firstName + " " + lastName)
console.log(`My name is ${firstName} ${lastName}`)

//strings method or functions
//length functions
console.log(lastName.length)
// trim functions
console.log(`      Hello      ${firstName}   `.trim().length);

console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

//split functions
console.log(`Hello my name is sabin`.split(" "));

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// numbers in javascripts
let example = 7.567;
console.log(typeof example);
let intNumber = parseInt(example);
console.log(intNumber)
console.log(parseFloat(example))

let number = '4.567';
console.log(parseInt(number))
console.log(parseFloat(number).toFixed(1))



let example1 = parseInt("22 and 33 Namaste");
let example2 = parseFloat('44 sabin 33');
let example3 = 44.567.toFixed(0)
let example4 = 100.0.toFixed(5)
console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);

console.log(typeof example1);
console.log(typeof example2);
console.log(typeof example3);
console.log(typeof example4);

*/

//boolean values
// let example1 = 1233;
// let example2 = false;

// console.log(Boolean(example1));

// let example1 = false;
// let example2 = true;
// let example3 = null;
// let example4 = undefined;
// let example5 = '';
// let example6 = NaN;
// let example7 = -5;
// let example8 = 0;

// console.log(Boolean(example1));
// console.log(Boolean(example2));
// console.log(Boolean(example3));
// console.log(Boolean(example4));
// console.log(Boolean(example5));
// console.log(Boolean(example6));
// console.log(Boolean(example7));
// console.log(Boolean(example8));


// let example = [1,4,2,6,7]
//console.log(example[4]);

//arrays functions
// example.push(99);
// console.log(example)
// console.log(example.pop())
// console.log(example);

// example.forEach((element) => {
// 	console.log(element);
// })


// console.log(`Length of array is ${example.length}`);

// let i = 1;
// example.forEach((x) => {
// 	console.log(`No ${i} is ${x}`);
// 	i = i+1;
// });

// let a = ["Sabin", 38, "M", 79];
// let b = a;

// // console.log(a);
// // console.log(b);

// let c = [...a]
// c.push("Engineer")

// console.log(a);
// console.log(b);
// console.log(c);

// let d = c.map(ele => {
// 	return ele;
// })

// console.log(`D array is ${d}`);


/*


//objects
let student = {
	firstName: "Sabin",
	lastName: "Bajracharya",
	age: 38,
	address: {
		city: "Amsterdam",
		state: "Netherlands"
	},
	cats : ['Milo', 'Giro']
};

console.log(student)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.address.city)
console.log(student.address.state)

console.log(Object.values(student))
console.log(student.cats[1])
*/
/*

let student = {
	firstName :  "Sabin",
	lastName :  "Bajracharya"
};

let student2 = student;

student2.age = 38;

console.log(student);

let student3 = Object.assign({},student2);

student3.email = "sabin@gmail.com";

console.log(`Student is ${student.firstName} ${student.lastName} ${student.age} ${student.email}`)
console.log(`Student2 is ${student2.firstName} ${student2.lastName} ${student2.age} ${student2.email}`)
console.log(`Student3 is ${student3.firstName} ${student3.lastName} ${student3.age} ${student3.email}`)

console.log(student)
console.log(student2)
console.log(student3)

*/

let num1 = 5 % 3;


console.log(num1);


