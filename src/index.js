const total = 53000000000;
let remaining = 53000000000;
let current = 0;

function updateSectionTextAndUpdateAmount(amount, iterations, className) {
    const list = document.querySelector(`section.${className} ul`);
    const amountSpan = document.querySelector(`section.${className} span.amount`);

    if (amountSpan) {
        amountSpan.innerHTML = amount.toLocaleString('da-DK');
    }

    const iterationsSpan = document.querySelector(`section.${className} span.iterations`);
    if (iterationsSpan) {
        iterationsSpan.innerHTML = iterations.toLocaleString('da-DK');
    }

    let lis = '';
    for (let i = 0; i < iterations; i++) {
        lis += '<li></li>';
    }
    
    list.innerHTML = lis;

    remaining -= (amount * iterations);
    current += (amount * iterations);
    
    const currentSpan = document.querySelector(`section.${className} span.current`);
    if (currentSpan) {
        currentSpan.innerHTML = current.toLocaleString('da-DK');
    }

    const RemainingSpan = document.querySelector(`section.${className} span.remaining`);
    if (RemainingSpan) {
        RemainingSpan.innerHTML = remaining.toLocaleString('da-DK');
    }
}


updateSectionTextAndUpdateAmount(50, 1000, 'kebab', remaining);

updateSectionTextAndUpdateAmount(8700, 2000, 'iphone', remaining);

updateSectionTextAndUpdateAmount(100000, 3000, 'boat', remaining);

updateSectionTextAndUpdateAmount(1315000, 4000, 'tesla', remaining);

const remainingPercent = ((total - remaining) / total) * 100;
document.querySelector('.remaining-percent').innerHTML = parseInt(remainingPercent);

updateSectionTextAndUpdateAmount(10000000, 500, 'house', remaining);

updateSectionTextAndUpdateAmount(10000000, 4242, 'house2', remaining);
