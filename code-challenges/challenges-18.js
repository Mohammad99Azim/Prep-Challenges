'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let arr = str.split(" ");
    return (arr[Math.floor(arr.length /2) ].length);
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    str1 = str1.split("");
    str2 = str2.split("");
    str1.sort();
    str2.sort();

    let arr1 = [];
    for (let i = 0; i < str1.length; i++) {
         if(!str1.includes(arr1[i])){
            arr1.push(str1[i]);
         }
    }

    let arr2=[];
    for (let i = 0; i < str2.length; i++) {
        if(!str2.includes(arr2[i])){
            arr2.push(str2[i]);
         }
    }

    if(arr1.length !== arr2.length ){
        return false;
    }else{
        for (let x = 0; x < arr2.length; x++) {
            if( arr2[x] !== arr1[x]){
                return false;
            }
            
        }
    }
    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == int){
            return i;
        }else if( arr[i] > int){
            return i;
        }else if( i == (arr.length -1) ){
            return arr.length;
        }
    }

}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };