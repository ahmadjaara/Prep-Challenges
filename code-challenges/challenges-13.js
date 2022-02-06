'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
var voters = [
    {
        voter_Name: "Adam Scott",
        votes_To: "James",
    },
    {
        voter_Name: "Abril Blake",
        votes_To: "Jade",
    },
    {
        voter_Name: "Ruby Andrews",
        votes_To: "Jade",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    }
]

var voters2 = [
    {
        voter_Name: "Adam Scott",
        votes_To: "James",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    }
];
//

// ------------------------

const objectCounter = (obj) => {
    // write your code here
    let acc= 0;
    obj.reduce(function(previousValue,currentValue,currentIndex){
       if (currentIndex+1==obj.length){
            acc=currentIndex+1;
        } 
    })
return acc;
}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------
let str ='you shall not pass';
const stringReverse = (str) => {
    // write your code here
    let arr =str.split(" ");
    return arr.reduce((a, b) => [b, ...a], []).join(" ");
}

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
let voters13 = [
    {
        voter_Name: "Adam Scott",
        votes_To: "James",
    },
    {
        voter_Name: "Abril Blake",
        votes_To: "Jade",
    },
    {
        voter_Name: "Ruby Andrews",
        votes_To: "Jade",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    }
];

// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    // write your code here
    let res ={};
    let arrname= [];
    obj.reduce(function (previousValue,currentValue,currentIndex){
        //console.log(currentIndex);
        arrname[currentIndex]=currentValue.votes_To;  
    },0)
    for(let i=0;i<arrname.length;i++){
        let num =arrname[i];
        res[num]=res[num]?res[num]+1:1;
    }

    return res;
}



module.exports = { objectCounter, stringReverse, statistics };

