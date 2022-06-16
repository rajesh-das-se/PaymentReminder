import { useState } from "react";
import axios from "axios";
const AddReminder = () => {
    const [yourname, setYourname]=useState("");
    const [customername, setCustomername]=useState("");
    const [customeremail, setCustomeremail]=useState("");
    const [balance, setBalance]=useState(0);
    const [description, setDescription]=useState("");
    const [lastdate, setLastdate]=useState(Date.now());

    const submitHandler=()=>{
        axios.post('/putdetails',{yourname,customername,customeremail,balance,description,lastdate});
        setYourname("");
        setCustomername("");
        setCustomeremail("");
        setBalance(0);
        setDescription("");
        setLastdate(Date.now());
    }

    return (
        <div className="container mt-3">
            <div class="input-group mb-3">
                <span class="input-group-text">Your Name</span>
                <input type="text" class="form-control" value={yourname} onChange={(e)=>{setYourname(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >Customer's Name</span>
                <input type="text" class="form-control" value={customername} onChange={(e)=>{setCustomername(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >Customer's Email</span>
                <input type="email" class="form-control" value={customeremail} onChange={(e)=>{setCustomeremail(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Balance</span>
                <input type="number" class="form-control" value={balance} onChange={(e)=>{setBalance(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Description</span>
                <input type="text" class="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Last Date</span>
                <input type="date" class="form-control" value={lastdate} onChange={(e)=>{setLastdate(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={submitHandler}>Add Reminder</button>
            </div>
        </div>
    )
}

export default AddReminder;