// Self for storing the books for refrences
import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {
  static propTypes = {
    ChangeSh : PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

  render() {
        const { title, books, ChangeSh  } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            <Book key={index} book={book} ChangeSh={ChangeSh } />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Shelf
