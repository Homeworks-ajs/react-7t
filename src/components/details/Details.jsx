import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Card from './card/Card'
import LoadPlaceholder from './load-placeholder/LoadPlaceholder';

function Details({userData}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if(user.id) {
      console.log(1)
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userData.current.id}.json`)
      .then(response => response.json())
      .then(data => setUser(data))   
    }
  }, [userData.current.id])

  return (
    userData.current.id ? <Card {...user}/> : <LoadPlaceholder />
  )
}

Details.propTypes = {

}

export default Details
