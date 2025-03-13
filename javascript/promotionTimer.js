// Время в секундах
const promotionTimer = (time) => {
    let counter = 0;
    let leftTime = time
    const id = setInterval(() => {
    counter += 1;
    leftTime -=1
    if (counter === time) {
        clearInterval(id);
        console.log("Акция завершена!")
        return;
    }
    console.log(`До конца акции осталось секунд: ${leftTime}`);
    }, 1000);
}

promotionTimer(10);