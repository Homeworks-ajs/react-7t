import React, { useRef } from 'react'
import Details from '../details/Details'
import List from '../list/List'


export default function Information() {
  const userRef = useRef({id: 1, name: undefined});

  const clickLoadData = (evt) => {
    const { id } = evt.target.dataset;
    const name = evt.target.textContent;
    userRef.current = {
      id, name
    };
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <List clickLoadData={clickLoadData} />
        </div>
        <div className="col">
          <Details userData={userRef} />
        </div>
      </div>

    </>

  )
}
