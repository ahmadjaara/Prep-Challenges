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
let arr="You can't handle the truth!";
let arr0="You're gonna need a bigger boat";
const wordLength = (str) => {
    // write your code here
    let newarr=str.split(" ");
    // console.log(newarr.length);
    let a="";
    if (newarr.length%2==0){
        a=newarr[newarr.length/2].length;

    }
    else{
        a=newarr[(newarr.length-1)/2].length;  
    }
    // console.log(a);
    return a;

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
let str0="cat";
let str1="rat";
let str2="table"; 
let str3="label";
let str4="dad";
let str5="add";
const wordLetters = (str1, str2) => {
    // write your code here
    if (str1.length!=str2.length) return false
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) <= -1) return false;
    }
    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) <= -1) return false;
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
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };