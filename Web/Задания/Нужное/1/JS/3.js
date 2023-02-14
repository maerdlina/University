let fizz_buzz = prompt('Введите число');
let type = (typeof(fizz_buzz));
if (type == 'string'){
    for(let i = 0; i <= fizz_buzz; i++){
        if(i % 2  == 0){
            document.write(`<p>${i} buzz</p>`)
        }
        else if(i % 5 == 0){
            document.write(`<p>${i} fizz buzz</p>`)
        } else{
            document.write(`<p>${i} fizz</p>`)
        }
    }
}