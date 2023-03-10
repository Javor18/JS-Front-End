function loadingBar(number) {
    let percent = number / 10;
    let dots = 10 - percent;

    if (number == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }

    else {
        console.log(`${number}% [${'%'.repeat(percent)}${'.'.repeat(dots)}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
