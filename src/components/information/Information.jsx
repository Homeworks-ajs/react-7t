import React, { useEffect, useState } from 'react'
import Details from '../details/Details'
import List from '../list/List'


export default function Information() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then(response => response.json())
    .then(data => setState(data))
  }, [])

  return (
    <>
      <List dataList={state} />
    </>

  )
}
