import React, { useRef, useState } from 'react'
import Details from '../details/Details'
import List from '../list/List'


export default function Information() {
  const [state, setState] = useState({id: null, name: null})

  const clickLoadData = (evt) => {
    
    const { id } = evt.target.dataset;
    const name = evt.target.textContent;

    setState({
      id, name
    });
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <List clickLoadData={clickLoadData} />
        </div>
        <div className="col">
          <Details userData={state} />
        </div>
      </div>

    </>

  )
}
