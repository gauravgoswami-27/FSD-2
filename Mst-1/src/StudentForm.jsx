import {Stack,TextField,Button} from "@mui/material";
import {useState,Form} from 'react';
const StudentFeedback = ()=>{
const [Sname,setSname] = useState("");
const [Email,setEmail] = useState("");
const [message,setMessage] = useState("");
const [emerror,setEmr] = useState(false);
const [merror,setMer] = useState(false);

    const handleSubmit = ()=>{
        if(merror) console.log("Message is not 15 characters long");
        else{
        console.log(Sname);
        console.log(Email);
        console.log(message);}
    }
    const handleEmail = e=>{
    const val = e.target.value;
    setEmail(val);
    if(e.target.validity.valid){
        setEmr(false);
        
    }
    else {
        setEmr(true);
    }

}
    const handleSname = e=>{
        setSname(e.target.value);
    }
    const handeMessage = e =>{
        setMessage(e.target.value);
        if(e.target.value.length < 15) setMer(true);
        else {
            setMer(false);
            }
    }
     

    return(<>
    <form onSubmit={handleSubmit}>
        <Stack>
            <h2>Student Feedback Form</h2>
            <TextField label ="Name" required  value = {Sname} onChange={handleSname}/>
            <TextField label="Email" required  value = {Email} onChange={handleEmail} type = "email" error={emerror} helperText = {merror?"Enter Valid Email": " "}/>
            <TextField label="Message" required value = {message} onChange={handeMessage} error={merror} helperText ={merror?"Feedback should be alteast 15 characters":" "}/>
            <Button type="submit" variant="contained" disabled ={merror||emerror}>Submit Form</Button>
        </Stack>
    </form>
    </>

    );
}

export default StudentFeedback