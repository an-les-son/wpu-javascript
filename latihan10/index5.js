let hasil = '';

    for (let i = 5 ; i > 0; i--) {
        for (let j = 1; j <= 5; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += '  ';
            }
        }
        hasil += '\n';
    }
    console.log(hasil)