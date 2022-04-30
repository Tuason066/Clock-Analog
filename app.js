

function setAnalog() {
    // hands
    const hoursHand = document.querySelector('.hour-hand');
    const minutesHand = document.querySelector('.minute-hand');
    const secondsHand = document.querySelector('.second-hand');

    // time
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    // time degrees
    const hoursDegree = ((hours / 12) * 360) + 90;
    const minutesDegree = ((minutes / 60) * 360) + 90;
    const secondsDegree = ((seconds / 60) * 360) + 90;

    // style
    const hands = document.querySelectorAll('.hands');
    hands.forEach(hand => hand.style.transition = `all 0.5s`);
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(setAnalog, 1000);