// ## 9 Assume we have 10 US dollars & 25 Saudi Riyals.Write a script to  convert the total currency
//  to Pakistani Rupees.Perform all calculations in a single expression. 
//  (Exchange rates : 1 US Dollar = 163 Pakistani Rupee and 1 Saudi Riyal = 43 Pakistani Rupee)
// Solution
//var dollars = 10*163;
//var riyals = 25*43;
//var pakRs= dollars+riyals;
//var result =(pakRs);
  //  console.log("your amount converted into Pak.Rs/  = ", result)

//   ## 10 What will be the output in variables a, b & result after execution of the following 
//   script: var a = 2, b = 1;  var result = --a - --b + ++b + b--;  Explain the output at each 
//   stage:  --a;  --a - --b;  --a - --b + ++b;  --a - --b + ++b + b--;  
//Solution
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// //             1  - 0  +  1  + 1
// console.log(result);
//Stages
//1  --a; 
//     1
//2   --a - --b; 
//      1  -  0
//3   --a - --b + ++b;
//     1 -   0  +  1
//4   --a - --b + ++b + b--;
//      1 - 0   + 1   + 1