'use strict';

const { fullName } = require("./challenges-11");

// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//  
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output:
// [89, 41, 31, 111, 31]
// 

const oddFiltration = (arr) => {
        // write your code here
        let oddArr = arr.filter(num => num % 2 != 0);
        return oddArr;
    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// optional:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvsFiltration = (arr) => {
        // write your code here
        function myCv(cv) {

            if (cv.tech == "JS" && cv.yearsOfExperience > 4) {
                return cv;
            }
        }


        function fullNameFinder(first, last) {
            let fullName = "";
            if (first == null) {
                fullName = last;
            } else if (last == null) {
                fullName = firts;
            } else {
                fullName = `${first} ${last}`;
            }
            return fullName;
        }



        let cvArr = arr.filter(myCv);

        let results = cvArr.map(({ firstName, LastName }) => ({
                'fullName': fullNameFinder(firstName, LastName),
                'tech': 'JS'
            })

        );
        return results;


    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// optional:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

const vowelsFiltration = (arr) => {
        // write your code here

        function rmVowels(word) {
            let regex = /[aeiou]/gi;
            let test = regex.test(word);
            if (!test) {
                return word;
            }
        }

        let filterArr = arr.filter(rmVowels);
        return filterArr;
    }
    // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// Input:
// first_Employee = [C, C#, Java, Angular, PHP]
// sec_Employee = [C#, .Net, JavaScript, React, Angular]

// Output:
// result = [C, Java, PHP, .Net, JavaScript, React]

// Hint:
// - the 'include' method can help you, read about it.

const skillComparison = (arr1, arr2) => {
        // write your code here

        let Skills1 = arr1.filter(ind => !(arr2.includes(ind)));
        let Skills2 = arr2.filter(ind => !(arr1.includes(ind)));

        let skills = Skills1.concat(Skills2);


        return skills;
    }
    // -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };