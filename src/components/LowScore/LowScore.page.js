import React from 'react';
import { useLowScores } from '../custumHooks/useLowScores';


const LowScorePage = ({lowIds}) => {

   const [one] = useLowScores(lowIds) 

   console.log(one);
  return (
    <>
    
    </>
  )
}

export default LowScorePage