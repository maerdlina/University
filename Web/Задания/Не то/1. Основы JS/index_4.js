let year = Number(prompt('Введите год'));

document.write(`<p>${year / 4}</p>`)

if((year / 4 == Math.round(year / 4)) && (year / 100 != Math.round(year / 100))){
    alert(true)
}
else{
    alert(false)
}