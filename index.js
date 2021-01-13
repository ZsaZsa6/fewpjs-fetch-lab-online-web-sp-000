function fetchBooks() { 
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json))

}


function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  // return fetchBooks
})


// .then((response) => {
//   return response.json()
// })
// .then((data) => {
//   // Work with JSON data here
//   console.log(data)
// })



// fetch('https://anapioficeandfire.com/api/books')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     // Work with JSON data here
//     console.log(data)
//   })
