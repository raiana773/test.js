 //! 1 Function declaration
// function showMessage(message){
//     console.log(message);
// }
// showMessage('Makers Bootcamp')
// showMessage('Js')
// showMessage('Kani')

//! 2 Function declaration
// let result = calcMutiplay(2, 7)
// console.log(result);
// function calcMutiplay (a, b){
//     return (a * b);
// }


// ! 1
// let showMessage = function(message){
//     console.log(message);
// }
// showMessage('Hello world')

// 2
// let calcMutiplay = function(a, b){
//     return a * b
// }
// console.log(calcMutiplay(2, 7))


// hoisting
// console.log(a);
// console.log(b);
// var a = 'makers';
// let b = 'Bootcamp';

// ? scope - область видемости
// let count = 0;           //1-> 2-> 3
// function counter(){
//     // let count = 0;    // 1, 1, 1
//     count++
//     console.log(count);
// }
// counter();   //1 -1
// counter();   //1 -2
// counter();   //1 -3

// function counter(){    //локальная перемена
//     let count = 10
//     console.log(count);
// }
// counter()

// ................
// let count = 10    
// function counter(){    
//     console.log(count);
// }
// counter()


// let personName = 'Kani';   // 3 выйдет Кани
// function func(){
//     let personName = 'Kubat';      // 2 кубат если его закоментировать
//     function func2(){
//         let personName = 'Aidai'  // 1 выйдет если законментировать выйдет
//         console.log(personName);
//     }
//     func2()
// }
// func()

// function checkSum(){
//     let a = +prompt('enter first number');   // + нужен что бы js видел что это числа
//     let b = +prompt('enter second number');

//     let sum = a + b;

//     if(sum === 15){
//         alert('summa ravna 15')
//     }else if(sum < 15){
//         alert('summa menshe 15')
//     }else{
//         alert('summa bolshe 15')
//     }
// }
// checkSum()   // функция вызывыется здесь , можно и через html -10



// function someFunc(){
//     console.log('hello world');
// }
// let newFunc = someFunc  //сама функция выходит а не вызов функции
// console.log(newFunc); 



// function calcSum(a, b){   //выводит сумму чисел
//     return a + b
// }
// console.log(calcSum(2, 7));

// ........
// function calcSum(a, b=10){   
//     return a + b
// }
// // console.log(calcSum(null, 8)); // если мы не хотит передавать а
// console.log(calcSum(2, 7));


// function someFunc(a, b, c, d, e){
//     // console.log(a, b, c, d, e);
//     // console.log(...arguments);   //обе выводять все водну строку

//     // let arr = [...arguments];   //Расповывает на каждую строку
//     // for(let i = 0; i < arr.length; i++){
//     //     console.log(arr);
//     // }


//     for(i of arr){  // можно и так
//         console.log(i);
//     }

// }
// someFunc('hello', false, 25, [], {});

// ? С ГРУППОЙ
// ! Function declaration - именованная функции
// ! 1 есть хойстинг
// greet()
// greet()
// greet()
// greet()

// function greet(){
//     console.log('hello')
// }

// ! Параметры - входные данные
// function countUntil (num) {
//     for(let i = 1; i <= num; i++){
//         console.log(i);
//     }
// }
// countUntil(20)
// countUntil(5)
// countUntil(4)


// function congrat (firstName, LastName) {
//     console.log('congrat ' + firstName + ' ' + LastName);
// }
// congrat('john1', 'snow')
// congrat('john2', 'snow')
// congrat('john3', 'snow')
// congrat('john4', 'snow')
// congrat('john5', 'snow')



// function calcSum (a, b){
//     let sum = a + b;
//     return sum 
//     // console.log(sum);
// }
// // calcSum(10, 5)
// // let result = calcSum(10, 5)
// // console.log(result);
// console.log(calcSum(10, 10));

// function getStr (){
//     let str = 'hello world';
//     return str
// }
// console.log(getStr()); //console.log(('hello world'));


// function concatStrs (str1, str2){
//     return str1 + str2
// }
// alert(concatStrs('hello ', 'world'))
// // console.log('hello', 'world');



// let userName = 'Вася';

// function showMessage (){
//     let userName = 'Петя';
//     console.log(userName);
// }
// showMessage()


// let counter = 0;
// function changeCounter (){
//     counter++
//     console.log(counter);
// }
// changeCounter()


// let students = [];
// function addStudent (studentName){
//     students.push(studentName)
//     console.log(students);
// }
// addStudent('Aziret')
// addStudent('Aziret1')
// addStudent('Aziret2')
// addStudent('Aziret3')



// ! expression function - анонимная функция
// let sayHello = function () {
//     console.log('hello');
// }
// sayHello()


