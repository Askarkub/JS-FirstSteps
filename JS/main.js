// console.log("Hello world");
// console.error("Attention!!!");
// console.warn("Уведомление");
// var num;
// num=5;

//Урок №4
const num = 5; // Нельзя переопределить значение константы
var num2 = 5;
console.log("Переменная: " + num); //Переменная + значение
//Типы данных:
var number = 4; //Числовые
var srtroka = "строка"; // строчные
var boulian = true;//false булевые значения
var int = 55; // интежер (целое число)

//Урок № 5
var num_1 = 5;
var num_2 = 15;
console.log("Вычетание: " + (num_1 - num_2));
console.log("Сложение: " + (num_1 + num_2));
console.log("Умножение: " + (num_1 * num_2));
console.log("Остаток от деления: " + (num_1 % num_2));


var num_3 = 5;
num_3 = num_3 + 7;
num_3++; // Добавление единицы. Можно написать как num_3+=1
num_3--; // Вычетание единицы. Можно написать как num_3-=1
console.log("Результат: " + num_3);

var str_1 = Number("12");
var str_2 = Number("2");
console.log("Результат: " + (str_1 + str_2));


// Объект Math
console.log("Math: " + Math.PI)
console.log("Math: " + Math.E)
console.log("Math: " + Math.min(4, 6, 7, 8, 2, 3, 9)) // метод мин. находит самое минимальное значение
console.log("Math: " + Math.max(4, 6, 7, 8, 2, 3, 9)) // метод max. находит самое maxимальное значение


//Урок № 6. Условные конструкции 

var number1 = 15;
var isHasHouse = true;

if (number1 != 15 && isHasHouse == true) {
    console.log("Ok");
} else if (number1 < 10) {
    console.log("Ok!")
} else if (number1 == 7) {
    console.log("7!")
} else {
    console.log("Else")
}


var stroka = "word";

switch (stroka) {
    case 4:
        console.log("Peremennaya = 4");
        break;
    case "45":
        console.log("Peremennaya = 45");
        break;
    case "word1":
        console.log("Peremennaya = word");
        break;
    default:
        console.log("Default");
        break;
}


// Урок № 7 Массивы данных

var arr = [5, true, "stroka", 5.7, 0, -100]; // Еще можно использовать синтаксис arr = new Array();
arr[3] = "word";
console.log(arr[0]);
console.log(arr.length);

//Многомерные массивы

var matrix = [
    [4, 6, 8], ["stroka", 5.7], [0, -100]
];

matrix[1][0] = 90;
console.log(matrix)