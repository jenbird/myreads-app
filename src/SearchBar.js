import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBar extends Component {

  state = {
    query: '',
    searchResults: []
  }


  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchResults(query);
  }

  updateSearchResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults.error) {
          this.setState({
            searchResults: []
          });
        } else {
          this.setState({
            searchResults: searchResults
          });
        }
      })
    }

    else {
      this.setState({
        searchResults: []
      })
    }
  }

  render() {

    const { shelfName } = this.props;

    return (

      <div>
        <div className = "search-books" >
        <div className = "search-books-bar" >

        <Link className = "close-search"
        to = "/" > Close < /Link>

      <div className = "search-books-input-wrapper" >

        <input
        type = "text"
        placeholder = "Search by title or author"
        value = {this.state.query}
        onChange = {(event) => this.updateQuery(event.target.value)}
        />
      </div>
      </div>

        <div className = "search-books-results" >
        <ol className = "books-grid">
          {this.state.searchResults
          .map(searchResults => {
            let shelf = 'none';
            this.props.books.map(book => (
              book.id === searchResults.id ? shelf = book.shelf : ''
            ))
            return (
              <li key = {searchResults.id} >
                <Book
                book={searchResults}
                updateShelf={this.props.updateShelf}
                currentShelf={shelf}
                />
              </li>
            )
        })
      }
        </ol>




        </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