// let obj = {
//     name: 'dina',
//     age: 18
// }
// let showObj = function (){
//     // console.log(obj);   //{}
//     for(let key in obj){         //dina 18
//         console.log(obj[key]);    // dina
//     }
// }
// showObj()

// let arr = [1, 2, 45, 56, 8]
// let showArr = function (arr){
//     for(let num of arr)
//     console.log(num);
// }
// showArr(arr)
// showArr([[10], 15])



// let showMessage = function (){
//     return 'hello'
// }
// console.log(showMessage());  //hello
// // consosle.log('hello');


// let calcDivide = function (a, b){
//     return a / b
// }
// console.log(calcDivide(10, 5));


// ! arguments 
// ! declaration 
// function check1(){
//     console.log(...arguments);
// }
// check1(12, 13, 41, 45, 41, 45, 6)
// ! expression
// let check2 = function(){
//     console.log(...arguments);
// }
// check2(100, 34, 400, 23, 574, 45)

// ! все функции отличается друг от друга синтаксисом
// ! declaration function (именованная функция)- есть хойстинг, есть arguments
// ! expression  function(анонимная функция) -нет  хойстинг, есть arguments
// ! arrow function (стрелочные функции) - нет  хойстинг, нет arguments, нет собственного this

// console.log(Math.random() * 8)




// !----------------------  Стрелочные функции ----------------

//? Синтаксис Arrow Function
// let ArrowFunc = (params) => {
//     body
// };

// ? однострочный синтаксис
// let ArrowFunc = (a, b) => a + b;

//?  с одним вргументом 
// let ArrowFunc = a => console.log(a);

// ............
// let ArrowFunc = () => {
//     console.log('hello world');
// }
// ArrowFunc()

// let ArrowFunc = () => console.log('hello world');  //можно и так
// ArrowFunc()
// ..............


// ,,,,,,,,,,,,,,,,,,
// let ArrowFunc = (arg1, arg2) => {
//     return arg1 + arg2
// }
// console.log(ArrowFunc(7, 8))

// let ArrowFunc = (arg1, arg2) => arg1 + arg2    // ? тут можно не писать return он сам афтоматически будет нам возвращять
// console.log(ArrowFunc(7, 8));
// ,,,,,,,,,,,,,,,,,,,,,


// ! отличии
// 1
// let ArrowFunc = arg1 => console.log(arg1);  //? если  наша стрелачная функцияу принимает один памаретр то можно не писать ()
// ArrowFunc(5)

// 2
// let ArrowFunc = (arg1, arg2, arg3) => {
//     console.log(...arguments);            // ? стрелачная функция не принимает arguments
// }
// ArrowFunc(true, 23, 'makers')

// 3
// Object methods

// let person = {
//     name: 'john',
//     age: 22,

//     sayHello () {     // ? метод объекта, метод можно писать сколько захотим
//         console.log('hello world');
//     },
//     sayName: function(){
//         console.log('my name is john');   //? щяс они не диномичные
//     },
//     sayAge: () => console.log('i am 22 y.o.')

    
// }
// console.log(person.age);
// person.sayHello()  
// person.sayName()
// person.sayAge()


//  let person = {
//         name: 'jack',
//         age: 24,
    
//         sayHello () {     
//             console.log('hello world');
//         },
//         sayName: function(){
//             console.log(`my name is ${person.name}`);   //? теперь они диномичные `${}` 
//         },
//         sayAge: () => console.log(`i am ${person.age} y.o.`)
    
//     }
//     console.log(person.age);
//     person.sayHello()  
//     person.sayName()
//     person.sayAge()


// ? this со стрелочными функциями работает не так
// let person = {
//     name: 'jack',
//     age: 24,

//     sayHello () {     
//         console.log('hello world');
//     },
//     sayName: function(){
//         console.log(`my name is ${this.name}`);   
//     },
//     sayAge: function(){
//      console.log(`i am ${this.age} y.o.`)
//     }
// }
// // console.log(person.age);
// // person.sayHello()  
// // person.sayName()
// // person.sayAge()

// let person2 = {...person}
// console.log(person2);
// person2.name = 'kani';
// person2.age = 22;
// person2.sayName()
// person2.sayAge()


// ? так тоже стрелочная функция не будет работать
// let obj1 = {
//     name: 'kani',
//     age: 20,
//     obj2: {
//         name: 'kubat',
//         sayName: () => {
//             console.log(`${rhis.name}`);
//         }
//     }
// }
// obj1.obj2.sayName()



//? this - window
// alert('qwerty');
// console.log(this);
// window.alert('hello')


// let obj1 = {
//     alert(a){         // это у нас метод объекта
//         console.log(a + 'obj1');   
//     }, 
//     hello: () => {    // 2 метод объекта
//         let obj2 = {
//             alert(a){      // это тоже обукт но уже объект obj2
//                 console.log(a + 'obj2');
//             },
//             hello2: () => {     // у объета 2 будет еще метод
//                 this.alert('alert')
//             }     
//         }
//         obj2.hello2()
//     }
// }
// obj1.hello()


