import React, { useState } from 'react';
import '../styles/style.css';
import moment from 'moment/moment';

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

  function dateFromDay(year, day) {
    var date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)); // add the number of days
  };

  const snDecode = () => {
    let sn = inputValue;
  
    switch (sn.length) {
        case 8:
            const YY = sn.charAt(0) + sn.charAt(4);
            const DDD = sn.charAt(1) + sn.charAt(2) + sn.charAt(3);
            const RRR = sn.charAt(5) + sn.charAt(6) + sn.charAt(7);

            let year = '';
                switch (YY.charAt(0)) {
                case '7':
                case '8':
                case '9':
                    year = `19${YY}`;
                    break;
                case '0':
                case '1':
                case '2':
                    year = `20${YY}`;
                    break;
                default:
                    year = null;
                    break;
                }

            let date = new String(dateFromDay(year, parseInt(DDD, 10))).slice(3,15);

            const outputStatement =`This guitar was manufactured ${date}`  ;
            setReturnData(outputStatement);
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
            <p className="return-data">{returnData.toString()}</p>
            {/* Display the returnData value in the paragraph */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
