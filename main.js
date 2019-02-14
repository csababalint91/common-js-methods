const fruits = ["apple", "banana", "mango"];

//add an element to the end of the array
fruits.push("orange");
console.log(fruits);

//removes element from the end of the array and returns the element
console.log(fruits.pop());
console.log(fruits);


//link arrays
const fruits2 = ["pear", "cherry"];
console.log(fruits.concat(fruits2));
console.log(fruits2);

//joins all the elements in an array to crate a string
console.log(fruits.join("+"));
console.log(fruits);

//reverses the element in the array
console.log(fruits.reverse());
console.log(fruits);

//removes the first element in the array and returnes the element
console.log(fruits.shift());
console.log(fruits);

//ads a new element to the array and returnes the modified array
console.log(fruits.unshift("berry"));
console.log(fruits);

//extracts a section of a string and returns it as a new string
console.log(fruits.slice(1,2));
console.log(fruits);

//sorts the elements of an array
console.log(fruits.sort());

fruits.push("apricot");
fruits.push("fig");
console.log(fruits.sort());

//sort numbers
const arr = ["4","2100","1000", "0111", "788", "522"];
console.log(arr);
console.log(arr);
console.log(arr.sort());

/*changes the contents of an array by removing
 or replacing existing elements and/or adding new ones*/
console.log(fruits);
console.log(fruits.splice(2,2, "pineapple","coconut"));
console.log(fruits);