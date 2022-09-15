import { LinearProgress } from '@mui/material';
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useQuery } from 'react-query';

const  fetchData = () => {
    return axios.get("http://localhost:4000/aboutUs")
}

const AboutUsPage = () => {

    const [enabledCheck,setEnabled] = useState(false);

    useEffect(callback => {
      setEnabled(true);
    },[])

    const {isLoading,isError,data} = useQuery('about-us',fetchData,{enabled:enabledCheck});

    if(isLoading) {
        return <LinearProgress />
    }

    if(isError) {
        setTimeout(callback => {window.location.reload()},3000)
        return <h1>data has not been loaded</h1>
    }

  return (
    <>
    
    </>
  )
}

export default React.memo(AboutUsPage);