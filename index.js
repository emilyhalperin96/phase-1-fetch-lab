function fetchBooks() {
 return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(books => renderBooks(books));
}
//call renderBooks function and pass in the JSONified data as the argument

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); })
