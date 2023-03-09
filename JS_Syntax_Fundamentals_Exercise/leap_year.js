function leap_year(year) {

    if ((year % 4 === 0 && year % 10 !== 0) || year % 400 === 0){
        return 'yes';
    }

    else {
        return 'no';
    }
}

console.log(leap_year(1984))
console.log(leap_year(2003))
