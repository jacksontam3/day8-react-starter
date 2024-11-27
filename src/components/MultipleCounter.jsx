import { useEffect, useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CountersSum from "./CounterSum";

const MultipleCounter = () => {
    const [globalSize, setGlobalSize] = useState(0);
    const [sizeArray, setSizeArray] = useState(Array.from({ length: globalSize }));
    const [Counts, setCounts] = useState([]);

    useEffect(() => {
        setSizeArray(Array.from({ length: globalSize }));
        setCounts(Array.from({ length: globalSize }).fill(0));
    }, [globalSize]);

    const resetCounts = () => {
        setCounts(Array.from({ length: globalSize }).fill(0));
    };

    return (
        <div>
            <CounterGroupGenerator setGlobalSize={setGlobalSize} resetCounts={resetCounts} />
            <CountersSum Counts={Counts} />
            <CounterGroup
                size={globalSize}
                sizeArray={sizeArray}
                Counts={Counts}
                setCounts={setCounts}
            />
        </div>
    );
};

export default MultipleCounter;