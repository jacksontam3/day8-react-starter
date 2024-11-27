const CounterGroupGenerator = ({ size, setSize, resetCounters }) => {

    const handleSizeChange = (e) => {
        const newSize = Math.min(Math.max(Number(e.target.value), 0), 20);
        setSize(newSize);
        resetCounters();
    };

    return (
        <div>
            <label>
                Size:{" "}
                <input
                    type="number"
                    onChange={handleSizeChange}
                    min="0"
                    max="20"
                />
            </label>
            <button onClick={resetCounters}>Reset</button>
        </div>
    );
};

export default CounterGroupGenerator;