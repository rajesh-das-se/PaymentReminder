import { useEffect , useState} from "react";
import axios from "axios";

const TableOfInfo=()=>{

    const [allInfo, setallInfo] = useState(undefined);

    const d=new Date();
    const dt=d.toDateString();
    useEffect(() => {
        const f=async()=>{
            const info=await axios.get('/getdetails');
            setallInfo(info.data);
        }
        f();
        
    }, []);
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
            <tbody>
                <tr>
                    <td>Rajesh Das</td>
                    <td>rd1585700@gmail.com</td>
                    <td>750</td>
                    <td>huhyui</td>
                    <td>{dt}</td>
                    <td>
                        <div>
                            <button className="btn btn-success">Send Reminder</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableOfInfo;