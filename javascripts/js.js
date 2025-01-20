document.addEventListener("DOMContentLoaded", function(){

    //Задание 1
    const str = "abce";
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[3]);
    
    //Задание 2
    let num1 = parseInt(prompt("Введите первое число", "Напишите,пожалуйста!"));
    let num2 = parseInt(prompt("Введите второе число", "Напишите,пожалуйста!"));
    console.log(num1 > 0 || num2 > 0);
    
    //Задание 3
    let age = parseInt(prompt("Введите свой возраст", "Напишите,пожалуйста!"));
    if (age >= 18){
      console.log("Вы совершеннолетний ;)");
    } else {
      console.log("Вы несовершеннолетний ;(");
    }
    
    //Мои варианты
    let userAnswer = prompt("Ваша кошка: Сиамская? (да/другая)");
    if (userAnswer.toLowerCase() === "да") {
        let age = prompt("Сколько ей лет?", "Напишите, пожалуйста");
        let ageNe = 20-age;
        console.log(`Ваше животное уйдёт из мира в ${ageNe} лет9:()`);
    } else if (userAnswer === "другая") {
        let age = prompt("Сколько ей лет?", "Напишите, пожалуйста");
        let ageNe = 10-age;
        console.log(`Ваше животное уйдёт из мира в ${ageNe} лет!`);
    } else {
        console.log("Она будет долго вас радовать(");
    }  
    //задача 4
let userInput = prompt("Введите число:");

let number = parseInt(userInput);

if (number < 1) {
    console.log("Пожалуйста, введите число больше 0.");
} else {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}
});

//задача 5
let secretWord = prompt("Введите секретное слово:");

if (secretWord === "JavaScript") {
    console.log("Ты угадал!");
} else {
    console.log("Попробуй снова!");
}

//задача 6
let userInput = prompt("Введите число:");

if (userInput !== null) { // Проверяем, что пользователь не нажал "Отмена"
    let number = parseInt(userInput); // Преобразуем ввод в целое число

    if (!isNaN(number)) { // Проверяем, является ли введенное значение числом
        if (number % 2 === 0) {
            console.log("Число четное.");
        } else {
            console.log("Число нечетное.");
        }
    } else {
        console.log("Пожалуйста, введите корректное число.");
    }
}

//задача 7
let userName = prompt("Введите ваше имя:");

if (userName !== null && userName.trim() !== "") { // Проверяем, что пользователь не нажал "Отмена" и ввел непустое имя
    console.log(Привет, ${userName}!);
} else {
    console.log("Вы не ввели имя.");
}

//задача 8
let userInput = prompt("Введите число:");

if (userInput !== null && !isNaN(userInput)) { // Проверяем, что пользователь не нажал "Отмена" и ввел число
    let number = parseFloat(userInput); // Преобразуем ввод в число
    let square = number * number; // Вычисляем квадрат числа
    console.log(Квадрат числа ${number} равен ${square}.);
} else {
    console.log("Вы ввели некорректное значение.");
}

//задача 9
let userInput = prompt("Введите ваш возраст:");

if (userInput !== null && !isNaN(userInput)) { // Проверяем, что пользователь не нажал "Отмена" и ввел число
    let age = parseInt(userInput); // Преобразуем ввод в целое число
    let futureAge = age + 5; // Вычисляем возраст через 5 лет
    console.log(Через 5 лет вам будет ${futureAge} лет.);
} else {
    console.log("Вы ввели некорректное значение.");
}

//задача 10
let userInput = prompt("Введите слово:");

if (userInput !== null) { // Проверяем, что пользователь не нажал "Отмена"
    let wordLength = userInput.length; // Получаем длину слова
    console.log(Длина введенного слова "${userInput}" составляет ${wordLength} символов.);
} else {
    console.log("Вы не ввели слово.");
}

//задача 11
let userInput = prompt("Введите слово:");

if (userInput !== null && userInput.length > 0) { // Проверяем, что пользователь не нажал "Отмена" и ввел слово
    let firstCharacter = userInput.charAt(0); // Получаем первый символ слова
    console.log(Первый символ введенного слова "${userInput}" - "${firstCharacter}".);
} else {
    console.log("Вы не ввели слово.");
};
   
