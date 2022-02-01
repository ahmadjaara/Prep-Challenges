'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------
let arr =[20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200];
const oddFiltration = (arr) => {
    // write your code here
    let result =arr.filter(item =>{
        if(item % 2==0){
            return false; 
        }
        else{
            return item;
        }
    })
    return result;
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
var cvs = [
    {
        firstName: "Jason",
        LastName: "James",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Json",
        LastName: "Jmes",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Shira",
        LastName: null,
        yearsOfExperience: 5,
        tech: ".Net"
    },
    {
        firstName: "Dmitri",
        LastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python"
    },
    {
        firstName: "Isabella",
        LastName: null,
        yearsOfExperience: 4,
        tech: "Java"
    }
]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    // write your code here
    let result =arr.filter(function(item,index){
        if((item.yearsOfExperience>4) & (item.tech=="JS")){
            return item 
        }
    })
    
    let obg =[];
    result.forEach(function (item,index) {
        
    if(item.firstName!=null&item.LastName!=null){
        obg[index]=new Object();
        obg[index].fullName=item.firstName+" "+item.LastName;
        obg[index].tech=item.tech;

    }
    else if(item.firstName==null){
        obg[index]=new Object();
        obg[index].fullName=item.LastName;
        obg[index].tech=item.tech;
    }
    else if(item.LastName==null){
        obg[index]=new Object();
        obg[index].fullName=item.firstName;
        obg[index].tech=item.tech;
    }

    });
    
    return obg;

}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------
var arrw = ['car', 'boy', 'spy', 'building', 'why', 'dry' ];
const vowelsFiltration = (arr) => {
    // write your code here
    let result =arr.filter((str => {
        if(/^[^aeiou]+\b$/.test(str)){
            return str;
        }
    }));
    return result;

} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------
// let arr11 = ['C', 'C#', 'Java', 'Angular', 'PHP']
// let arr22 = ['C#','.Net','JavaScript', 'React', 'Angular'] ;
const skillComparison = (arr1, arr2) => {
    // write your code here
    let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));
    
    return difference;
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

