import { Box, Button } from '@mui/material';
import React,{useState} from 'react';
import CustomList from './CustomList';


const Titles = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
      <Box>
      <Button></Button>
      <Box>
          <CustomList />
      </Box>
    </Box>
    </>
  )
}

export default Titles