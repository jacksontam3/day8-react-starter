import React, { useState } from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";



const MultipleCounter = () => {
    const [size, setSize] = useState();


    const resetCounters = () => {
    };

    return (
        <div>
            <CounterGroupGenerator
                size={size}
                setSize={setSize}
                resetCounters={resetCounters}
            />
            <CounterGroup size={size} />
        </div>
    );
};

export default MultipleCounter;