import PropTypes from "prop-types";

function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total} </p>
        <p>Positive feedback: { positivePercentage> 0 ? positivePercentage : 0}%</p>
        </>
    )
};

Statistics.protoType = {
good: PropTypes.string.isRequired,
neutral:PropTypes.string.isRequired,
bad:PropTypes.string.isRequired,
total:PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired
};

export default Statistics;