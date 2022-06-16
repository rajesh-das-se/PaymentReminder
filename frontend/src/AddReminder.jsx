import { useState } from "react";
import axios from "axios";
import validator from "validator";
const AddReminder = (props) => {
    const [yourname, setYourname]=useState("");
    const [customername, setCustomername]=useState("");
    const [customeremail, setCustomeremail]=useState("");
    const [balance, setBalance]=useState(0);
    const [description, setDescription]=useState("");
    const [lastdate, setLastdate]=useState(Date.now());

    const submitHandler=()=>{
        if(yourname===""){
            alert("Your Name filled can't be empty");
            return;
        }
        if(customername===""){
            alert("Customer Name filled can't be empty");
            return;
        }
        if(!validator.isEmail(customeremail)){
            alert("Enter a Valid email");
            return;
        }
        if(balance===0){
            alert("balance can't be 0");
            return;
        }
        if(description===""){
            alert("Please enter a description of your balance");
            return;
        }
        if(lastdate<Date.now()){
            alert("Don't Enter previous dates");
            return;
        }
        axios.post('/putdetails',{yourname,customername,customeremail,balance,description,lastdate})
        .then((res)=>{
            alert(res.data);
        }).catch((e)=>{
            alert(e.message);
        })
        setYourname("");
        setCustomername("");
        setCustomeremail("");
        setBalance(0);
        setDescription("");
        setLastdate(Date.now());
        props.setclickCount(props.clickCount+1);
    }

    return (
        <div className="container mt-3">
            <div className="input-group mb-3">
                <span className="input-group-text">Your Name</span>
                <input type="text" className="form-control" value={yourname} onChange={(e)=>{setYourname(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Customer's Name</span>
                <input type="text" className="form-control" value={customername} onChange={(e)=>{setCustomername(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Customer's Email</span>
                <input type="email" className="form-control" value={customeremail} onChange={(e)=>{setCustomeremail(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Balance</span>
                <input type="number" className="form-control" value={balance} onChange={(e)=>{setBalance(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Description</span>
                <input type="text" className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last Date</span>
                <input type="date" className="form-control" value={lastdate} onChange={(e)=>{setLastdate(e.target.value)}} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={submitHandler}>Add Reminder</button>
            </div>
        </div>
    )
}

export default AddReminder;