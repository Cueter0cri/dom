let seconds = 0;

const timer = setInterval(() => {
    seconds++;
    console.log(`Прошло ${seconds} секунд`);

    if (seconds >= 10) {
        clearInterval(timer);  
    }
}, 1000);
