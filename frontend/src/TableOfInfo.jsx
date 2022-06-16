import axios from "axios";

const TableOfInfo = (props) => {
    try{
    const allInfo = props.allInfo;
    console.log(allInfo);
    const dt =(d)=>{
        const d1=new Date(Date.parse(d));
        return d1.toDateString();
    } 
    const reminderHandler=(element)=>{
        const id=element.target.getAttribute("id");
        axios.post('/sendreminder',{_id:id})
        .then((res)=>{
            alert(res.data.message);
        })
    }

    return (
        <table className="table table-striped">
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
            <tbody>
                {
                    allInfo.map((val) => {
                        return (
                            <tr>
                                <td>{val.customername}</td>
                                <td>{val.customeremail}</td>
                                <td>{val.balance}</td>
                                <td>{val.description}</td>
                                <td>{dt(val.lastdate)}</td>
                                <td>
                                    <div>
                                        <button id={val._id} className="btn btn-success" onClick={(e)=>{reminderHandler(e)}}>Send Reminder</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    )
    }catch(e){
        return(
            <table className="table table-striped">
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