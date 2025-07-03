import axios from "axios";
import { Trash, Pencil } from "lucide-react"

const TableOfInfo = (props) => {

    const sampleData = [
        {
            name: "Rajesh",
            email: "rajesh@gmail.com",
            balance: 3000,
            description: "Consultation",
            frequency: "Daily",
            remindertime: ""
        }
    ]

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

            props.setclickCount(props.clickCount + 1);
        }

        const removeHandler = (event) => {
            //Note from Rajesh: Don't use event.target.id
            //it will return empty string most of the time
            //use event.currentTarget.id 
            // The event.target is always the deepest element clicked, 
            //while event.currentTarget or this will point to 
            //the element to which the handler is bound,
            // or to the element that the delegate selector matched.
            const id = event.currentTarget.id;
            console.log(id);
            axios.post('/remove', { _id: id })
                .then((res) => {
                    console.log(res.data.message);
                })
                .catch((error) => {
                    console.log(error.message)
                })
            props.setclickCount(props.clickCount + 1);//whenever user click remove button the page will request for new date after the removal
        }

        return (
            <div className="p-10 overflow-x-auto">
                <table className="w-full border-separate border border-spacing-0 rounded-lg overflow-hidden border-gray-300">
                    <thead className="text-left bg-gray-200">
                        <tr>
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Balance</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Frequency</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sampleData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="p-2">{val.name}</td>
                                        <td className="p-2">{val.email}</td>
                                        <td className="p-2">{val.balance}</td>
                                        <td className="p-2">{val.description}</td>
                                        <td className="p-2">{dt(val.lastdate)}</td>
                                        <td className="flex justify-center items-center gap-2 p-2">
                                            <button className="bg-blue-600 text-white rounded-full p-1">
                                                <Pencil size={12} />
                                            </button>
                                            <button className="bg-red-600 text-white rounded-full p-1">
                                                <Trash size={12} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    } catch (e) {
        console.log(e);
        return (
            <div className="p-10 overflow-x-auto">
                <table className="w-full border">
                    <thead className="text-left bg-gray-200">
                        <tr>
                            <th className="p-2">Customer Name</th>
                            <th className="p-2">Customer Email</th>
                            <th className="p-2">Balance</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Frequency</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }

}

export default TableOfInfo;