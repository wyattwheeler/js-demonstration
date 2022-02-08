// JS can be interpreted in many different types (multi-paradigm), keep this in mind when reading the "code" presented below, as it may look different to some other nerd you know!

// This file creates ALOT of console spam, if you don't like it, feel free to comment it all and read through it that way, but it allows you to proof-test what I've written incase something gets updated, or I simply just didn't do it right.

// variables
// var, let, const
// var iInt; <-- creates a int, vars are in the global scope

// let, const <-- are not in the global scope
// let iage = 30 <-- creates a int of 30, which can be set to a different value

// const are variables which cannot be changed.

// variable lists
// floating point numbers exist in JS, but i won't utilize them in this file
// string, int which are numbers, boolean, null, undefined

const name = 'Wyatt'; // <-- Constant string with 5 characters spelling Wyatt, can now be referenced somewhere else.
const exage = 18; // <--- Constant int with the value 18
const isvirgin = true; // Constant bool telling everyone I am a virgin :)

const x = null; // nulled value, holds no value, technically an object but not actually :)
const y = undefined; // undefined value, holds no value but can be assigned a value.
let z; // init a value which is undefined by default, constants cannot be undefined by default.

// concatenation (big word, not hard)

console.log('Ny name is ' + name + ' and my age is ' + age); // <-- is old way of adding strings together, might recognize this from other languages

// '' are quotations, they make everything inside a string, `` are whatever the fuck these are, but they allow for concatenation :)
console.log(`My name is ${name} and my age is ${age}`); 

// both of these will output the same thing, one is cleaner than the other, you could also use .join but fuck all that noise let's be professional here.

// concatenation can also be done on strings, ex:

const agename = `My name is ${name} and my age is ${age}`;

console.log(agename); // <-- pretty cool stuff man! (hopefully you get what's happening here, as it's more basic that kindergarten)

// grabbing shit & stuff

const examplestring = "Hello";

console.log(examplestring.length); // will output number 5, as the length of the string is 5, could look at it as a 2D array

console.log(examplestring.toUpperCase()); // example of a method, look at it as a function

console.log(examplestring.substring(0, 5).toUpperCase()); // the ability to string methods, which is pretty fancy!

console.log(examplestring.split('')); // example of what an 2D array looks like

const tags = 'technology, deez, nekkalol, mybigfatnutz';

console.log(tags.split(', ')); // seperate strings to be displayed, can be used for google indexing and stuff!

// Arrays

/*Probably one of the most scariest parts of any programming, as it can be confusing. 

Look at strings as one-dimensional arrays

In JS, you cannot create more than 2D arrays, meaning you have a value of a variable, not a variable and the value.

But anways, a practical example of 3D arrays are to look at books!

Every book has multiple pages, every page has multiple words and every word holds multiple characters.

Basically, let's say a book has 500 pages, 1024 words per page, and 2904 characters per list of words.

It looks like this! [500][1024][2904]

Quite irrelevant to JS, but I mean it's neat to know.*/

const numbers = new Array(1,2,3,4,5); // implementation of constructor

console.log(numbers); // prints whole array.

const list = ['timmy', 'wh33zy', 'cigzag', 'bitchlessconnor'];

console.log(list); // prints whole array.

// let's select the first item from the array

console.log(list[0]); // <-- 0 is the starting position in an array, not 1

// let's add something new to the array

list[4] = 'jack'; // assign the 5th index of the array a variable.

console.log(list); // reprint, it should show jack in the 5th index.

// not every array is defined this way, for this we use the push method

list.push('pushedstring'); // <-- pushed to the end of the array, never the start.

console.log(list);

console.log(list.indexOf('timmy')); // <-- tell us the index position of timmy inside of the list array.

// objects!!!!!1111

const person = {
    firstName: 'Wyatt',
    lastName: 'Deez',
    age: 18,
    isVirgin: true,
    hobbies: ['programming', 'anime', 'alcoholism'],
    objectembed: {
        stringone: 'deez',
        stringtwo: 'deez2',
        stringthree: 'deez3'
    }
}

console.log(person);

console.log(person.firstName); // you can access stuff inside objects!

