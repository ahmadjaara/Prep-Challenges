'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------
let str123 ="Hello planet earth, you are a great planet.";
let str2="I did my waiting 12 years of it in Azkaban";
let str1="Impossible";
const LastWord = (str) => {
    // write your code here

    let x =str.slice(str.lastIndexOf(' ')+1);
    
    return x ;

}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    //write your code here
    let newstr = str.split(' ')
    let le =newstr.length;
    return newstr[le-1]
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------
let ele1="I thought you had a plan";
let ele2="I was there 3000 years ago";
let ele3="I had launch and I were here I... happy was"
let ele4="I am Venom";
const replaceWords = (str) => {
    // write your code here
    let newstr = str.split(' ');

        if(newstr.indexOf("I")!=-1){
        if (newstr.indexOf("was")!=-1){
            newstr[newstr.indexOf("I")]="We";
            newstr[newstr.indexOf("was")]="were";
        }
        else if(newstr.indexOf("am")!=-1){
            newstr[newstr.indexOf("I")]="We";
            newstr[newstr.indexOf("am")]="are";
        }
        else {
            newstr[newstr.indexOf("I")]="We";
        }
    }
    return newstr.join(" ");

}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------
let r= ["move","it","away","from","the","street","we","as","you","know"];
const arrToStr = (arr) => {
    // write your code here
    for(let i=4;i<=arr.length;i+=5){
        arr[i]+=",";
    }
    return arr.join(" ");

}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------
let str55="door";
let str66="aaaa bbb sdf";
let test2 = "Good morning";
const letterCounter = (str) => {
    // write your code here
    let newstr = str.split(' ');
    //["aaaa","bbb", "sdf"]
    let arr =[];
    let count ={};
    let num ="";
    for(let i=0;i<newstr.length;i++){
        arr[i]=newstr[i].split("");
        
        for(let j=0;j<arr[i].length;j++){
            num =arr[i][j];
            //count[num]=count[num]? count[num]+1:1;
            if (arr[i].indexOf(num)!=arr[i].lastIndexOf(num)){
                let x= arr[i].lastIndexOf(num)-arr[i].indexOf(num)+1;
            arr[i].splice(arr[i].indexOf(num)+1,arr[i].lastIndexOf(num)-arr[i].indexOf(num));
            arr[i][j]+=x ;
            }
            else {
                arr[i][j]+="1";
            }
        }
        
    }
    for(let k =0;k<arr.length;k++){
        arr[k]=arr[k].join("");
    }

    return arr.join(" ");
}



//module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };