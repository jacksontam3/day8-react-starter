import { useState } from "react";

const CounterGroupGenerator = ({ setGlobalSize, resetCounts }) => {
    const [size, setSize] = useState(0);

    const handleSizeChange = (e) => {
        const value = Math.max(0, Math.min(20, Number(e.target.value) || 0));
        setSize(value);
        setGlobalSize(value);
    };

    const handleResetCounters = () => {
        resetCounts();
    };

    return (
        <div className="counter-group-generator">
            <label>
                <span>Size:</span>
                <input
                    type="number"
                    onChange={handleSizeChange}
                    min="0"
                    max="20"
                />
            </label>
            <button onClick={handleResetCounters}>Reset</button>
        </div>
    );
};

export default CounterGroupGenerator;