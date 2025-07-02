import {Home, Clock} from "lucide-react"

const Sidebar = ()=>{

    return (
        <div className="bg-[#2D68C4] text-white w-64 p-6">
            <h2 className="text-2xl font-bold mb-8">
                Payment Reminder
            </h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-2"><Home size={16}/>Home</li>
                <li className="flex items-center gap-2"><Clock size={16}/>History</li>
            </ul>
        </div>
    )
}

export default Sidebar;