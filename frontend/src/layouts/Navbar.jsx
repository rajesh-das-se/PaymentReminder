const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-2">
            <div className="font-bold text-2xl text-blue-600">
                Payment Reminder
            </div>
            <div className="flex space-x-3">
                <div className="text-gray-700 font-semibold">Home</div>
                <div className="text-gray-700 font-semibold">History</div>
            </div>
        </nav >
    );
}

export default Navbar;