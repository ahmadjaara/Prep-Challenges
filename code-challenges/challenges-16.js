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
let string ="Hello";
const reverseString = (string) => {
    //write your code here ...
    let newstring="";
    for (let i=string.length-1;i>=0;i--){
        newstring+=string[i]
        
    }
    return newstring;
    // return string.split("").reverse().join("");
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
let input12 =["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"];
const detectFace = (arr) => {
    //write your code here ...
    let newarray=[];
    let j=0;
    arr.forEach(function(element,index) {
        let position=0;
        position = element.search(/\^_\^/);
        if (position != -1){
            newarray[j]=element;
            j++;

        }
        
    });
    return newarray;

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
let yu="coding";
const eveCharacter = (str) => {
    //write your code here ...
    let arr =[];
    let j=0;
   let y= str.split("");
    y.forEach((ele,ind)=>{
        if(ind%2==0){
            arr[j]=ele;
            j++
        }
    })
    return arr.join("");
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

let arr2=[["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
const chickenGradients = (arr) => {
    //write your code here ...
    let newarr=[];
    let j =0;
    arr.forEach(elem=>{
        elem.forEach(ele =>{
            if(ele.search(/chicken/)!=-1){
                newarr[j]=[ele];
                j++;
            }
        });
        
    })
    return newarr;
}
// -------------------------------------------------------------------------------------------------------

 module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