// ? С ГРУППОЙ
// ! ARROW FUNCTIONS
// (входные параметры) => {тело функции}  () => {}
// function(принять параметры) {}
// function nameOfFunc(){}


// let arrow1 = a => {} 
// let Arrow = (a, b) => {return (a + b);}
// let arrow3 = (a, b) => a + b


// ? 
// let checkType = (x) => {
//     if(typeof x === 'number'){
//         return 'это число'
//     }else{
//         return 'это не число'
//     }
// }
// console.log(checkType(1));

// короткий способ + тернарный оператор
// let checkType = x =>typeof x === 'number' ? 'это число': 'это не число'
// console.log(checkType(1));


// let checkNum = (a, b) => a > b ? 'a больще чем б': 'б больще чем а'
// console.log(checkNum(10 , 20));

// let checkSum = (a, b) => {
//     if (a > b) {
//         return 'a больще чем б'       //////////////////////////////////////////////
//     }else {
//         'б больще чем а'
//     }
// }
// console.log(checkSum(2, 4))

// три страки друг другу прибовляем
// let mergeStrs = (str1, str2, str3) => str1 + str2 + str3       
// console.log(mergeStrs("a", "b", "c"));


// let mergeStrs = (str1, str2, str3) => {
//     return str1 + str2 + str3
// }
// console.log(mergeStrs('a', 'b', 'c'))

// ! error: arguments is not defined
// let checkArgs = () => {
//     console.log(arguments);
// }
// checkArgs(1, 3, 5, 7 ,23, 5)

// let person = {
//     name: 'Alina',
//     age: 19,
//     role: 'student',
//     sayName: function (){            // анонимная фукция
//         // console.log(this);
//         let arrow = () => {
//             console.log(this);
//         }
//         arrow()
//     },

//     sayAge: function(){
//         console.log(this.age);
//     },
//     sayRole: () => {
//         console.log(this);
//     }
// }
// // console.log(typeof person.sayName);
// person.sayName()
// person.sayAge()
// person.sayRole()


// let elevator = {
//     min: 1,
//     max: 16,
//     currentFloor: 1,
//     printfloor: function () {
//         console.log(this.currentFloor + " этаж");
//     },
//     printError: function() {
//         console.log("Error!");
//     },
//     upOneFloor: function(){
//         if(this.currentFloor >= this.min && this.currentFloor < this.max){
//         this.currentFloor++
//         this.printfloor()
//         } else {
//             this.printError()
//         }
//     },
//     downOneFloor: function(){
//         if(this.currentFloor > this.min && this.currentFloor <= this.max){
//             this.currentFloor--
//             this.printfloor()
//         } else{
//             this.printError()
//         }
//     },
//     toFloor: function(floor){
//         if(floor >= this.min && floor <= this.max) {
//             while(this.currentFloor < floor){
//                 this.upOneFloor()
//             }
//             while(this.currentFloor . floor){
//                 this.downOneFloor()
//             }
//         } else {
//             this.printError()
//         }
//     }
// }
// elevator.printfloor()
// elevator.downOneFloor()
// elevator.toFloor(10)
// elevator.toFloor(5)
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()




// let elevator = {
//     min: 1,
//     max: 16,
//     currentFloor: 1,
//     printFloor: function () {
//         console.log(this.currentFloor + " этаж");
//     },
//     printError: function () {
//         console.log("Error!");
//     },
//     upOneFloor: function () {
//         if (this.currentFloor >= this.min && this.currentFloor < this.max) {
//             this.currentFloor++
//             this.printFloor()
//         } else {
//             this.printError()
//         }
//     },
//     downOneFloor: function () {
//         if (this.currentFloor > this.min && this.currentFloor <= this.max) {
//             this.currentFloor--
//             this.printFloor()
//         } else {
//             this.printError()
//         }
//     },
//     toFloor: function (floor) {
//         if (floor >= this.min && floor <= this.max) {
//             while (this.currentFloor < floor) {
//                 this.upOneFloor()
//             }
//             while (this.currentFloor > floor) {
//                 this.downOneFloor()
//             }
//         } else {
//             this.printError()
//         }
//     }
// }
// elevator.printFloor()
// elevator.downOneFloor()
// elevator.toFloor(10)
// elevator.toFloor(5)
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()


// 5
// let checkTask = (str) => {

//     return str.split("").reverse().join("");

//  }
//  console.log(checkTask("JavaScript"));


let word = 'dog';
for(let i = 0; i < word.length; i++){
    for(let j = i + 1; j < word.length +1; j++){
        // console.log(i ,j);
        console.log(word.slice(i, j));
    }
}



