import React from 'react';
import {Container,Box,Stack} from '@mui/material';
const Homepage = ()=>
{
    return(
        <>
        <Stack spacing={2} direction={'column'} alignItems={'center'}
        sx={{display: "flex" ,justifyContent: "center"}}>
        <Box component="section" sx={{ p: 2, border: '1px solid grey' }} maxWidth="md">
            Welcome to experimental demonstration of <b>lazy loading</b>.
        </Box>
        <Box maxWidth='md' sx={{border:'2px solid green'}} >
            In lazy loading , heavier components are loaded only when those components are accessed by the user/client.<br />
            This is done to reduce the initial loading time of website, so that user doesn't face any delay and website doesn't feel slow.<br />

        </Box>
        <Box>
            <b>Contact</b> and <b>About</b> are loaded lazily.
        </Box>
        </Stack>
        </>
    )
}

export default Homepage;