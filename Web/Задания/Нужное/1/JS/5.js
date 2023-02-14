let ugadai = false;
let zagadka = 5;
while(ugadai != true){
    let chislo = prompt('Введите число');
    let t = (typeof(chislo));
    if (t == 'string'){
        if(chislo == zagadka){
            document.write('Угадано');
            ugadai = true;
        } else {
            if(chislo > zagadka){
                document.write('ваше число больше');
            } else{
                document.write('ваше число меньше');
            }
        }
    }
    else{
        let chislo = prompt('НЕ ЧИСЛО!!!Введите число');
    }
}