import React, { useState, useEffect } from 'react'
import PlaceholderParagraph from '../placeholders/PlaceholderParagraph';

export default function Card({ id, name }) {
  const [user, setUser] = useState({details: {}});

  useEffect(() => {
    setUser({details:{}})

    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [id, name])

  return (
    <div className="card">
      {user.avatar ? <img src={user.avatar + `?random=${id}`} className="card-img-top" /> : <img className="card-img-top placeholder" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{user.name || <PlaceholderParagraph />}</h5>
        <p className="card-text">City: {user.details.city || <PlaceholderParagraph />}</p>
        <p className="card-text">Company: {user.details.company || <PlaceholderParagraph />}</p>
        <p className="card-text">Position: {user.details.position || <PlaceholderParagraph />}</p>
      </div>
    </div>
  )
}
