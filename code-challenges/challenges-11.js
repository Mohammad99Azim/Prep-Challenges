'use strict';

// Important Note:
// Kindly use map loop instead of for in all of your solutions

// Resource:
// Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use map to calculate the square of the values.
//  
// Input: [ 2, 8, 3, 5 ]
// Output: [ 4, 64, 9, 25 ]
// 

function square(arr) {
    // write your code here
    let map1 = arr.map(x => x * x);
    return map1;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given an array of objects of students' first and last name, use the map to return an array off students' full names.
//
// note: the full names should be combined between student's first and last names.
//
// Input:
// [
//     {
//         firstName: 'Adam',
//         lastName: 'Anderson',
//     },
//     {
//         firstName: 'Ben',
//         lastName: 'Zeller',
//     }, 
//     {
//         firstName: 'Peter',
//         lastName: 'Mccord',
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Sagar',
//     },
//     {
//         firstName: 'Nathan',
//         lastName: 'Weiss',
//     }
// ]
//
// Output: ['Adam Anderson', 'Ben Zeller', 'Peter Mccord', 'Fred Sagar', 'Nathan Weiss']

function fullName(arr) {
    // write your code here
    let map = arr.map(x => `${x.firstName} ${x.lastName}`);
    return map;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// optional:

// Given an array of objects use map to calculate the average of the grades 
// and return an array of the objects with a new property called avg (that represent the average of the grades).
//  

// Input:
// var students = [
// 	{
// 			firstName: 'Adam',
//          lastName: 'Anderson',
// 			gradsList: [20, 50, 13, 11, 2, 45, 60, 29]
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20, 10, 11, 11, 2, 5, 3, 2]
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62, 50, 80, 90, 39, 45, 60, 50]
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20, 10, 18, 11, 2, 20, 3, 10]
// }
// ]
//
// Output:
// [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
//]
// -------------
function gradesAvg(arr) {

    function averageGet(arre) {
        let summs = 0;
        for (let i = 0; i < arre.length; i++) {
            summs += arre[i];
        }
        return summs / arre.length;
    }

    const reformattedArray = arr.map(({ firstName, lastName, gradsList }) =>

        ({
            'firstName': firstName,
            'lastName': lastName,
            'gradsList': gradsList,
            'avg': averageGet(gradsList)
        })

    );

    return reformattedArray;

}

// const kvArray = [{ key: 1, value: 10 }, 
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }];

// const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Using the previous function result, determine if the student pass or failed,
// and return the array of the objects with a new property called result (with Passed or Failed) 
//
// Note: if his/her avg equal or above 50 the result will be Passed, and Failed if it's less than that

// Input:
// var students = [
// 	{
// 			firstName: 'Adam',
//          lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//          lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//          lastName: 'Mccord',
// 	        gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//          lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//          avg: 11.75
// 	}
//]
// 
// Output:
// [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75,
//      result: 'Failed'
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8,
//      result: 'Failed'
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5,
//      result: 'Passed'
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75,
//      result: 'Failed'
// 	}
// ]

function studentsResult(arr) {

    function isPassed(avg) {
        if (avg >= 50) {
            return 'Passed';
        } else {
            return 'Failed';
        }
    }

    const reformattedArray = arr.map(({ firstName, lastName, gradsList, avg }) =>

        ({
            'firstName': firstName,
            'lastName': lastName,
            'gradsList': gradsList,
            'avg': avg,
            'result': isPassed(avg)

        })

    );

    return reformattedArray;


}
// -------------------------------------------------------------------------------------------------------

module.exports = { square, fullName, gradesAvg, studentsResult };