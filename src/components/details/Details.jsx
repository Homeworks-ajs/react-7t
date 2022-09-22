import React from 'react'
import PropTypes from 'prop-types'
import Card from './card/Card'

function Details({userData}) {

  return (
    userData.id ? <Card {...userData}/> : null
  )
}

Details.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
}

export default Details
