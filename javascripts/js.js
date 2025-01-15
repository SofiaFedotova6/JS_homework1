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
    });