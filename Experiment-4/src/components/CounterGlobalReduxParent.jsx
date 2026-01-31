import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Button, Typography, Stack } from "@mui/material";

export default function CounterReduxParent({ cno }) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm" >
      <Box sx={{ bgcolor: '#2c3e50', borderRadius: 2, color: 'white',height:'100px' }}>
        <h3>{cno}: Redux State | Count:{count}</h3>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button 
            variant="contained" 
            sx={{ color: 'white' ,bgcolor: '#27ae60'}}
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increase
          </Button>
          <Button 
            variant="outlined" 
            sx={{ color: '#ecf0f1', borderColor: '#ecf0f1' }}
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrease
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}