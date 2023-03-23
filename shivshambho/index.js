// var myName = 'landge urmila';
// var myAge = 22;
// console.log(myAge);

// var _myName = "landge";
// var _1my__Name = "urmila";
// var _1myName = "dipali";
// var $myName ="landge technical"
// console.log($myName);

//typeof operator
// console.log(typeof( myName));
//  var iAmLandge = false;
//  console.log(iAmLandge);
//  console.log(typeof(iAmLandge));

//data types practice

//console.log(10+"20");
// console.log(9-"5");
// console.log("java"+"script");
// console.log(""+"");
// console.log("landge"-"Urmila");
//  console.log(true+true);
// console.log(true+false);
// console.log(false+true);
// console.log(false-true);

// 1.Assignmet operators
// var x = 5;
// var y = 7;

// console.log(x==y);

// console.log('is both x and y are equal: ${x==y}');

//Arithmetic Operator

// console.log(3+3);
// console.log(12-7);
// console.log(20/4);
// console.log(5*7);

// console.log("Reminder Operator"+27%4);

//increment and decrement operator

// var num = 16;
// var newNum = --num;
// console.log(num);
// console.log(num);

//comparison operater

// var a = 30;
// var b = 10;
//equal(==)
// console.log(a==b);

//not equal(=/=)
// console.log(a != b );

//greater than
// console.log(a>b);

//greater or equal(>=)
// console.log(a>=b);

//less than(<)
// console.log(a<b);

//ess than equal to(<=)
// console.log(a<=b);

///logical operator

// var a = 30;
// var b = -20;

 //logical And(&&)
//  console.log(a>b && b>-50 && b<0);

//logical OR (||)
// console.log(a>b || b>50 || b<0);


//logocal Not(!)
// console .log(!((a>b) || (b<0)));
// console.log(!false);

//5 string concatination (operators)

// console.log("hello world");
// console.log("hello "+"world")

// var myName = "Urmila";

// console.log(myName+"  Sarjerao landge")
// console.log(myName+" ambre")
// console.log(myName+" sahane")
// console.log(myName+" kothwal")
//challenge time

// sol 1
// console.log(3**3);
// console.log(10**-1);1/10

// sol 2
// console.log(3+"landge");
// console.log(3+"5");
// console.log(3-"urmila");( //Nan)

// sol 3 (swap two numbers)
// var a = 5;
// var b = 13;
//output b=5;and a=10;
// var c= b;//c=13
// b=a;//b=5;
// a=c;
// console.log("the value of a is "+ a);
// console.log("the value of b is "+ b);

//sol 4 (swap two numbers without using thord variable)


// var a = 5;
// var b = 10;
//  //output a=10; and b=5;

//  a = a + b;//a=15
//  b = a - b; //b=5
//  a = a - b; //a=10

// console.log("the value of a is "+ a);
// console.log("the value of b is "+ b);

///differnce between== vs ===

// var num1 = 5;
// var num2 ='5';

// console.log(num1==num2);
// console.log(num1===num2);
// console.log(typeof(num2));

/////control statments ans loops

//1//if else////

// if raining = raincoat;
// else no raincoat

// var tomr = 'rain';

// if(tomr == ' no rain'){
// console.log('take a raincoat');
// }else{
//     console.log(' no need to take a raincoat');
// }
// var year = 2020

// if(year% 4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log("the year "+year+ "is a leap year");
//         }else{
//             console.log("the year "+year+ "is not a leap year");
//         }

//     }else{
//         console.log("the year "+year+ "is a leap year");
//     }

// }else{
//     console.log("the year "+year+ "is not a leap year");
// }
    

///truthy and falsy in javascript


// if(score = 5){
//     console.log("yay,we won the game ");
// }else{
//     console.log("OMG, we loss the game");
// }

// var age = 19;

// if(age>19){
// console.log("yor are eligible to vote");
// }else{
//     console.log("yor are  not eligible to vote");
// }

///2 conditinal (ternary)operator

// var age = 18;
// console.log((age >= 18)? "you can vote" : "you cant vote");

 
///3 Switch Statment

// var area = "suqare";
// var PI = 3.142;var l = 5, b = 4, r =3;


// if(area == "circle"){
// console.log("the area of circle is :" + PI*r**2)
// }else if(area == "triangle"){
// console.log("the area of the triangle is :" +(l*b)/2 )
// }else if(area == "rectangle"){
//     console.log("the area of the rectangle is :" + (l*b))
// }else{
//     console.log("please enter valid data");
// }


// var area = "circle";
// var PI = 3.142;var l = 5, b = 4, r =3;

// switch(area){
//     case 'circle':
//         console.log("the area of circle is :" + PI*r**2);
//         break;
//    case 'triangle':     
//    console.log("the area of the triangle is :" +(l*b)/2 )
   
//    case 'rectangle':
//    console.log("the area of the rectangle is :" + (l*b));

//    default: console.log("please enter valid data");
// }

//4--- while loop statment

// var num = 0;
// //block scope
// while(num<=100){
//     // console.log(num);//infinite loop
//     console.log(num++);

// }

///Do While Loop

// var num = 10;
// do{
//     console.log(num++);
// }while(num<=0);

//FOR LOOP

// for(var num = 0;(num<=20);(num++)){
// console.log(num);
// }

 ///challenge time

 ///print table 8,,9,12

//  output : 8 * 1 = 8 ==> 8 + 10 = 80

// for(var num =1 ; num <= 10; num++){
//     var tableof = 8;
// console.log(tableof + "*" + num + "="+ tableof * num);
// }
 
// for(var num = 1 ; num <= 10; num++){
//     var tableof = 9;
//     console.log(tableof + "*" + num + "=" + tableof*num)
// }


// for( var num = 1; num <= 10; num++){
//     var tableof = 12;
//     console.log(tableof +"*" + num + "="+ tableof*num)
// }

// for(var num =1; num <=10; num++){
//     var tableof = 18;
//     console.log(tableof + "*" + num + "=" + tableof*num)
// }


///section5

//functions in javascript

//1// function definition

// function sum( ){
//     var a= 13; b= 34;
//     var total = a+b;
//     console.log(total);
// }
// console.log( sum ());
// sum()//calling function


// ////function parameter vs fnction argument

// function sum( a , b){
//     // var a= 13; b= 34;
//     var total = a+b;
//     console.log(total);
// }
//  sum(67,88)
//  sum(20,30)
//  sum(50,60)

///4 function expression

// function sum ( a,b){
//     var total = a+b;
//     console.log (total);
// }
//  var funExp = sum(56,23);
//  funExp;

//5 Return KeyWord

// function sum ( a,b){
//     return total = a + b;
// }
//  var funExp = sum(89,23);
// console.log( 'the sum of two numbers is ' +  funExp);

///6 anonymous function Expression

// var funExp = function( a,b){
//     return total = a + b;
// }
// var sum1 = funExp(20,10);
// var sum2 = funExp(90,10);
// console.log ( sum2 > sum1 );

//<br>-------------------------------------<br>----------------------------------------<br>



                      /// Welcome To ECMAScript/////


//* defination of ecmascript///

///1 LET VS CONST VS VAR

// var myName = "Landge Urmila"
// console.log(myName);

//  myName = "Landge Urmila"
// console.log(myName);

// let myName = "Landge Urmila";
// console.log(myName);

//  myName = "Landge Urmila"
// console.log(myName);

// const myName = "Landge Urmila"
// console.log(myName);

//  myName = "Landge Urmila"
// console.log(myName);



// function biodata(){
// const myFirstName = "Urmila";
// console.log(myFirstName);

// if(true){
//    const myLastName ="Landge"
//     console.log('inner '+ myLastName)
//     console.log('inner '+ myFirstName)
// }
// console.log('innerOuter '+ myLastName)
// }

