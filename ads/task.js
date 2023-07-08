function replaceSpanActive(card) {
    const rotator = card.querySelectorAll('.rotator__case');
    const rotatorArray = Array.from(rotator);
    const elementActive = rotatorArray.find((item) => {
        return item.classList.contains('rotator__case_active');
    });
    elementActive.classList.remove('rotator__case_active');
    let nextElement;
    let delay;

    if (elementActive.nextElementSibling) {
        nextElement = elementActive.nextElementSibling;
    } else {
        nextElement = rotatorArray[0];
    }
    nextElement.classList.add('rotator__case_active');
    nextElement.setAttribute('style', `color: ${nextElement.dataset.color}`);
    delay = timer(nextElement);

    setTimeout(replaceSpanActive, delay, card);
}

function timer(item) {
    let timeDelay;
    if (item.dataset.speed) {
        timeDelay = item.dataset.speed;
    } else {
        timeDelay = 1000;
    }
    return timeDelay;
}

const content = document.querySelectorAll('.card');
content.forEach((element) => {
    const rotator = element.querySelectorAll('.rotator__case');
    const rotatorArray = Array.from(rotator);
    const elementActive = rotatorArray.find((item) => {
        return item.classList.contains('rotator__case_active');
    });
    const timeFirst = elementActive.dataset.speed || 1000;
    setTimeout(replaceSpanActive, timeFirst, element);
});