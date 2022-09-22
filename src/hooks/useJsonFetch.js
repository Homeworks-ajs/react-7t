import { useEffect, useState } from "react";

const useJsonFetch = (url, opts = {}) => {

  const result = [null, true, null]
  const [state, setState] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7070" + url, opts)
      .then(async (data) => {

        if (data.status === 200) {
          result[0] = await data.json();
        }

        if (!data.ok) {
          result[2] = data.statusText;
        }

        result[1] = false;

        setState(result)
      }).catch(e => setError(e))

  }, [url])

  if(error) {
    return error;
  }
  return !state.length ? result : state;
}

export default useJsonFetch;