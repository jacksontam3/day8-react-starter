export default function CountersSum({ Counts }) {
    return <>Sum: {Counts.reduce((sum, count) => sum + count, 0)}</>;
}