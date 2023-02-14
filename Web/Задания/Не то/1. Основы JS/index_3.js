let cel = Number(prompt('Введите число в цельсиях'));
let far = Number(prompt('Введите число в фаренгейтах'));

document.write(`<p>${cel}C\xB0 = ${9/5 * cel + 32}F\xB0</p>`)
document.write(`<p>${far}C\xB0 = ${Math.round(5/9 * (far - 32))}F\xB0</p>`)