import React from 'react'
import { useEffect } from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';
import Data from '../data/Data';
import Loading from '../loading/Loading';
import Error from '../error/Error';

export default function Test({ path }) {

  const [data, load, error] = useJsonFetch(path);

  return (
    <div className="row">
      {
        load ? <Loading /> : (error) ? <Error /> : <Data /> 
      }
    </div>
  )
}
