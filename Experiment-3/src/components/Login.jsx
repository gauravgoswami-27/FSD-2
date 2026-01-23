import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button, Typography } from '@mui/material';

export default function Login() {
    return (
        <Box
            component="form"
            sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
            noValidate
        >
            <Stack spacing={2} sx={{ width: '30ch' }}>
                <Typography variant="h5">Login</Typography>
                
                <TextField 
                    label="Email" 
                    type="email" 
                    slotProps={{ input: { sx: { bgcolor: 'white' } } }} 
                />
                
                <TextField 
                    label="Password" 
                    type="password" 
                    slotProps={{ input: { sx: { bgcolor: 'white' } } }} 
                />

                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Stack>
        </Box>
    );
}