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
            <div>
                <input type="text" placeholder="Customer Name"/>
            </div>
            <div>
                <input type="text" placeholder="Customer Email" className="w-full border-gray-500"/>
            </div>
            <div>
                <input type="text" placeholder="Balance"/>
            </div>
            <div>
                <input type="text" placeholder="Describe the purpuse"/>
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={submitHandler}>Add Reminder</button>
            </div>
        </div>
    )
}

export default AddReminder;