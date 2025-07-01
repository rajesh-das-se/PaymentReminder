import axios from "axios";

const TableOfInfo = (props) => {
    console.log(props)
    try {
        const allInfo = props.allInfo;
        console.log(allInfo);
        const dt = (d) => {
            const d1 = new Date(Date.parse(d));
            return d1.toDateString();
        }
        const reminderHandler = (event) => {
            const id = event.currentTarget.id;
            console.log(id)
            axios.post('/sendreminder', { _id: id })
                .then((res) => {
                    console.log(res.data.message);
                })

            props.setclickCount(props.clickCount+1);
        }

        const removeHandler = (event) => {
            //Note from Rajesh: Don't use event.target.id
            //it will return empty string most of the time
            //use event.currentTarget.id 
            // The event.target is always the deepest element clicked, 
            //while event.currentTarget or this will point to 
            //the element to which the handler is bound,
            // or to the element that the delegate selector matched.
            const id=event.currentTarget.id;
            console.log(id);
            axios.post('/remove',{_id:id})
            .then((res)=>{
                console.log(res.data.message);
            })
            .catch((error)=>{
                console.log(error.message)
            })
            props.setclickCount(props.clickCount+1);//whenever user click remove button the page will request for new date after the removal
        }

        return (
            <table className="table table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Balance</th>
                        <th>Description</th>
                        <th>Last Date</th>
                        <th>Send Reminder</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allInfo.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{val.customername}</td>
                                    <td>{val.customeremail}</td>
                                    <td>{val.balance}</td>
                                    <td>{val.description}</td>
                                    <td>{dt(val.lastdate)}</td>
                                    <td>
                                        <button className="btn btn-success" id={val._id} onClick={reminderHandler}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" id={val._id} onClick={removeHandler} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    } catch (e) {
        return (
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Balance</th>
                        <th>Description</th>
                        <th>Last Date</th>
                        <th>Send Reminder</th>
                    </tr>
                </thead>
            </table>
        )
    }

}

export default TableOfInfo;