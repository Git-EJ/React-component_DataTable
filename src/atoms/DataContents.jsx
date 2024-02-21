import { Fragment } from "react";
import PropTypes from "prop-types";

const DataContents = ({stylePrefix, headers, data, lineSelected, setLineSelected}) => {

  return data.map((content, i) => (
      
    <div className= {`${stylePrefix}_content-line_container ${lineSelected === i ? `${stylePrefix}_content-line_container_selected` : ''}`}
      id={`${stylePrefix}_content-line_container_${i}`}
      key={`${i}_${content.firstName}-${content.lastName}`}
      onClick={() => {setLineSelected(i)}}
    >

      {headers.map((cell, j) => {
        return (
          <Fragment key={`item_${i}_${cell.key}`}>
            {cell.key && (
            <div
              className={`${stylePrefix}_content-line_item`}
              style={cell.sx}
            >
              <p className={`${stylePrefix}_content-line_item_value`}>{content[cell.key]}</p>
            </div>
          )}</Fragment>
        )
      })}
    </div>
  ));
};


const DisplayDataContents = ({stylePrefix, headers, data, entriesSelectValue, displayDataLength, currentPage, lineSelected, setLineSelected}) => {
  
  //avoid error when data.length is 0
  if (!data) {
    return null;
  }

  return (
    <DataContents
      stylePrefix={stylePrefix}
      headers={headers}
      data={(entriesSelectValue >= displayDataLength) ? data : data.slice((currentPage - 1) * entriesSelectValue, currentPage * entriesSelectValue )}
      lineSelected={lineSelected}
      setLineSelected={setLineSelected}
    />
  )
};

export default DisplayDataContents;

DisplayDataContents.propTypes = {
  stylePrefix: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  entriesSelectValue: PropTypes.number,
  displayDataLength: PropTypes.number,
  currentPage: PropTypes.number,
  lineSelected: PropTypes.number,
  setLineSelected: PropTypes.func,
};
