import PropTypes from "prop-types";
import shortid from "shortid";
import css from "./FeedbackApp.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedback__buttons_container}>
            {options.map((option) => (
                <button
                    key={shortid.generate()}
                    className={css.feedback__button}
                    onClick={onLeaveFeedback}
                    name={option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
