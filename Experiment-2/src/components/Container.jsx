import Box from '@mui/material/Box';

export default function SimpleContainer() {
  return (
    <>
    <container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <div>Hello, <br /> This is a SPA (Single Page Application) made using ReactJS.</div>
        <div>Material UI library has been used for designing.</div>
      </Box>

    </container>
    </>
  );
}