// biodata();

///[2] TEMPLATE LITERALS (Template Strings)

//output : 8 * 1 = 8
// 8 * 2 = 16(8*2)
// 8 * 10 = 80

// for(let num = 1; num <= 10; num++){
//     let tableof = 78;
//     // console.log(tableof + "*" + num + "=" + tableof*num);
// console.log(`${tableof}* ${num} = ${tableof * num}`);
// }

// ///[3] Default Parameters//

// function mult(a,b=5){
// return a * b;
// }

// console.log(mult(9,));

//  [6] Fat Arrow Function

// console.log(sum());

// function sum() {
//     let a = 5; b = 6;
//     let sum = a+b;
//     return `the sum of the two numbers is ${sum}` ;
// }



// convert in fat arrow funtion

// const sum = () => `the sum of the two numbers is ${(a=5)+ (b=7)}` ;
// {
//     // let a = 5; b = 6;
//     // let sum = a+b;
//      `the sum of the two numbers is ${(a=5)+ (b=7)}` ;}

// console.log(sum())

//=======================///////ARRAYS IN JAVASCRIPT///////=======================
                    // [7] SECTION[7]//

//Examples

//var myFriends =['shital', ' komal','kirti', 'prachi',true,45];



//[1]------

// var myFriends =['shital',' komal','kirti', 'prachi','shital',' komal','kirti', 'prachi',];
// console.log(myFriends[1]);

// //to know the length of data or elements

// console.log(myFriends.length);

/// we use loop for nevigate

// var myFriends =['shital','komal','kirti', 'prachi',];

// for(var i =0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

//After ES6 we have for..in and for..of loop too
//fr..in loop
// var myFriends = ['vinod','gita', 'kaveri','nita'];
// for(let elements in myFriends ){
//     console.log(elements);
// }
//for...of loop
// var myFriends = ['vinod','gita', 'kaveri','nita'];
// for(let elements of myFriends){
// console.log(elements);
// }

//Array prototype.forEach()
// var myFriends = ['vinod','gita', 'kaveri','nita'];

// myFriends.forEach(function(element,index,array){
// console.log(element + " index :" +  index + "" + array);
// });
//in fat arrrow function
// myFriends.forEach((element,index,array) =>  {
//     console.log(element + " index :" + 
//  index + "" + array);
// });


//  [2] Array Section 2  Searching and Filter in an Array

//Array Prototype. indexOf()

//var myFriends = [ " Rahul", " Kishor", " Sunita"," Shivaji Maharaj"];


// Array 



///[4] Array Subsection 4   perform CURD
//Array .Prototype.push()
// const animals = ['ping', 'goats','sheep'];

// //  const count = animals.push('chicken');
// // console.log(animals);
// // console.log(count);
// animals.push('chicken','ent','cow','bufellow');
// console.log(animals);



// //Array .Prototype.unshift()


//  const animals = ['ping', 'goats','sheep'];

// //  const count = animals.unshift('chicken');
// //  console.log(animals);
// // console.log(count);
// animals.push('chicken','ent','cow','bufellow');
// console.log(animals);


// 2 nd examples

// const myNumbers =[1,2,3,5];

// console.log( myNumbers.unshift(4,6));
// console.log(myNumbers);

// //Array .Prototype.Pop()

// const plants = ['brocoli','cauliflower','kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

//Array .Prototype.Shift()
// const plants = ['brocoli','cauliflower','kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


//CHALLENGE METHOD

// const months = ['jan','march','April','june','july'];

//sol:1
// const newMonths = months.splice(months.length,0,"Dec");
// console.log(months);

//sol 2:
// console.log(newMonths);

//sol:3
// const months = ['jan','march','April','june','july'];

// const indexOfMonth = months.indexOf('june');
// if(indexOfMonth !=-1){
//     const updateMOnth = months.splice(indexOfMonth,1,'June');
//     console.log(months);
// }else{
//     console.log('No Such Data Found');
// }


