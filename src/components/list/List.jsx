import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ListItem from './list-item/ListItem'

function List({clickLoadData}) {
  const [state, setState] = useState([]);
  
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
      .then(response => response.json())
      .then(data => setState(data))
  }, [])

  return (
    <ul className="list-group">
      {state.map(({id, name}) => <ListItem name={name} id={id} key={id} clickLoadData={clickLoadData}/>)}
    </ul>
  )
}

List.propTypes = {
  clickLoadData: PropTypes.func.isRequired
}

export default List
