import React from 'react'
import PropTypes from 'prop-types'

function ListItem({name}) {
  return (
    <li className="list-group-item">{name}</li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default ListItem
