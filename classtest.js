// 1write a code where it calculates the length of a given array
// solution
// const arr = [1,2,3,4,5,6,7,8];
// let coUnt = 0;
// for (let i =0; i< arr.length; i++){
//     coUnt++;
//     count = count +1 
//     count += count
// } alert("the elements in arrays are total =" +  coUnt);
// or this new method
// for(const item in arr){
//     coUnt++
// }alert("the elements in arrays are total =" + coUnt)
// //or
// const ar = [1,2,3,4,5,6,7,8];
// let c0unt = 0;
// for(const item in ar){c0unt++;
// }console.log(coUnt)

// 2for a given array [1,3,'a','b','f','a'] calculate how many times 'a' has appeared. tell the count of 'a'
// Solution
// const calculateA = ["a", 2, 4, "b", "a"];
// let count = 0;
// for (let i = 0; i < calculateA.length; i++){
// if(calculateA[i] === 'a') {
//     count++;
// }
// } 
// console.log("a appeared in " , count, "times")
// 3for a given array find out if there is any element which is Number
// Solution
// const checkNum = ["a", 2, 4,"b","c",5,6,"d",7,8]
// let count1 = 0;
// for (let i = 0; i < checkNum.length; i++){
//     if (typeof checkNum[i] === "number"){
//         count1++
//     }
// }if (count > 0) console.log("the given array has number", count1)
// else console.log("no number in array")
// console.log()
// 4print all names in the given list of students and greet 
// then "Good Morning Name"(Name is dynamic here)
// Solution
// var _name = ["shazme", "musarrat","anusha","sawera","farisha"];
// var greet = ["Good Morning"];
// for(i = 0; i < _name.length; i++){
// console.log(greet + " " + _name[i])
// }
// // or
// var names = ["shazme", "musarrat","anusha","sawera","farisha"];
// for(i = 0; i < names.length; i++){
//     console.log("Good Noon" + " " + names[ i])
// } 
// 5 "for a given number array. add all the elements and show the count [2,6,1]output:9"
// Solution
// let _count = [1,5,3];
// var sum = 0;
// for(i = 0; i < _count.length; i++){
//     sum += _count[i];
// }console.log("output value is", sum);

// 6 "make array of prices of shampoo, soap, and facewash. now increase every price is 10%"
// Solution

//  var price = [500,220,350];
//  console.log("original price", price);
//  for(i = 0; i < price.length; i++){
//      var percnt = price[i] * 0.1;
//      price[i] = percnt + price[i] ;
//  } console.log("after increase 10 %", price);
// 7 take a temperature from user. if the temperature is 25 or greater then print "its too hot".
//  if temperature is less than 15 then print "its cold" and if temperature is 0 or less than zero
//  then print "its freezing" 
//  Solution

//  var temp = +prompt("Enter the temperature value");
//  if(temp >= 25){
//     console.log("It's too hot")
//  } else if (temp < 15 && temp > 0){
//     console.log("It's cold")}
//     else if (temp <= 0){
//     console.log("It's freezing")} 
//     else (console.log("Normal temperature"));
