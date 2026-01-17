import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack} from '@mui/material';


export default function HomeFields() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <Stack spacing={2}>
                <TextField label="Email" type="email" slotProps={{ input: { sx: { bgcolor: 'white' } } }} />
                <TextField label="Name"  slotProps={{ input: { sx: { bgcolor: 'white' } } }} />
                <TextField label="Password" type="password" slotProps={{ input: { sx: { bgcolor: 'white' } } }} />
                <TextField  type="date" slotProps={{ input: { sx: { bgcolor: 'white' } } }} />
                


            </Stack>
        </Box>
    );
}
