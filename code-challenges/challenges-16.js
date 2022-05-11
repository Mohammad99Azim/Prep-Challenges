'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    let revStr ="";
     for(let i = string.length-1 ; i >= 0 ; i--){
         revStr += string[i];
    }
    return revStr;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let resArr = [];
    for(let i=0 ; arr.length > i; i++){
    let sliceIt = arr[i].slice(' ');
    if(sliceIt.includes("^_^")){
        resArr.push(arr[i]);
    }
    }
    return resArr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let strRes ="";
    for(let i=0 ; str.length > i; i++){  
        if(i%2 == 0){
            strRes += str[i];
        }else{
            continue;
        }
        }
        return strRes;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    let resArr = [];
    for(let i=0 ; arr.length > i; i++){
    for(let x=0 ; arr[i].length > x ; x++){

        let sliceIt = arr[i][x].slice(' ');
        if(sliceIt.includes("chicken")){
            resArr.push([arr[i][x]]);
        }
    }
    }
    return resArr;
}


// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
