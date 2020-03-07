module.exports = function toReadable (number) {
    let num = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        [
            ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        ]
    ];

    if (String(number).length > 1) {
        return asd(number, num);
    }

    return num[0][number];
};


function asd(number, num) {
    let a = String(number);
    if (a.length == 3) {
        let result = num[0][a[0]] + ' hundred';
        if (a[1] == 1) {
            return result +  ' ' + num[1][0][a[2]];
        }
        if (a[2] == 0 && a[1] == 0) {
            return result;
        }
        if (a[2] == 0) {
            return result + ' ' + num[1][1][a[1]];
        }
        if (a[1] == 0) {
            return result + ' ' + num[1][1][a[1]] + num[0][a[2]];
        }
        return result +  ' ' + num[1][1][a[1]] + ' ' + num[0][a[2]];
    }

    if (a.length == 2) {
        if (a[0] == 1) {
            return num[1][0][a[1]];
        }
        if (a[0] == 0) {
            return num[1][a[0]] + num[1][a[2]];
        }
        if (a[1] == 0) {
            return num[1][1][a[0]];
        }
        return num[1][1][a[0]] + ' ' + num[0][a[1]];
    }
}
