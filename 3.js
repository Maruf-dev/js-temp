
let num = +prompt('1chi raqam');
let pow = +prompt('2chi raqam');
let res = 1;
let i = 1;

while(i <= pow){
    res = res *num;
    i++;
}
alert(res);


let num = +prompt('son kriting?');

switch(num){
    case 1:
        alert('dushanba');
    case 2:
        alert('seshanba');
    case 3:
        alert('chorshanba');
    case 4:
        alert('payshanba');
    case 5:
        alert('juma');
    case 6:
        alert('shanba');
    case 7:
        alert('yakshanba');
        break;
    default:
        alert('hafta 7 kun bor')
}


let num = +prompt('son kriting?');

switch(num){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert('ish');
        break;
    case 7:
        alert('dam');
        break;
    default:
        alert('hafta 7 kun bor')
}