console.log(person.hobbies[1]); // let us access index 1 of array hobbies inside of object person!, should print out anime

console.log(person.objectembed.stringone); // grab string stringone of objectembed inside object person

// deconstructing an object

// the idea is too reverse what's done when creating an object, as you can see we've got the variables here defined first, the embedded object is deconstructed here aswell, and pointing it back to person, to ensure it grabs the right variables incase of multiple objects :)

// personally I don't see much use of deconstructing this way, especially because you'd have to deconstruct every single time if you defined multiple variables with the same names (done alot when not working in the global scope)
const { firstName, lastName, objectembed: { stringone }} = person;

console.log(firstName);

person.email = 'wyatt@gmail.com'; // <-- adds a new string to the object person

// reminder incase confusion, objects are not indexed, and do not work like arrays

console.log(person);

// object-arrays!!!!!!

// below is an example of an array with 3 objects
// you might just recognize this format as JSON, which is very similiar to this, because fuck you JSON
const example1 = [
    {
        id: 1, // id is a key, 1 is a value, important for json file reading.
        text: 'String example 1',
        idIsOne: true
    },
    {
        id: 2,
        text: 'String example 2',
        idIsOne: false
    },
    {
        id: 3,
        text: 'String example 3',
        idIsOne: true
    }
];

console.log(example1); // <-- print out whole array

console.log(example1[0].id); // prints out the ID of index 0, which is 1 as defined in the object-array above.

// let's format in JSON, then log it.
// important when sending stuff to servers n shitz
const example1JSON = JSON.stringify(example1);
console.log(example1JSON);

