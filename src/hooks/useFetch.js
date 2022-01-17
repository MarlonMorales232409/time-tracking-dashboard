import {useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [statusText, setStatusText] = useState(null);
  const [loader, setLoader] = useState(true)
  
  useEffect(() => {

    
    setData(null)
    setStatus(null)
    setStatusText(null)
    

    const getData = async () => { 
      let res = await fetch(url)
      
      if(res.ok){
        res = await res.json();
        setData(res)
        setLoader(false)
      }else{
        setStatus(res.status);
        setStatusText(res.statusText);
        setLoader(false)
      }
    }

    getData()

    
  }, [url])

  return {data, status, statusText, loader}
}
