// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы не согласились.")
// );
//
// "use strict";
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
//
//
//
//
// function isEmpty (object) {
//     let i=0;
//     for (var key in object) {
//         i++;
//     }
//     return i === 0;
// }
// let schedule = {
//     age: 10,
// };
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false
//
//
// function sum(obj) {
//     let i=0;
//     for( key in obj ) {
//         i+=obj[key];
//     }
//     return i;
// }
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// console.log(sum(salaries));
//
//
//
//
// function multiplyNumeric(obj) {
//     for( key in obj ) {
//         if ( typeof(obj[key]) == "number")
//             obj[key] *=2;
//     }
// }
// let printMenu = function(obj, prompt="меню",) {
//     console.log(prompt);
//     for(let key in obj) {
//         console.log(key, ":",obj[key]);
//     }
// };
// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// printMenu(menu);
// multiplyNumeric(menu);
// printMenu(menu, "после вызова функции");
//
//
//
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// //попытка реализовать глубокое клонирование
// function cloneDeep(obj) {
//     let clone = {};
//     for (let key in obj) {
//         if (typeof(obj[key])=="object") {
//             clone[key] = cloneDeep(obj[key]);
//         }
//         else clone[key] = obj[key];
//     }
// }
//
//
//
//
//
// let calculator = {
//     read() {
//         this.a = +prompt("Введите а", "1");
//         this.b = +prompt("Введите б", "2");
//     },
//
//     sum() {
//         return "результат сложения: " + (this.a + this.b);
//     },
//
//     mul(){
//         return "результат умножения: " + (this.a * this.b) ;
//     },
//
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
//
//
//
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
//
//
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
//
//
//
//
//
//
//
//
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("Введите а", "1");
//         this.b = +prompt("Введите б", "2");
//     };
//
//     this.sum = function () {
//         return "результат сложения: " + (this.a + this.b);
//     };
//
//     this.mul = function () {
//         return "результат умножения: " + (this.a * this.b) ;
//     };
//
// };
// let calculator = new Calculator();
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
//
//
//
//
// //то же, но стрелочными функциями ( работаем без this, потому что они ссылаются на внешие объекты)
// function Calculator() {
//     let a, b; // храним значения в замыкании
//
//     this.read = () => {
//         a = +prompt("Введите а", "1");
//         b = +prompt("Введите б", "2");
//     };
//
//     this.sum = () => "результат сложения: " + (a + b);
//
//     this.mul = () => "результат умножения: " + (a * b);
// }
//
// const calculator = new Calculator();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
//
//



// let num = 5;
// console.log(`Variable: ${num}`);

// const CC = require('currency-converter-lt');
// let currencyConverter = new CC({from:"USD", to:"EUR", amount:100});
// currencyConverter.convert().then((response)=> {
//     console.log(`Result: ${response}`);
// })



// const os = require('os');
// let res = os.platform();
// console.log(res);

// const my_math = require('./my_math');
// let res1=my_math.add(4,5);
// let res2=my_math.minus(3,8);
// console.log(`result: ${res1}, ${res2}`);




// const fs = require('fs');
// let result = fs.readFile('some.txt', 'utf8', (err,data) =>{
//     fs.writeFile('some.txt', data + '\nSome text', 'utf8',(err,data) =>{
//         console.log("Всё сработало");
//     })
// });




// const fs = require('fs');
//
// // // fs.mkdirSync('text-files');
// // fs.mkdir('text-files', () => {
// //     fs.writeFile('./text-files/some.txt', 'Hello World!', (err) => {});
// // });
//
// fs.unlink('./text-files/some.txt', () => {
//     fs.rmdir('./text-files', () => {})
// });


const http = require('http');
const fs = require('fs');
let server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    if(req.url=='/')
        fs.createReadStream('./templates/index.html').pipe(res);
    else if(req.url=='/about')
        fs.createReadStream('./templates/about.html').pipe(res);
    else
        fs.createReadStream('./templates/error.html').pipe(res);

})
const PORT = 3000;
const HOST = 'localhost';


server.listen(PORT, HOST, () => {
    console.log(`Server started: http://${HOST}:${PORT}`);
});


