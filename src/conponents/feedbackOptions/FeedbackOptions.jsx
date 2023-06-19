import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
        {options.map((option) => (
          <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option[0].toUpperCase() +option.slice(1)}
          </button>
        ))
        }
        </>)      
};


FeedbackOptions.protoType = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
