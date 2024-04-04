//takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
 function manipulateArray(array){
    const firstFour = array.slice(0,4).map(item =>item*item);
    const lastTwo = array.slice(-2).map(item =>item +10);
    const newArray = firstFour.concat(lastTwo);
    console.log(newArray)
 }
 manipulateArray([10,5,2,12,30,15,18,20,21,28])

 //akes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

 function myloop(arr){
    let index = 0;
    while(index< arr.length){
        if(arr[index]===arr[3]){
        break;
        }
        index++;
    }
  
    // index++;
 }
 
 let arrNum = [1,2,3,4,5,6,7,8,9]
 console.log(arrNum);
 

//a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

function myfruits(fruits){
    for(let i =0;i<fruits.length;i++){
        if(i===2)
            continue;
        
    }
return fruits
}

let fruits=["apple","plum","banana","strawberries","kiwi"]
console.log(myfruits(fruits));

//a function that accepts an array of strings and console.logs each element using a for loop.
function logArray(arr1){
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}
}
let names = ["Gitahi","Otieno","Wasike","Tendai"]
logArray(names)
 
// function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
function myReversed(string){
    let myReversed = "";
    let c = string.length-1;
    while (c>=0){
        myReversed+=string[c],c--;
        
    }
    return myReversed;

}
let myString = "Mwangi"
let newString = myReversed(myString)
console.log(newString)
