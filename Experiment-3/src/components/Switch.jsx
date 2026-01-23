import { FormControlLabel, Switch } from '@mui/material';


export default function DefaultSwitch() {
  return (
    <>
    <FormControlLabel  control={<Switch defaultChecked secondary='secondary' />} label="Agree to terms and services." />
    </> 
  );
}