function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  if (!bookList) {
      console.error("Element with ID 'book-list' not found");
      return;
  }

  bookList.innerHTML = ""; // Clear previous content

  books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book.name;
      bookList.appendChild(li);
  });
}

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
      .then(response => response.json())
      .then(data => renderBooks(data))
      .catch(error => console.error("Error fetching books:", error));
}

document.addEventListener("DOMContentLoaded", fetchBooks);






