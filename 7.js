function print (msg, count){
    let msg = prompt('write...');
    let count = +prompt('how many');

    for (let i = 0; i < count; i++) {
        document.write('<p>' + msg + '<hr>')
    }

}
print();