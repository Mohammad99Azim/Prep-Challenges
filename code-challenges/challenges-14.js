'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
        // write your code here
        let ind = str.lastIndexOf(' ');
        let arr = "";
        if (ind == -1) {
            arr = str.slice(0);
        } else {
            arr = str.slice(ind + 1);
        }
        return arr;
    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
        // write your code here
        let arr = str.split(" ");
        return arr[arr.length - 1];
    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
        // write your code here
        str = str.split(" ");

        if (str.indexOf('I') >= 0) {
            let ind = str.indexOf("I");
            str.splice(ind, 1, "We");
        }
        if (str.indexOf('am') >= 0) {
            let ind = str.indexOf("am");
            str.splice(ind, 1, "are");
        }
        if (str.indexOf('was') >= 0) {
            let ind = str.indexOf("was");
            str.splice(ind, 1, "were");
        }
        return str.join(" ");
    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
        // write your code here
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            if (i == 4) {

                str += " " + arr[i] + ",";

            } else if (i == 0) {
                str += arr[i];
            } else {
                str += " " + arr[i];
            }
        }
        return str;

    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
        // write your code here
        let current = "";
        let counter = 0;
        let resultStr = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                resultStr += " ";
                continue;
            }
            if (i == 0) {
                current = str[i];
                counter++;
                if (str[i + 1] != current) {
                    resultStr += `${str[i]}${counter}`
                    counter = 0;
                }
            } else {
                if (counter > 0) {
                    if (str[i + 1] != current) {
                        counter++;
                        resultStr += `${str[i]}${counter}`;
                        counter = 0;
                    } else {
                        counter++;
                    }
                } else {
                    current = str[i];
                    if (str[i + 1] != current) {
                        counter++;
                        resultStr += `${str[i]}${counter}`
                        counter = 0;
                    } else {
                        counter++;
                    }
                }
            }
        }
        return resultStr;
    }
    // -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };