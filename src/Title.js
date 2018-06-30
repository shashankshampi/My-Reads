// Creating title of book app
import React from 'react';
import PropTypes from 'prop-types'
const Title = (props) => {
  return(
     <div className="list-books-title">
       <h1>{props.name}</h1>
     </div>
  )
}
Title.propTypes = {
    name: PropTypes.string.isRequired
    }
Title.defaultProps = {
    name: 'My Reads - A Book Tracking Application'
}
export default Title
