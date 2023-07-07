function replaceActive(event) {
    event.preventDefault();
    const parent = this.parentElement;
    const links = parent.querySelectorAll('a');
    const linksArray = Array.from(links);
    const element = linksArray.find((item) => {
        return item.className.includes('active');
    });

    if (parent.className.includes('color')) {
        const color = this.dataset.textColor;
        replaceClassName('color_active', 'book_color-', color, element, this);
    } else if (parent.className.includes('size')) {
        const size = this.dataset.size;
        replaceClassName('font-size_active', 'book_fs-', size, element, this);
    } else {
        const background = this.dataset.bgColor;
        replaceClassName('color_active', 'book_bg-', background, element, this);
    }
}

function replaceClassName(status, startClassName, atribute, element, obj) {
    const book = document.getElementById('book');
    const bookArray = Array.from(book.classList);
    element.classList.remove(status);
    obj.classList.add(status);
    const nameClass = bookArray.find((item) => {
        return item.includes(startClassName);
    });
    book.classList.remove(nameClass);
    if (atribute) {
        book.classList.add(`${startClassName}${atribute}`);
    }
}

const links = document.querySelectorAll('a');
links.forEach((item) => {
    item.addEventListener('click', replaceActive);
});