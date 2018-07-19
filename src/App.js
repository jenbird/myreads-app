import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
//import {Link} from 'react-router-dom'
//import { Route } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf.js'

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
    console.log('books worked!');
  }

updateShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
		BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
    console.log('update worked!');
}


  render() {
    const {books} = this.state;

    return (
      <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          <BookShelf
            shelfName="Currently Reading"
            books={books.filter(book => book.shelf === "currentlyReading")}
            changeShelf={this.updateShelf} />
          <BookShelf
            shelfName="Want to read"
            books={books.filter(book => book.shelf === "wantToRead")}
            changeShelf={this.updateShelf} />
          <BookShelf
            shelfName="Want to read"
            books={books.filter(book => book.shelf === "read")}
            changeShelf={this.updateShelf} />


      </div>

    </div>
  </div>
)
  }
}

export default App;
