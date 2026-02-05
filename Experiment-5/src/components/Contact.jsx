import React from 'react';
import {Box,Link} from '@mui/material';
import HeavyComponent from './Heavy';
const Contactpage = ()=>{
    const heavy = ()=>{
        let i=0;
        for(i=0;i<1000000;i++){
            
        }
        console.log(`Contact page loaded lazily.`);
    }
    heavy()
    heavy()
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