import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Card from './card/Card'

function Details({userData}) {

  return (
    userData.id ? <Card {...userData}/> : null
  )
}

Details.propTypes = {

}

export default Details
