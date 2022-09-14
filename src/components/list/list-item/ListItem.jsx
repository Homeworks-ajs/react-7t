import React from 'react'
import PropTypes from 'prop-types'

function ListItem({name, id, clickLoadData}) {
  return (
    <li className="list-group-item list-group-item-action" data-id={id} onClick={clickLoadData} >{name}</li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ListItem
