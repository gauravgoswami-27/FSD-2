import { Rating } from "@mui/material";

export default function Myrating(){
    return(
        <>
        <div>Rate Material UI componets usage.</div>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </>
    );
}