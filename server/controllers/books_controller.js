const books = []
let id = 0

module.exports = {
  read: (req, res) => {
    res.status(200).send(books)
  },

  create: (req, res) => {
    const { title, author } = req.body
    const book = {
      id: id,
      title: title,
      author: author
    }
    books.push(book)
    id = id + 1
    res.status(200).send(books)
  },

  // update: (req, res) => {
  //   const { id } = req.params
  //   const newBookDetails = req.body
  //   const book = books.find(elem => elem.id === +id)
  //   const updatedBook = Object.assign({}, book, newBookDetails)
  // }

  update: (req, res) => {
    const { id } = req.params
    const { title, author } = req.body
    const book = books.find(elem => elem.id === +id)
    console.log(book)
    if (!book) {
      res.status(500).send('No book found')
    } else {
      const newBook = {
        id: +id,
        title: title,
        author: author
      }
      books.splice(id, 1, newBook)
      res.status(200).send(books)
    }
  },

  delete: (req, res) => {
    const { id } = req.params
    const book = books.find(elem => elem.id === +id)
    if (!book) {
      res.status(500).send('No book found')
    } else {
      books.splice(id, 1)
      res.status(200).send(books)
    }
  }
}