document.addEventListener("DOMContentLoaded"), function(){}


//     //Задание 1
//     // const str = "abce";
//     // console.log(str[0]);
//     // console.log(str[1]);
//     // console.log(str[3]);
    
//     //Задание 2
//     // let num1 = parseInt(prompt("Введите первое число", "Напишите,пожалуйста!"));
//     // let num2 = parseInt(prompt("Введите второе число", "Напишите,пожалуйста!"));
//     // console.log(num1 > 0 || num2 > 0);
    
//     //Задание 3
//     // let age = parseInt(prompt("Введите свой возраст", "Напишите,пожалуйста!"));
//     // if (age >= 18){
//     //   console.log("Вы совершеннолетний ;)");
//     // } else {
//     //   console.log("Вы несовершеннолетний ;(");
//     // }
    
//     //Мои варианты
//     // let userAnswer = prompt("Ваша кошка: Сиамская? (да/другая)");
//     // if (userAnswer.toLowerCase() === "да") {
//     //     let age = prompt("Сколько ей лет?", "Напишите, пожалуйста");
//     //     let ageNe = 20-age;
//     //     console.log(`Ваше животное уйдёт из мира в ${ageNe} лет9:()`);
//     // } else if (userAnswer === "другая") {
//     //     let age = prompt("Сколько ей лет?", "Напишите, пожалуйста");
//     //     let ageNe = 10-age;
//     //     console.log(`Ваше животное уйдёт из мира в ${ageNe} лет!`);
//     // } else {
//     //     console.log("Она будет долго вас радовать(");
//     // }   
    
//     //let userAnswer = prompt("Вы проживаете в Москве? (да/нет, в другом городе.)");
//    // if (userAnswer.toLowerCase() === "да") {
//         //let country = prompt("Вы проживаете в России?"):
//        // if (userAnswer.toLowerCase() === "да") {
//         //consolelog ('Вы можете войти без регистрации ')
//    // }
//    // });


// //Доп задание

//   //задача 4
//   let userInput = prompt("Введите число:");
//  let number = parseInt(userInput);
//   if (number < 1) {
//       console.log("Пожалуйста, введите число больше 0.");
//  } else 
//       for (let i = 1; i <= number; i++) {
//           console.log(i);
//      }

// //задача 5
// let secretWord = prompt("Введите секретное слово:");
// if (secretWord === "JavaScript") {
//    console.log("Ты угадал!");
// } else {
//     console.log("Попробуй снова!");
// }


// //задача 6
// const input = prompt("Пожалуйста, введите число:");
// const number = parseInt(input, 10);
// if (isNaN(number)) {
//    console.log("Вы ввели не число.");
// } else {
//    if (number % 2 === 0) {
//        console.log("Число чётное.");
//     } else {
//         console.log("Число нечётное.");
//    }
// }


// //задача 7
// const name = prompt("Пожалуйста, введите своё имя:");
// if (name) {
//     console.log("Привет, " + name + "!");
// } else {
//    console.log("Привет, незнакомец!");
// }


// //задача 8
// const input = prompt("Пожалуйста, введите число:");
// const number = parseFloat(input);
// if (isNaN(number)) {
//     console.log("Вы ввели не число.");
// } else {
//     const square = number * number;
//    console.log("Квадрат числа: " + square);
// }

// //задача 9
// const input = prompt("Пожалуйста, введите ваш возраст:");
// const age = parseInt(input, 10);
// if (isNaN(age)) {
//    console.log("Вы ввели не число.");
// } else {
//    const futureAge = age + 5;
//     console.log("Через 5 лет вам будет " + futureAge + " лет.");
// }

// //задача 10
// const word = prompt("Пожалуйста, введите слово:");
// if (word) {
//     console.log("Длина введённого слова: " + word.length);
// } else {
//    console.log("Вы не ввели слово.");
// }


// //задача 11
// const word = prompt("Пожалуйста, введите слово:");
// if (word) {
//    console.log("Первый символ введённого слова: " + word.charAt(0));
// } else {
//     console.log("Вы не ввели слово.");
// }

// //ДЗ 2

// //задача 1
// const age = prompt("Введите пожалуйста ваш возраст");
// if (age < 55) {
//     console.log("Вам ещё рано на пенсию( ");
// } else {
//     console.log("Поздравляем с пенсионным возрастом!) ");
// }

// //задача 2
// const num1 = prompt("Введите пожалуйста первое число ");
// const num2 = prompt("Введите пожалуйста второе число ");
// if (num1 > num2) {
//     console.log("Первое число больше");
// } else if (num1 < num2) {
//     console.log("Второе число больше");
// } else {
//     console.log("Числа равны, вы молодец!");
// }

// //задача 3
// const number = prompt("Введите пожалуйста число.");
// if (number % 2 === 0) {
//     console.log("Это число чётное.");
// } else {
//     console.log ("Это чисдо нечётное");
// }

// //задача 4
// const number = prompt("Введите число:");
// if (number > 150) {
//     console.log("Большое число");
// } else if (number < 150) {
//     console.log("Маленькое число");
// } else {
//     console.log("Точно 150!");
// }

// //задача 5
// const secretNumber = 13;
// const userGuess = prompt("Угадайте число от 1 до 18:");
// if (userGuess == secretNumber) {
//     console.log("Вы угадали!");
// } else {
//     console.log("Попробуйте ещё раз!");
// }

// //задача 6
// const login = prompt("Введите логин");
// const password = prompt("Введите пароль");
// if (login === "admin" && password === "12354") {
//     console.log("Добро пожаловать!");
// } else {
//     console.log("Неверный логин или пароль");
// }

// //задача 7
// const year = prompt("Введите год");
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("Это високосный год");
// } else {
//     console.log("Это не високосный год");
// }
