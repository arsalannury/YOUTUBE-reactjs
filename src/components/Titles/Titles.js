import { Box, Button } from '@mui/material';
import React,{useState} from 'react';
import CustomList from './CustomList';


const Titles = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
      <Box>
      <Button onClick={() => setOpen(!open)}>List</Button>
      <Box>
          <CustomList open={open} />
      </Box>
    </Box>
    </>
  )
}

export default Titles