import { useEffect, useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CountersSum from "./CounterSum";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [sizeArray, setSizeArray] = useState(Array.from({ length: size }));
    const [Counts, setCounts] = useState([]);

    useEffect(() => {
        setSizeArray(Array.from({ length: size }));
        setCounts(Array.from({ length: size }).fill(0));
    }, [size]);

    const resetCounts = () => {
        setCounts(Array.from({ length: size }).fill(0));
    };

    return (
        <div>
            <CounterGroupGenerator setGlobalSize={setSize} resetCounts={resetCounts} />
            <CountersSum Counts={Counts} />
            <CounterGroup
                size={size}
                sizeArray={sizeArray}
                Counts={Counts}
                setCounts={setCounts}
            />
        </div>
    );
};

export default MultipleCounter;