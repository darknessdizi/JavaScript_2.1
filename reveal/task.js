function showScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        if (top > window.innerHeight || bottom < 0) {
            if (element.classList.contains('reveal_active')) {
                element.classList.remove('reveal_active');
            }
            return false;
        } 
        element.classList.add('reveal_active');
    });
}

window.addEventListener('scroll', showScroll);