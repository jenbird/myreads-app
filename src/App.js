import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import './App.css'
import MainPage from './MainPage.js'
import SearchBar from './SearchBar.js'


class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    }
  )
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
    console.log('update worked!');
  }


  render() {
console.log(this.state.books);


    return (
      <div className="app">
        <div>
      <MainPage
        books={this.state.books}
        updateShelf={this.updateShelf}
        />
</div>

<div>
          <Route exact path="/search" render={() => (
            <SearchBar onChangeShelf={this.updateShelf}/>
          )} />
</div>

    </div>

)
  }
}

export default App;
