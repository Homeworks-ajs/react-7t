import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PlaceholderParagraph from '../placeholders/PlaceholderParagraph';

export default function Card({ id }) {
  const [user, setUser] = useState({details: {}});

  useEffect(() => {
    setUser({details:{}})

    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [id])

  return (
    <div className="card">
      {user.avatar ? <img src={user.avatar} className="card-img-top" /> : <img className="card-img-top placeholder" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{user.name || <PlaceholderParagraph />}</h5>
        <p className="card-text">City: {user.details.city || <PlaceholderParagraph />}</p>
        <p className="card-text">Company: {user.details.company || <PlaceholderParagraph />}</p>
        <p className="card-text">Position: {user.details.position || <PlaceholderParagraph />}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  details: PropTypes.shape({
    city: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  })
}

