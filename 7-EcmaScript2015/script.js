// Lecture: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
*/
// ES6
/*
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); //Uncaught TypeError: Assignment to constant variable.
*/

//Constants are immutable in ES6

//Variables declared with var in ES5 are function scoped.
//But Variables declare with let and const in ES6 are block scoped.
  //A block scope is any code wrapped in between curly braces({ }).

// ES5
/*
function driversLicense5(passedTest) {
  if (passedTest) {
    //console.log(firstName) //undefined
    var firstName = 'John';
    var yearOfBirth = 1990;
    //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);
*/
//ES6
/*
function driversLicense6(passedTest) {

  //console.log(firstName); //Uncaught ReferenceError: firstName is not defined(...)
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
    const yearOfBirth = 1990;
  //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);
*/
// var versus let
//the value of 23 will be overwritten
/*
var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
//Will print
//0
//1
//2
//3
//4
//5
*/

//both 'i' are seperate variables, because let is block scoped
/*
let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
//Will print:
//0
//1
//2
//3
//4
//23
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
*/
//console.log(a + b); //Uncaught ReferenceError: a is not defined
//console.log(c); //prints 3 - var declerations are not block scoped, they are function scoped.

// ES5
/*
(function() {
  var c = 3;
})();
*/
//console.log(c); //Uncaught ReferenceError: c is not defined

////////////////////////////////////////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calculateAge(year) {
  return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old.');

// ES6
//Template literal
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('th')); //true
console.log(n.includes(' ')); //true
console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)); //John John John John John
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1927];

// ES5
var ages5 = years.map(function(el) {
  return 2017 - el;
})
console.log(ages5); // [26, 51, 34, 89]

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6); // [26, 51, 34, 89]

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`)
console.log(ages6); // ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 89."]

ages6 = years.map((el,  index) =>{
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions 2

//Arrow functions do not receive their own this keyword. They simply use the this keyword of the function they are written in, and so we say they have a lexical this variable.
/*
// ES5
// We declare self as a workaround that points to this, so that we can use it in the rest of the function...
// because inside the function we don't have access to the box5 object
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function(){
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}
//box5.clickMe();
*/
/*
// ES6
//the function within box6 shares the this keyword with it's surrounding box6 function (this points to box6)
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
//box6.clickMe();
*/

/*
const box66 = {
  color: 'green',
  position: 1,
  clickMe => () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box66.clickMe();
*/

/*
function Person(name) {
  this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/
//["John is friends with Bob", "John is friends with Jane", "John is friends with Mark"]
/*
// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`
  );
  console.log(arr);
}

new Person('Mike').myFriends6(friends);

//["Mike is friends with Bob", "Mike is friends with Jane", "Mike is friends with Mark"]
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Destructuring
/*
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/
/*
// ES6
const [name, age] = ['John', 26];
console.log(name); //John
console.log(age); //26

//Destructuring with an object
const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName); //John
console.log(lastName); //Smith

const {firstName: a, lastName: b} = obj;
console.log(a); //John
console.log(b); //Smith

//Destructuring with a function
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2); //27
console.log(retirement); //38
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrays

//const boxes = document.querySelectorAll('.box');

/*
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});
*/
/*
// ES6
const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//alternate
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
/*
// ES5
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    //continue;
    break;
  }

  boxesArr5[i].textContent = 'I changed to blue!'
}
*/
/*
// ES6
for (const cur of boxesArr6) {
  if (cur.className === 'box blue') {
    //another option: if (cur.className.includes('blue'))
    continue;
  }
  cur.textContent = 'I changed to blue';
}
*
/*
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true)); //3
console.log(ages[full.indexOf(true)]); //21
*/
/*
//ES6
console.log(ages.findIndex(cur => cur >= 18)); //3
console.log(ages.find(cur => cur >= 18)); //21
*/

////////////////////////////////////////////////////////////////////////////////
//Lecture: Spread operator
/*
function addFourAges(a, b, c, d, e) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); //81

// ES5
var ages = [18, 20, 12, 31];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); //81
*/
/*
// ES6
const sum3 = addFourAges(...ages);
//... means to expand an array into it's components
console.log(sum3); //81

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily); //["John", "Jane", "Mark", "Mary", "Bob", "Ann"]


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

////////////////////////////////////////////////////////////////////////////////
//Lecture: Rest parameters
/*
// ES5
function isFullAge5() {
  //console.log(arguments); //[1990, 1999, 1965]
  //arguments is a special JS variable that we have access to in all functions
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2017 - cur) >= 18);
  })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1956, 2017, 1987);
*/
/*
// ES6
function isFullAge6(...years) {
  //console.log(years);
  years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
*/
/*
// ES5
function isFullAge5(limit) {
  //console.log(arguments); //[1990, 1999, 1965]
  //arguments is a special JS variable that we have access to in all functions
  var argsArr = Array.prototype.slice.call(arguments, 1);
  console.log(argsArr);
  argsArr.forEach(function(cur) {
    console.log((2017 - cur) >= limit);
  })
}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1956, 2017, 1987);
*/
/*
// ES6
function isFullAge6(limit, ...years) {
  //console.log(years);
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2017, 1987);
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Default parameters
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'American' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
*/
/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size) //8 //length of entire map

//question.delete(4);

if(question.has(4)) {
  //question.delete(4);
  //console.log('Answer 4 is here');
}

//question.clear(); //empties the map

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
  //console.log(`This is ${key}, and it's set to ${value}`);
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

//Maps
  //We can use anything as keys, which opens a lot of possibilities
  //Maps are iterable making them easy to loop through, and manipulate data with them
  //It's really easy to get the size of a map using the size property
  //We can easily add and remove data from a map
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
*/
/*
//ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes and subclasses
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/
/*
// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 5

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: numbers of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has no more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}


function reportParks(p) {
    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}


function reportStreets(s) {
    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
