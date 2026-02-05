import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Homepage from './Home.jsx';
import { Suspense } from 'react';
import React from 'react';
import { Container } from '@mui/material';

const Contactpage = React.lazy(()=> import("./Contact"));
const Aboutpage = React.lazy(()=> import("./About"));
export default function Singlepageapp(){

    return(
        <>
        <BrowserRouter>
        <Container maxWidth='sm' component={'nav'} sx={{border:'1px solid blue' ,textAlign:'center',mb:2}}>
            <nav>
            <h2>
            <Link  to="/" >Home</Link> | {" "}
            <Link to='/contact' >Contact</Link> | {" "}
            <Link to='/about' >About</Link>
            </h2>
        </nav>
        </Container>

        <Suspense fallback={<div>Loading page....</div>}>
            <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/about" element={<Aboutpage />} />
        </Routes>
        </Suspense>
        </BrowserRouter>
        </>
    )
};