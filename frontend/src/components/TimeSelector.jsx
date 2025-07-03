const TimeSelector = ({ frequency, setReminderInfo }) => {

    const updateTime = (e) => {
        const [hour, minute] = e.target.value.split(":");
        setReminderInfo((prev) => { return { ...prev, time: { ...prev.time, hour: hour } } })
        setReminderInfo((prev) => { return { ...prev, time: { ...prev.time, minute: minute } } })
    }

    switch (frequency) {
        case "monthly":
            return (
                <div>
                    <label className="block font-semibold">Day of Month</label>
                    <select className="border p-2 rounded w-full" onChange={(e) => { setReminderInfo((prev) => { return { ...prev, time: { ...prev.time, monthday: e.target.value } } }) }}>
                        <option value={0}>Select date</option>
                        {
                            [...Array(31)].map((_, i) => {
                                return (
                                    <option value={i + 1}>
                                        {i + 1}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            )
        case "weekly":
            return (
                <div>

                </div>
            )
        default:
            return (
                <div>
                    <label className="block font-semibold">Time</label>
                    <input
                        type="time"
                        className="border rounded p-2 w-full"
                        onChange={updateTime}
                    />
                </div>
            )
    }
}

export default TimeSelector;