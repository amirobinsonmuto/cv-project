import PropTypes from "prop-types";

const MonthYearPicker = ({
  currentText,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isPresent,
  setIsPresent,
}) => {
  const doIfCurrent = (e) => {
    if (e.target.checked === true) {
      setEndDate("Present");
      setIsPresent(true);
    } else {
      setIsPresent(false);
    }
  };

  return (
    <div>
      <div className="form-control-check">
        <input type="checkbox" onChange={(e) => doIfCurrent(e)} />
        <label htmlFor="current-role">I am currently {currentText}</label>
      </div>
      <div className="flex">
        <label>From</label>
        <input
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label id="end-date-label" className={`${isPresent ? "disabled" : ""}`}>
          To
        </label>
        <input
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          id="end-date-input"
          disabled={isPresent}
          className={`${isPresent ? "disabled" : ""}`}
        />
      </div>
    </div>
  );
};

MonthYearPicker.propTypes = {
  doIfCurrent: PropTypes.func.isRequired,
  currentText: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
  endDate: PropTypes.string.isRequired,
  setEndDate: PropTypes.func.isRequired,
  isPresent: PropTypes.bool.isRequired,
  setIsPresent: PropTypes.func.isRequired,
};

export default MonthYearPicker;
