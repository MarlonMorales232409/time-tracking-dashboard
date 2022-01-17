import { ErrorPage } from "./components/ErrorPage";
import { TimeTracket } from "./components/TimeTracket";
import { useFetch } from "./hooks/useFetch"
import React, { useState, useEffect } from 'react';
import "./components/Loader"
import { Loader } from "./components/Loader";


const App = () => {

  const [info, setInfo] = useState(null);
  const [state, setState] = useState(null)
  const [stateText, setStateText] = useState(null)
  const [load, setLoad] = useState(true)
  let res = null;

  let url = "http://localhost:5000/list";
  res = useFetch(url);

  useEffect(() => {
    setInfo(res.data);
    setState(res.status);
    setStateText(res.statusText);
    setLoad(res.loader);

  }, [info,res])


  return (
    <>
    {load && <Loader />}
    {
      info 
      ? (!load && info && <TimeTracket data={info} /> )
      : (!load && state && stateText && <ErrorPage status={state} statusText={stateText} />)
    }
    
    </>
  )
}

export default App
