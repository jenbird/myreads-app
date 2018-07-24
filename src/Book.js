import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Book extends Component {

  state = {
      books: [],
    }

render() {

  const { book } = this.props;
  let thumbnail = this.props.book.imageLinks ?
                  this.props.book.imageLinks.smallThumbnail:
                  '';

    return (
      <div>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                  style={{ width: 128, height: 193, backgroundImage: `url(${
                            book.imageLinks.smallThumbnail
                          })`}}></div>
                  <div className="book-shelf-changer">
                  <select
                        value={book.shelf}
                        onChange={(event) =>
                          this.props.updateShelf(this.props.book, event.target.value)
                        }
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead"> Want to Read</option>
                        <option value="read"> Read</option>
                        <option value="none"> None</option>
                      </select>
                      </div>

                    </div>
                    </div>

                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
          <div className="open-search">
            <Link to="/search">add book</Link>
        </div>
        </div>


    )
  }
}

export default Book;
