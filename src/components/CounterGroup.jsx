import Counter from "./counter";
const CounterGroup = ({ size}) => {
    return (
        <div>
            {Array.from({ length: size }).map((_, index) => (
                <Counter key={index} />
            ))}
        </div>
    );
};

export default CounterGroup;