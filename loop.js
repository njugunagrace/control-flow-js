// Write a function that accepts an array of strings and console.logs each element using a for loop.

function myStrings(arr){
for(let x= 0; x< arr.length;x++){
    console.log(arr[x]); 
}
  
}
let arr = ["Grace","Wambui","Kenya","Uganda"];
console.log(myStrings(arr));

// a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function numbers(nums){
   nums.forEach(num => {console.log(num * 2)});


}
let nums = [23,4,5,24,17];
console.log(numbers(nums));


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
let numerics = [23,6,5,9,10,5,7,20];
function newArray(arr) {
    let empty = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < 4) {
        empty.push(arr[i] * 8);
      } else if (i >= arr.length - 2) {
        empty.push(arr[i] + 5);}
 
    }
    console.log(empty);
  }
 
  console.log(newArray(numerics));



// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function numbs(arr){
    let x = 0;
while(x <arr.length){
    if(x===4){
        break
    }
    console.log(x);
    x++;
}
}
console.log(numbs(arrNum))




// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi'];
function myArray(fruits){
for(let i = 0; i<fruits.length;i++){
  if(i===1){
      continue
  }
  console.log({ "continue":i})

}
}
myArray(fruits)

