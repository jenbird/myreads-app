import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
//import { Route } from 'react-router-dom'


class BookShelf extends Component {

render() {

  const { books, shelfName } = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                  style={{ width: 128, height: 193, backgroundImage: `url(${
                            book.imageLinks.smallThumbnail
                          })`}}></div>
                  <div className="book-shelf-changer">

                    </div>
                    </div>
                    </div>
                </li>
              ))}
              </ol>
          </div>
          </div>
          </div>


    )
  }
}

export default BookShelf;
