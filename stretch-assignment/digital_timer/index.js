
let digits = document.querySelector('.digits');
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let colon = document.getElementById('colon');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

timer();

function timer() {
    let millsec = 0;
    secondTens.innerHTML = '0';
    secondOnes.innerHTML = '0';
    msHundreds.innerHTML = '0';
    msTens.innerHTML = '0';
    const interval = window.setInterval(() => {
        millsec += 10;
        if (millsec === 10000) {
            timeEnd(interval);
        }
        else {
            doTimer(millsec);
        }
    }, 10)
}


function timeEnd(timeZero) {
    clearInterval(timeZero);
    Array.from(digits.children).forEach(clock => {
        clock.style.color = 'red';
    })
}




function increment(num1) {
    let time = Number(num1) + 1;
    return time.toString();
}

function doTimer(maxTime) {
    if (maxTime === 10000) {
        secondTens.innerHTML = '0';
        secondOnes.innerHTML = '0';
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
    } else if (maxTime % 1000 == 0) {
        secondTens.innerHTML = increment(secondTens.innerHTML);
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
    } else if (maxTime % 100 == 0) {
        msHundreds.innerHTML = increment(msHundreds.innerHTML);
        msTens.innerHTML = '0';
    }
    else {
        msTens.innerHTML = increment(msTens.innerHTML);
    }
}