//sol:4
// const months = ['jan','march','April','june','july'];

// const indexOfMonth = months.indexOf('April');
// if(indexOfMonth !=-1){
//     const updateMOnth = months.splice(indexOfMonth,Infinity);
//     console.log(months);
//     console.log(updateMOnth);
// }else{
//     console.log('No Such Data Found');
// }

//[5 ] Map and Redce Method

//Array .Prototype.map()

// const array1 = [ 1,4,9,16,25] 

//num > 9

// let newArr = array1.map((curElem,index,arr)  => {
// return curElem > 9;

// })
// console.log(array1);
// console.log(newArr);

// let array1 = [ 1,4,9,16,25] 
//  let newArr = array1.map((curElm,index,arr) => {
// return `index no =${index} and the value is ${curElm} belong to ${arr}`
//  })
 
//  console.log(newArr);
// let array1 = [ 1,4,9,16,25] 
//  let newArrfor = array1.forEach((curElm,index,arr) => {
// return `index no =${index} and the value is ${curElm} belong to ${arr}`
//  })
//  console.log(newArrfor);
///filter method

// let newArr = array1.filter((curElem,index,arr)  => {
//     return curElem > 9;
    
//     })
//     console.log(array1);
//     console.log(newArr);


///challenge time

//sol:1
//  let arr = [25,36,49,64,81]

// let arrSqr =arr.map((curElem) => {
// return Math.sqrt(curElem);
// });
// console.log(arrSqr);

//sol:2
// let arr = [ 2,3,4,6,8];
//  let arr2 = arr.map((curElm) => {
// return curElm * 2;
//  }).filter((curElm) =>{
//     return curElm > 10
//  }).reduce((accumulator,curElm)=> {
// return accumulator *= curElm;
//  })
//  console.log(arr2);

                  /// Reduce Method///////// 

//  let arr = [5,6,2];
//  debugger;
//  let sum = arr .reduce(( accumulator,curElm,index,arr) => {
// return accumulator += curElm;
//  },7)
// console.log(sum);
// console.log(arr);

// How to fatten an array
//converting 2nd and 3rd array into one dimentional array

// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']
// ]

// let flatArr = arr.reduce((accum,curVal) =>{
//     return accum.concat(curVal);
// })
// console.log(flatArr);

              ///////////////// Strings In JavaScript///////////////


//[section [7]] //

// let myName = "landge  urmila"
// let myChannelName = 'Landge Technical'

// // let ytName = new String("Landge Technical")
// console.log(myName);
// console.log(myChannelName);


// String ,prototype length

// let myName = "landge urmila"
// console.log(myName.length);


/// [*] Escape Character 

// let anySentence = "We are the so - called \"vikings\" from the north."
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes

// let anySentence =' We are the so - called "vikings" from the north.'
// console.log(anySentence);

//method String .Prototype.indexOf()

// const myBioData = 'i am the Landge Technical';
// console.log(myBioData.indexOf("Landge",6));


// // String.prototype.search(regexp)

// const myBioData = 'i am the Landge Technical';
// let sData = myBioData.search("Landge");
// console.log(sData);

// Extracting String Parts

// slice(start,end)
// substring(start,end)
// substr(start,length)

//THE Slice() Method

// var str = "Apple, Bananaa, Kiwi,mango";
// let res = str.slice(7);
// // let res = str.slice(0,4)
// console.log(res);

//11 Challenge Time
//display only characters//

// let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
 
// let myActualTweet = myTweets.slice(0,287);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// The Sustring() Method

//Substring Similar to Slice Method

// var str = "Apple,Bananna ,Kiwi";
// let res = str.substring(7,-2);
// console.log(res);


// The substr () Method
//it is similsr to slic()

// var str = "Apple,Bananna ,Kiwi";
// // let res =  str.substr(7,5);
// let res = str.substr(-4)
// console.log(res);

