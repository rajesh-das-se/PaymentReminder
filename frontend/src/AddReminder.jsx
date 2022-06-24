import { useState } from "react";
import axios from "axios";
import validator from "validator";
const AddReminder = (props) => {
    const {clickCount, setclickCount}=props;
    const [reminderInfo, setReminderInfo]=useState({
        yourname:"",
        customername:"",
        customeremail:"",
        balance:0,
        description:"",
        lastdate:Date.now()
    })
    const submitHandler=()=>{
        if(reminderInfo.yourname===""){
            alert("Your Name filled can't be empty");
            return;
        }
        if(reminderInfo.customername===""){
            alert("Customer Name filled can't be empty");
            return;
        }
        if(!validator.isEmail(reminderInfo.customeremail)){
            alert("Enter a Valid email");
            return;
        }
        if(reminderInfo.balance===0){
            alert("balance can't be 0");
            return;
        }
        if(reminderInfo.description===""){
            alert("Please enter a description of your balance");
            return;
        }
        if(reminderInfo.lastdate<Date.now()){
            alert("Don't Enter previous dates");
            return;
        }
        axios.post('/putdetails',reminderInfo)
        .then((res)=>{
            alert(res.data);
        }).catch((e)=>{
            alert(e.message);
        })
        setReminderInfo({
            yourname:"",
            customername:"",
            customeremail:"",
            balance:0,
            description:"",
            lastdate:Date.now()
        });
        setclickCount(clickCount+1);
    }

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setReminderInfo({...reminderInfo,[name]:value});
    }

    return (
        <div className="container mt-3">
            <div className="input-group mb-3">
                <span className="input-group-text">Your Name</span>
                <input type="text" className="form-control" name="yourname" value={reminderInfo.yourname} onChange={onChangeHandler} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Customer's Name</span>
                <input type="text" className="form-control" name="customername" value={reminderInfo.customername} onChange={onChangeHandler} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div> 
            <div className="input-group mb-3">
                <span className="input-group-text" >Customer's Email</span>
                <input type="email" className="form-control" name="customeremail" value={reminderInfo.customeremail} onChange={onChangeHandler} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Balance</span>
                <input type="number" className="form-control" name="balance" value={reminderInfo.balance} onChange={onChangeHandler} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Description</span>
                <input type="text" className="form-control" name="description" value={reminderInfo.description} onChange={onChangeHandler} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last Date</span>
                <input type="date" className="form-control" name="lastdate" value={reminderInfo.lastdate} onChange={onChangeHandler} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={submitHandler}>Add Reminder</button>
            </div>
        </div>
    )
}

export default AddReminder;