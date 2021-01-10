import PropTypes from "prop-types";

function Feedback(props) {
  const { good, neutral, bad } = props;

  return (
    <ul>
      <li>{good}</li>
      <li>{neutral}</li>
      <li>{bad}</li>
    </ul>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
