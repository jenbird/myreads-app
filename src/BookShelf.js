import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BookShelf extends Component {

render() {

  const { shelfName } = this.props;

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
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                </li>
              ))}
              </ol>
          </div>
          </div>
          <div className="open-search">
            <Link to="/search">add book</Link>
        </div>
        </div>


    )
  }
}

export default BookShelf;
