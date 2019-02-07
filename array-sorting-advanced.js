// Sort students by name (ascending)
// If students have same name, sort them by age (descending)


// students is an array of objects
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function (a, b) {
  var nameA = a.name; // stores the name os student a
  var nameB = b.name; // stores the name of student b

  if (nameA < nameB) { // if sort(function(a, b)) is less than 0
    return -1; // sort a to an index lower than b
    }

  if (nameA > nameB) { // is greater than 0
    return 1;  // sort b to an index lower than a
  }

  if (nameA === nameB) { // if a is equal to b
    return b.age - a.age; // sort them descending based on age key(property)
}

});

console.log(students);