import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function Check(){
    return(
    <>
    <Box sx={{mt:4}}>
        <Checkbox size="medium" sx={{bgcolor:'white'}} />
        <div>I have read it all.</div>
    </Box>

        
    </>

    );
}