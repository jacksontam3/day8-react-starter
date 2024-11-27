const CounterGroupGenerator = ({ size, setSize, resetCounters }) => {
    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
        resetCounters();
    };

    return (
        <div>
            <label>
                Size:{" "}
                <input
                    type="number"
                    value={size}
                    onChange={handleSizeChange}
                    min="0"
                />
            </label>
            <button onClick={resetCounters}>Reset</button>
        </div>
    );
};

export default CounterGroupGenerator;