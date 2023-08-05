import React, { useState } from 'react';
import '../styles/style.css';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [returnData, setReturnData] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setReturnData(inputValue); // Store the inputValue in returnData state
    snDecode();
  };

  const snDecode = () => {
    const outputString = "Your guitar was made in 19";
    let sn = inputValue;
  
    switch (sn.length) {
        case 8:
            const year = outputString + sn.charAt(0) + sn.charAt(4);
            setReturnData(year);
            break;
        case 9:
            setReturnData('Your SN is 9 chars');
            break;
        case 6:
            setReturnData('Your SN is 6 chars');
            break;
        case 5:
            setReturnData('Your SN is 5 chars');
            break;
        case 4:
            setReturnData('Your SN is 4 chars');
            break;
        default:
            setReturnData('Unknown SN length');
            break;
    }
  };

  return (
    <div>
      <h1>
        This app is designed to assist in dating and/or identifying instruments
        manufactured or distributed by Gibson Guitar Corp. Please note that most
        of this information relates to serial numbers used from 1975 to present.
      </h1>
      <div className="container">
        <div className="form-wrapper">
          <div className="form">
            <input
              id="sn-input"
              type="text"
              placeholder="YDDDYRRR"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
            <button
              id="submit-btn"
              className="search-btn"
              onClick={handleClick}
            >
              Search
            </button>
            <p className="return-data">{returnData}</p>
            {/* Display the returnData value in the paragraph */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
