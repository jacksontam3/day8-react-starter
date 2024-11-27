import Counter from "./Counter";
import PropTypes from "prop-types";

const CounterGroup = ({ sizeArray, Counts, setCounts }) => {
    const updateCounts = (index, value) => {
        const newCounts = [...Counts];
        newCounts[index] = value;
        setCounts(newCounts);
    };

    return (
        <div>
            {sizeArray.map((_, index) => (
                <Counter
                    key={`counter-${index}`}
                    index={index}
                    count={Counts[index]}
                    setCount={updateCounts}
                />
            ))}
        </div>
    );
};

CounterGroup.propTypes = {
    sizeArray: PropTypes.arrayOf(PropTypes.number).isRequired,
    Counts: PropTypes.arrayOf(PropTypes.number).isRequired,
    setCounts: PropTypes.func.isRequired,
};

export default CounterGroup;