import PropTypes from "prop-types";

const DisplayShowingEntries = ({stylePrefix, entriesSelectValue, displayDataLength, currentPage}) => {

let entriesText = displayDataLength <= 1 ? 'entry' : 'entries';

  if(entriesSelectValue > displayDataLength) {
    return (
      <p className={`${stylePrefix}_below_showing_entries_text`}>Showing {displayDataLength === 0 ? 0 : 1} to {displayDataLength} of {displayDataLength} {entriesText}</p>
    )
  } else if (entriesSelectValue * currentPage > displayDataLength){
      return (
        <p className={`${stylePrefix}_below_showing_entries_text`}>Showing {((currentPage - 1) * entriesSelectValue) + 1} to {displayDataLength} of {displayDataLength} {entriesText}</p>
      )
  } else {
    return (
      <p className={`${stylePrefix}_below_showing_entries_text`}>Showing {((currentPage - 1) * entriesSelectValue) + 1} to {entriesSelectValue * currentPage} of {displayDataLength} {entriesText}</p>
    )
  }
}

export default DisplayShowingEntries;

DisplayShowingEntries.propTypes = {
  stylePrefix: PropTypes.string,
  entriesSelectValue: PropTypes.number,
  displayDataLength: PropTypes.number,
  currentPage: PropTypes.number,
};