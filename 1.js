let button1 = document.querySelector('#but_id');
let h11 = document.querySelector('h1')

button1.onclick = function (){
    // console.log('hi');
    // document.write('whats up')
    button1.style.background = 'red';
    // button1.style.color = 'yellow';
    // button1.style.border = 'none'
    // button1.style.width = '100px'
    // button1.style.height = '100px'
    button1.innerHTML = 'off';
    // button1.className = ('btn')
    h11.style.color = 'red';
}
button1.ondblclick = function (){
    button1.style.background = 'green';
    h11.style.color = 'green';
    button1.innerHTML = 'off';

}

button1.onmouseover = function() {
    button1.style.background = 'yellow';
    button1.innerHTML = "kelli"

}

button1.onmouseout = function () {
    button1.style.background = 'red';
    button1.innerHTML = "ketti"
}