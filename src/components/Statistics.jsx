import PropTypes from "prop-types";
import css from "./FeedbackApp.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.feedback__statistics_container}>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Total: {positivePercentage.toFixed(2)}%</span>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
