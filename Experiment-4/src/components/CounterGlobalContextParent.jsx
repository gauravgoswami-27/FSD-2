import { useContext } from "react";
import { CounterContext} from "./context/CounterGlobalContextAPI";
import Button from "@mui/material/Button";
import {Container,Box, Stack} from "@mui/material";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
    <Container maxWidth="sm">
    <Box sx={{ bgcolor: '#4a9d9b', height: '100px' ,borderRadius:2}}>
      <h3>{props.cno} : Gloabl State (ContextAPI) Count: {count}</h3>

     <Stack direction={"row"} spacing={2} justifyContent={"center"}>
       <Button variant="outlined" 
       sx ={{color:'white', bgcolor: '#8b9239'}}
       onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      <Button variant="contained" 
      sx ={{bgcolor: '#8b9239'}}
       onClick={() => setCount(count - 1)}>
        Decrease
      </Button>
     </Stack>
    </Box>
    </Container>
    </>
  );
}