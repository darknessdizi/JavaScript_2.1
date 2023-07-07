function replaceActive(event) {
    event.preventDefault();
    const element = linksArray.find((item) => {
        return item.className.includes('active');
    });
    element.classList.remove('font-size_active');
    this.classList.add('font-size_active');
    
    const book = document.getElementById('book');
    book.className = 'book';
    if (this.dataset.size) {
        book.classList.add(`book_fs-${this.dataset.size}`);
    }
}

const linksContent = document.querySelector('.book__control');
const links = linksContent.querySelectorAll('a');
const linksArray = Array.from(links);

links.forEach((item) => {
    item.addEventListener('click', replaceActive);
});