import React from 'react'
import { Container,Box, TextField, Button } from '@mui/material'

const HeaderPage = () => {
  return (
    <>
    <Container maxWidth="xl" sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Box>
            <Button variant="outlined">Games</Button>
        </Box>
        <Box>
            <TextField variant='filled' label="Search" />
        </Box>
    </Container>
    </>
  )
}

export default HeaderPage