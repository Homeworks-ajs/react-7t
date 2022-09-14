import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ name, avatar, details }) {
  
  return (
    <div className="card">
      <img src={avatar} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">City: {details.city}</p>
        <p className="card-text">Company: {details.company}</p>
        <p className="card-text">Position: {details.position}</p>
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

