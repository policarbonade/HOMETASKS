let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_1 + item_2;
console.log(item_3);
let item_4 ="Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5 = item_3;
let item_6 = 12;
let item_6_type = typeof item_6;
console.log('item_6 == ', typeof item_6, 'item_6_type', typeof item_6_type);
let item_7 = String(item_6);
let item_7_type = typeof type_7;
console.log('item_7 == ', typeof item_7, 'item_7_type', typeof item_7_type);


function checkAge(age_1, age_2, age_3) {
age_1 = prompt("Введите первый возраст", '');
age_2 = prompt("Введите второй возраст", '');
age_3 = prompt("И последний", '');

if (!Number(age_1 || age_2 || age_3)) {
    console.log("Error");
}

else if (Number(age_1 && age_2 && age_3)) {
if (age_1 < age_2) {
console.log("You don’t have access cause your age is", age_1,"It’s less then", age_2);
}

else if (age_1 >= age_2 && age_1 < age_3) {
console.log("Welcome!");
}

else if (age_1 > age_3) {
console.log("Keep calm and watch Culture channel");
}

else {
    console.log("Technical work");
}
} 
}


checkAge();