//Replacing String Content()

//  let myBioData = ' I am urmila Sarjerao Landge urmila';

//  let replaceData = myBioData.replace('urmila','Urmila')
//  console.log(replaceData);
//  console.log(myBioData);


//Extracting String Character

// [*3] Methods

//1 CharAt(position)
//2 CharCodeAt(position)
//3 property access[]


//1 method
//  let str ="HELLO WORLD";
//  console.log(str.charAt(10));


//2 Method
// let str ="HELLO WORLD";
// console.log(str.charCodeAt(0));

// 12 Challenge Time

// let str ="HELLO WORLD";
// let lastChar = str.length -1;
// console.log(lastChar);
// console.log(str.charCodeAt(lastChar))

// Property Access

// var str = "HELLO WORLD";
// console.log(str[0]);

/// Other Useful Methods

// let myName = "Landge Urmila";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

//THE Concate  Method

// let fName ="Urmila "
// let lName ="Landge"

// console.log(fName+lName);
// console.log(`${fName}is the last ${lName}`)
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName))


//String .trim()
//The trim() method

// var str ="       Hello World!        ";
// console.log(str.trim());

//converting string into Array
// (split()method)

// var txt ="a, b,c, | d, e";
// console.log(txt.split(","));  //split on comas
// console.log(txt.split(" "));  //spit on spaces
// console.log(txt.split("|"));  //split on pipe


///Section 8 Date and Time Javascript******//

/// Creating Date Objects

// new Date();
// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

//Date.now()

// console.log(Date.now());

//new.Date(year,month....)
// var d = new Date (2023,1,12,20);
// console.log(d.toLocaleString());

//new Date ( datestring)

// var d = new Date ("october 13,2021 11:13:00");
// console.log(d.toLocaleString());

//new Date(miliiseconds)

// console.log(Date.now());
// var d = new Date(1671002482862);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());


// Dates Methods

//how to get individual dates

//const curDate = new Date();

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());


//how to set the individual date

// console.log(curDate.setFullYear(2022));
// //The setFullYear() Method can optionally set month and day
 
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5))
// console.log(curDate.toLocaleString());


// Times Method

// const curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));
//

//practice time

// new Date().toLocaleTimeString();
// new Date().toLocaleDateString();
// new Date().toLocaleString();


////********* [SECTION 9] Math Object//in Javascript
//Math.PI()
// console.log(Math.PI);

//Math.round()

// let num = 10.2565;
// console.log(Math.round(num));

//Math.pow()
// console.log(Math.pow(2,3));
// console.log(2**3);


// Math.sqrt()

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

//Math.abs()

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

//Math.ceil()

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51))
// console.log(Math.ceil(99.01))
// console.log(Math.ceil(99.1));

//Math.Floor()

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

//Math.min()
// console.log(Math.min(0,150,30,20,-8,-200));

//Math.Max()
// console.log(Math.max(0,150,30,20,-8,-200));


//Math.random()
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10));


//Math.trunc()
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// [SECTION [10]DOM IN JAVASCRIPT]

//setion[4] How to search the elements and the Refrence
//We will see te new file

///section [11]///EVENTS*******//

//section [1] --4 ways of writing events in javascript

///[5][OBJECT PROPERTIES]

// let myName = "Urmila"
// const myBio ={
//    [ myName]:"hello how are you?",
//     [26]:"is my age"
// }
// console.log(myBio);

//[7][Spread Operator]

// const colors = ['red,green,blue,white'];

// const myColors = ['red,green,blue,white,yellow,black']

// const MyFavColors=[...colors,'yellow,block']

// console.log(MyFavColors);

//Es 7 ..Features

//2016//
//1: array includes'
// const colors = ['red','green','blue','white','pink'];
// const ispresent = colors.includes('purpule');
// console.log(ispresent);

//2:**
// console.log(2**3);


// 2017 [ES-8] features

//string.padding
//object.value()
//objet.entries()

