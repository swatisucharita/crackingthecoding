function decimalToBinary(decimal) {
    if (decimal >= 1 || decimal < 0) {
        return;
    }

    let n = 1;
    let num = decimal * 2;
    let binary = '.';
    while (num > 0 && n <= 32) {
        if (num >= 1) {
            binary = `${binary}1`;
            num = num - 1;
        } else {
            binary = `${binary}0`;
        }
        num = num * 2;
        n++;
    }

    if 
    (n > 32) {
        return 'ERROR';
    }

    return binary;
}

/* TEST */
console.log(decimalToBinary(0.625) === '.101')
console.log(decimalToBinary(0.6255342856783467856932) === 'ERROR');