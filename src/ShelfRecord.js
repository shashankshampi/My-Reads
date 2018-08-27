// Self for storing the books for refrences
import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ShelfRecord extends Component {
  render() {
        const { title, books, ChangeSh  } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {(books.map((bk, i) => (
                            <Book key={i} book={bk} ChangeSh={ChangeSh } />
                        )))
                        }
                    </ol>
                </div>
            </div>
        )
    }
    static propTypes = {
    ChangeSh : PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
}
export default ShelfRecord
