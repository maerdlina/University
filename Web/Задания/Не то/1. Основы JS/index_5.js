//Проверить два числа и вывести истина если одно из 
//чисел равно 10 или если их сумма 10.

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

if((a == 10) || (b == 10) || (a + b == 10)){
    alert(true)
} else{
    alert(false)
}