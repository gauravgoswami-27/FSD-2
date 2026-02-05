import {Container} from '@mui/material';
import HeavyComponent from './Heavy';

const Aboutpage = ()=>{

return(
    <>
    <HeavyComponent />
    <h4>
        Hello , my name is Gaurav.<br />
        This is an experiment to demonstrate lazy loading in an react application.
    </h4>
    <Container sx={{mt:2}}>
        Initialy front-end server sends only Home page.<br />
        <b>Contact</b> and <b>About</b> pages are loaded into client only when those components are accessed.
    </Container>
    </>
)
}

export default Aboutpage;