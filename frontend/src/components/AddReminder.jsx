import { useState } from "react";
import axios from "axios";
import validator from "validator";
import { User, Mail, Wallet, ReceiptText, Check, BrushCleaning } from "lucide-react"
import TimeSelector from "./TimeSelector";


const AddReminder = () => {
    const [reminderInfo, setReminderInfo] = useState({
        name: "",
        email: "",
        balance: 0,
        description: "",
        frequency: "daily",
        time: {
            monthday: 1,
            weekday: 1,
            hour: 0,
            minute: 0,
        }
    });


    const submitHandler = () => {
        alert(reminderInfo.name);
        // if (reminderInfo.yourname === "") {
        //     alert("Your Name filled can't be empty");
        //     return;
        // }
        // if (reminderInfo.customername === "") {
        //     alert("Customer Name filled can't be empty");
        //     return;
        // }
        // if (!validator.isEmail(reminderInfo.customeremail)) {
        //     alert("Enter a Valid email");
        //     return;
        // }
        // if (reminderInfo.balance === 0) {
        //     alert("balance can't be 0");
        //     return;
        // }
        // if (reminderInfo.description === "") {
        //     alert("Please enter a description of your balance");
        //     return;
        // }
        // if (reminderInfo.lastdate < Date.now()) {
        //     alert("Don't Enter previous dates");
        //     return;
        // }
        // axios.post('/putdetails', reminderInfo)
        //     .then((res) => {
        //         alert(res.data);
        //     }).catch((e) => {
        //         alert(e.message);
        //     })
        // setReminderInfo({
        //     yourname: "",
        //     customername: "",
        //     customeremail: "",
        //     balance: 0,
        //     description: "",
        //     lastdate: Date.now()
        // });
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setReminderInfo((prev) => { return { ...prev, [name]: value } });
    }

    const cleanupHandler = () => {
        setReminderInfo({
            name: "",
            email: "",
            balance: 0,
            description: "",
            frequency: "daily",
            time: {
                monthday: 1,
                weekday: 1,
                hour: 0,
                minute: 0,
            }
        })
    }

    return (
        <div className="p-10 w-full">

            {/* Form  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center border rounded px-3 py-2">
                    <User size={16} className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full outline-none"
                        onChange={onChangeHandler}
                        value={reminderInfo.name}
                    />
                </div>
                <div className="flex items-center border rounded px-3 py-2">
                    <Mail size={16} className="text-gray-500 mr-2" />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="w-full outline-none"
                        onChange={onChangeHandler}
                        value={reminderInfo.email}
                    />
                </div>
                <div className="flex items-center border rounded px-3 py-2">
                    <Wallet size={16} className="text-gray-500 mr-2" />
                    <input
                        type="number"
                        placeholder="Balance"
                        name="balance"
                        className="w-full outline-none"
                        onChange={onChangeHandler}
                        value={reminderInfo.balance}
                    />
                </div>
                <div className="flex items-center border rounded px-3 py-2">
                    <ReceiptText size={16} className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Describe the purpuse"
                        name="description"
                        className="w-full outline-none"
                        onChange={onChangeHandler}
                        value={reminderInfo.description}
                    />
                </div>
            </div>

            {/* Options */}
            <div className="flex justify-between items-center">
                {/* Frequency  */}
                <div className="">
                    <label className="font-semibold block mb-1">Reminder Freqency</label>
                    <div className="flex flex-col md:flex-row space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="frequency"
                                value="daily"
                                checked={reminderInfo.frequency === "daily"}
                                onChange={onChangeHandler}
                            />
                            Daily
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="frequency"
                                value="weekly"
                                checked={reminderInfo.frequency === "weekly"}
                                onChange={onChangeHandler}
                            />
                            Weekly
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="frequency"
                                value="monthly"
                                checked={reminderInfo.frequency === "monthly"}
                                onChange={onChangeHandler}
                            />
                            Monthly
                        </label>
                    </div>
                </div>

                {/* Time  */}
                <div className="">
                    <TimeSelector frequency={reminderInfo.frequency} setReminderInfo={setReminderInfo} />
                </div>

                {/* Submit Button  */}
                <div className="flex space-x-4">
                    <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={submitHandler}><Check /></button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={cleanupHandler}><BrushCleaning /></button>
                </div>
            </div>
        </div>
    )
}

export default AddReminder;