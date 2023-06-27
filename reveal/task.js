function showScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        if (top > window.innerHeight || bottom < 0) {
            if (element.className.includes('active')) element.className = 'reveal';
            return false;
        } 
        element.className = 'reveal reveal_active';
      
    })
}

window.addEventListener('scroll', showScroll);