import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './list-item/ListItem'

function List({dataList}) {
  return (
    <ul className="list-group">
      {dataList.map(({id, name}) => <ListItem name={name} key={id} data-id={id} />)}
    </ul>
  )
}

List.propTypes = {
  dataList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
}

export default List
