// import { useDispatch, useSelector } from "react-redux"; //npm install redux react-redux

// export default  function CounterReduxParent(props) {
//     // useSelector : to read state from the Redux store
//   const count = useSelector(state => state.count);
  
//     // useDispatch : to dispatch actions to the Redux store
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h3>{props.cno} : Gloabl State (Redux) Count: {count}</h3>

//       <button onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increase
//       </button>

//       <button onClick={() => dispatch({ type: "DECREMENT" })}>
//         Decrease
//       </button>
//     </div>
//   );
// }


import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Button, Typography, Stack } from "@mui/material";

export default function CounterReduxParent({ cno }) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Box sx={{ bgcolor: '#2c3e50', p: 3, borderRadius: 2, color: 'white' }}>
        <Typography variant="h6">
          {cno} : Redux Count: {count}
        </Typography>

        <Stack direction="row" spacing={2} mt={2} justifyContent="center">
          <Button 
            variant="contained" 
            sx={{ bgcolor: '#27ae60', '&:hover': { bgcolor: '#219150' } }}
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increase
          </Button>
          <Button 
            variant="outlined" 
            sx={{ color: '#ecf0f1', borderColor: '#ecf0f1', '&:hover': { borderColor: '#bdc3c7' } }}
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrease
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}