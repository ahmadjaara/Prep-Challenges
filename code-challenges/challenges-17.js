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
    n=int1;
    if(n=int1){
        return;
        
    }
    else if(n>0) {
       n=n-int2
       recursionPattern((n),int2)
    }
    else if (n<0){
        n=n+int2
        recursionPattern((n),int2) 
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
let text ="<a href=http://www.hackerrank.com><h1><b>HackerRank</b></h1></a>";

const filterLinks = (str) => {
    // write your code here
    let arr = [];
    let search=/(www)\.+[A-Z a-z.]+\.+((com)|(org)|(net))/g

    arr=text.match(search)===null ? []: text.match(search) ;  
    return arr.toString(" ");
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

let s = "A man, a plan, a canal: Panama"
let test1 = "A man, a plan, a canal: Panama";
let test2 = "race a car";
let test3 = " ";
let test4 = "f";  
const isPalindrome = (str) => {
    // write your code here
    const regex = /[^A-Za-z]/g
    const newStr = str.replace(regex, "").toLowerCase();
    const revStr = newStr.split("").reverse().join("");
    // console.log(revStr);
    // console.log(newStr);
    if (newStr==revStr){
        return true;
    }
    else{
        return false;
    }
  

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
}
// -------------------------------------------------------------------------------------------------------


//module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };