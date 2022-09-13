import React from 'react'
import PropTypes from 'prop-types'

function ListItem({name, clickLoadData}) {
  return (
    <li className="list-group-item list-group-item-action" onClick={clickLoadData}>{name}</li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default ListItem