// const message = "my name is urmila";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10))

// const person = {name:'Urmila',age:87};

//  const arrObj = Object.entries(person);
//  console.log(Object.fromEntries(arrObj));


// const arr =
//   [  ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7',['zone_8','zone_7']]
// ]

// console.log(arr.flat(Infinity));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// ES2018

// const person = {name:'Urmila',age:87};
// const sPerson = {...person};

// console.log(person);
// console.log(sPerson);

//Es2019

//Array.prototype.{flar.flatMap}
//object.fromEntries()


// //Es2020

// //#:1 BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log(oldNum+1);
// // console.log(oldNum+10);
// // console.log(oldNum+12);
// // console.log(9007199254740991n+12n)

// // const newNum = 9007199254740991n+15n;

// // console.log(newNum);
// // console.log(typeof newNum);

// //Es 2014
// // "use strict";
// //  let x = 3.14;
// // console.log(x);

// ////////////////////////////////// Advance JavaScript //////////////////////////////////
 

// // we need to creat calculator

// const add =(a,b) =>{
// return a+b;
// }

// const subs = (a,b) => {
//     return Math.abs (a-b);

// }

// const mult = (a,b) => {
//     return a*b;
// }

// const calculator =(num1,num2,operater) =>{
// return operater(num1,num2);
// // return subs (5,2);
// }

// // calculator(5,2,subs);-------> Higher order function

// console.log(calculator(5,2,subs));


// Ansycronise Javascript

// [5] Hoisting In Javscript

//eg

// console.log(myName);
// var myName;
// myName="landge";

// {var myName;
// console.log(myName);------->hoisting in js
// myName="landge";}


//2//
// console.log(myName);
// let myName;
// myName="Landge"

// lexical scoping

// const outerFun =(a) => {
//     let b= 10;
//     const innerFun =() => {
//         let sum = a+b;
//         console.log(`the sum the two no is ${sum}`);
//     }
//     innerFun()
// }
// outerFun(90);


// const outerFun =(a) => {
//     let b= 10;
//     const innerFun =() => {
//         let sum = a+b;
//         console.log(`the sum the two no is ${sum}`);
//     }
//      return innerFun;
// }
// let checkClouser = outerFun(90)
//  console.dir(checkClouser());

/// [6] : syncronous javascript

// const fun2 =  () => {
    
//     console.log(`function 2 is called`);
// }
//  const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called Again`);
//  }
//  fun1();

// Asycronuous  JavaScript prog


// const fun2 =  () => {
    
//     console.log(`function 2 is called`);
// }
//  const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called Again`);
//  }
//  fun1();


// The Event Loop in Javascript
// event loop

// Curring

// function mult(num1){
//     //console.log(num1);
//     return function(num2) {
//     //console.log(num1,num2);
//     return function(num3){
//         console.log(num1*num2*num3);
//     }
//     }
// }
// mult(5)(3)(8);
// const subs =(num1)=>(num2) =>(num3)=>console.log(num1-num2-num3);


//  subs(6)(7)(9);


// CallBack Hell//

// setTimeout(() =>{
//     console.log(`1] works is done`);
    
//     setTimeout(()=>{
//         console.log(`2] work is done`);
// setTimeout(()=>{
//     console.log(`3] work id done`);

// setTimeout(()=>{
//     console.log(`4] work is done`);

//     setTimeout(()=>{
//         console.log(`5]work is done`);
// setTimeout(()=>{
//     console.log(`6] work is done`);
// },1000)
// },1000)
// },1000)
// },1000)
// },1000)
// },1000)

// BONUS SECTION//
//javscript object notation//
// var my_object={key_1:"some text",key_2:true,key_3:5};

// var object_as_string=JSON.stringify(my_object);

// console.log(object_as_string);

// typeof(object_as_string);
// // converting JSON in to OBJECT//
// var object_as_string=JSON.parse(object_as_string);
// var object_as_string_as_object
















