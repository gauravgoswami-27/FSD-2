import React from 'react';
import {Box,Link} from '@mui/material';
import HeavyComponent from './Heavy';
const Contactpage = ()=>{
        return (
        <>
        <HeavyComponent />
       You are viewing Contact Page
        <Box component='section' sx={{mt:2}}>
            <Link href='https://github.com/gauravgoswami-27/FSD-2' underline='hover' target='_blank' rel='noopener noreferrer'>GitHub Repo</Link>
        </Box>
        </>
    )

}
export default Contactpage