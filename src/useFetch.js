import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;








/* const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {
        headers: {
          'X-Master-Key': '$2b$10$VCQkcumHB0O9nQDxjkbPCeNoP4IjPvVQ4zwY.egwHl23H0etzX0ti',
          'X-Access-Key': '$2b$10$ZkgBm0nHfvyPcyj3QSG3Yezs2E2yOHFHrIc3CrffiHO8hfiHkw7Dm'
        },
        signal: abortCont.signal
      })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}

export default useFetch; */


/* const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          setData(JSON.parse(req.responseText));
          setIsPending(false);
          setError(null);
        } else {
          setError(req.statusText);
          setIsPending(false);
        }
      }
    };

    req.open("GET", url, true);
    req.setRequestHeader("X-Master-Key", "<YOUR_API_KEY>");
    req.send();

    // abort the fetch
    return () => req.abort();
  }, [url])

  return { data, isPending, error };
} */




/* https://api.jsonbin.io/v3/b/63d4a3edc0e7653a0562a513"
"$2b$10$oLXctw.NBvMAbXPlXBUt..uJhQt0ZDXibPubGMDqdlNRg0Qq5Bkni",  // master key
"$2b$10$ZkgBm0nHfvyPcyj3QSG3Yezs2E2yOHFHrIc3CrffiHO8hfiHkw7Dm"// api key
 */



/* const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch; */