// LOOPS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// here we use for, let's decontruct this for practicality.
/*
For when variable i is less than or equal to 10, increment by 1.

let i = 0; defines the variable i at 0

i <= 10 is a conditional statement saying if i is less than or equal to 10

i++ increments the value

define variable i at 0, if i is less than or equal to 10 then increment i by 1

loops are important when iterating through arrays, etc

we can do stuff inside this everytime the loop gets ran once, we can send variables off to do other things, which is great!
*/
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`); // print the value of i in console, once it reaches 10 it will stop.
}

// while loops, oldstyle i don't use them.

// Define i with the value of 0, while i is less than or equal to 10, increment by 1 and log it.
// Effectively the same as the for loop above, just more work and opens up the ability to crash your website :(
let i = 0;
while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// looping through arrays, you can also do this with a for loop
// looks weird but this will loop through the text string of each subject and print it.
for(let i = 0; i < example1.length; i++) {
    console.log(example1[i].text);
}

// lets make this look a little more readable, and ultimately better.
// creates a variable of the object array, allowing you to access inside the array easily.
for(let examples of example1) {
    console.log(examples.text);
}

// high order array methods, this is starting to get confusing right?, dont sweat it you fucking pussy.

// wow looks it's another for loop, essentially
/* 
let's deconstruct it!

example1.forEach <-- a function to start a for loop on object-array example1
function(example) <-- pass through a variable to access inside the array
example.text <-- grabs the text variable inside of each object inside the example1 object array.
*/
example1.forEach(function(example) {
    console.log(example.text);
});

// it's time to do maps, they have a few key differences to objects. A main one being that maps are very literal, if you don't put anything inside it, nothing is in it, on a global scope there is no way to accidentally cross maps as there is a risk to do with objects.

// here's an example

// Here we are returning the array of texts (which are strings defined above), instead of putting just the text to the console, essentially it is mapping out the texts from the array to a new one, returning back to the constant example1Text allowing it to be read from other sources.
const example1Text = example1.map(function(example) {
    return example.text;
});

console.log(example1Text);

// let's use conditional statements on this, aka filtering.
// we will check over the idIsOne bool inside of the object array, and if it is true, return it to the constant and then print it.

const example1IsOne = example1.filter(function(example) {
    return example.idIsOne == true;
});

console.log(example1IsOne); // this will only show object 1 and 3, as they are the two objects which meet the condition.

// now join these together :)
// this allows us to print the texts inside the object-array, that only meet the conditions required.
const example1Joint = example1.filter(function(example) {
    return example.idIsOne == true;
}).map(function(example) {
    return example.text;
});

console.log(example1Joint);

// more conditionals

const doubleZ = 10; // define a variable with the value of 10

// === matches datatypes
// == does not, meaning u can match a string with a variable
if(doubleZ ===  10) { // if doubleZ is equal to 10 with the same datatype
    console.log(`x is ${doubleZ}`); // Log out the value of 10 to console
} else{ // if not
    console.log(`x is not 10`);; // Log out value is not 10.
}

const doubleY = 4;

if(doubleZ > 5 || doubleY === 4) {
    console.log('doubleZ is greater than 5 with the same datatype or doubleY is equal to 4')
}

// turnery operators

const turneryEx = 10;

// if turneryEx is greater than 10 THEN(?) set color to red, otherwise set to blue
const color = turneryEx > 10 ? 'red' : 'blue';

// the console should output color blue, because turneyEx is not greater than 10.
console.log(`turneyEx color is: ${color}`);

// switches

switch(color) {
    case 'red': { // if color is red
        // do something here
        break;
    }
    case 'blue': { // if color is blue
        // do something here
        break;
    }
    default: { // if color is not either
        // do something here.
        break;
    }
}

// functions

// addNumber is the function name, () are the parameters, allowing you to pass variables through it.

// here we have two parameters, which we can pass two variables through
// the = 1 beside both of these numbers are giving the parameters default values, incase you don't pass variables through them
function addNumbers(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

// we now need to call the function
addNumbers(); // we call without any parameters, the output will be 2 due to the default values assigned. Passing values will overwrite the default values

// generally we will recall the numbers and wrap the function in a console.log, but the example is there.

// arrow functions, made for keeping shit clean!

// basically, we've slimmed down the function above into one line, here the => does not represent any conditionals, instead it's just pointing the outcome of the variables and returning them, without the need of the return "function"
const addNumberArrow = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNumberArrow(5, 5)); // example of console log wrapping a function, referenced above.

// can be done with forEach loops which were referenced above.

// let's set values of variables inside a function, instead of returning.

// function Person, with three parameters assigned, which is a constructor
function Person(firstName, lastName, age, dob) {
    // instead of returning the last name that gets passed through, we can now set a variable using "this."
    this.firstName = firstName; // this grabs the variable passed into the function, and sets it
    this.lastName = lastName;
    this.age = age;
    this.dob = new Date(dob); // Here we can pass through a date object, which opens up functions to grab specific data.
    this.getBirthYear = function() { // let's create our own function for our dob!
        return this.dob.getFullYear();
    }
    this.getFullName = function() { //another function inside our constructor function
        return `${this.firstName} ${this.lastName}`; // This will spit out the full name of whatever person, if we did it below using person1, we'd use person1.getFullName() which would output Wyatt Deez
    }
}

// prototypes

// allows us to create methods from the object without having a massive object, both do the same thing, however prototypes will be inside the prototype object inside the object we've created.

Person.prototype.getProtoBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getProtoFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate the object

// Set a new variable, which now uses the constructor function to create an object based off the variables assigned to it.
// the idea of constructor functions is now we can assign multiple variables different values from the constructor, aka person2 = different values.
// Date values in JS go Month-Day-Year, because america i guess.
const person1 = new Person('Wyatt', 'Deez', 18, '11-16-2003');

/*
Date objects have functions for grabbing specific data, for example in the console.log below we are able to call person1.dob.getFullYear() which would spit out 2003 in the console.

With the example above, since we created a new function which is the same as getFullYear, we can call person1.getFullYear() which will also output 2003.
*/

// we can now log out the object we just created with the constructor function.
console.log(person1);

// classes, new from JS2015 onwards, does the same thing as what we've put above, but looks alot cleaner

class PersonClass { // Here we defined the class
    constructor(firstName, lastName, age, dob) { // here we construct our object, with parameters to pass through values
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = new Date(dob);
    }

    // These two functions does the same as the functions above
    getClassFullYear() {
        return this.dob.getFullYear();
    }

    getClassFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// We call on it and pass through values the same exact way
const personclass1 = new PersonClass('John', 'Nutz', '21', '12-12-2000');

// And here we log it the exact sam way, allows it do be ALOT cleaner.
console.log(personclass1.getClassFullName());

