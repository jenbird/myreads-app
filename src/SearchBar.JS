import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book.js'


class SearchBar extends Component {

  state = {
  		query: '',
      searchResults: []
    }


updateQuery = (query) => {
  	   this.setState({ query: query })
       this.updateSearchResults(query);
   }

updateSearchResults = (query) => {
  if (query) {
  BooksAPI.search(query).then((searchResults) => {
    if (searchResults.error) {
      this.setState({ searchResults: [] });
    } else {
      this.setState({ searchResults: searchResults });
    }
})
} else {
  this.setState({ searchResults: [] })
}
}

render() {

      /*let searchResults = []
      let books = []


    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      searchResults = books.filter((book) => match.test(book.title))
    } else {
      this.setState({searchResults: searchResults})
    }


    //searchResults.sort(sortBy('book.title'));
*/

    return (

      <div>
      <div className="search-books">
        <div className="search-books-bar">

          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper">

            <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults
              .map(searchResults => (

            <li key={searchResults.id}>
            <Book
            book={searchResults}
            />
            </li>
          ))}
          </ol>



</div>
</div>
</div>
);
  }
}

export default SearchBar;
