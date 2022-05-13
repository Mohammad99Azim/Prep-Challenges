'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    // write your code here
  if(int1 <= 0 ){
    return[int1];
  }else{
    let numbers = recursionPattern(int1 - int2, int2);
    numbers.push(int1);
    numbers.unshift(int1);
    return numbers;
  }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
   // write your code here
   let arr = str.split('"');
   let xx = arr[1].indexOf("www");
   return  arr[1].slice(xx);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    str = str.toLowerCase();
    str = str.replace(/[^A-Za-z0-9]/gi,'');

  if( str.length % 2 !== 0){
    let  xx = Math.floor(str.length/2)
    str = str.replace(str[xx],'');
  }
      let half = str.length/2;
      let firtH =""
      let lastH = str.slice(half);
  
      for(let i = half - 1; i >= 0 ; i-- ){
        firtH += str[i];
      }
   return (firtH === lastH ? true : false);
 
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here

  if( str.length % 2 !== 0){
    let  xx = Math.floor(str.length/2)
    str = str.replace(str[xx],'');
  }

  if( arr.length % 2 !== 0){
    let  arar = Math.floor(arr.length/2)
    arr.splice(arar,1)
  }
  
      let strHalf = str.length/2;
      let arrHalf = arr.length/2;

      let firtHstr ="";
      let lastHstr = str.slice(strHalf);

      let firstHarr = []
      let lastHarr = arr.slice(arrHalf);
  
      for(let i = strHalf - 1; i >= 0 ; i-- ){
        firtHstr += str[i];
      }

      for(let x = arrHalf - 1 ; x >=0; x--){
        firstHarr.push(arr[x]);
      }

      firstHarr = firstHarr.toString("");
      lastHarr = lastHarr.toString("");

      if(firtHstr == lastHstr && firstHarr ==  lastHarr ){
        return true;
      }else if(firtHstr !== lastHstr && firstHarr !==  lastHarr) {
        return true;
      }else{
        return false;
      }
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };