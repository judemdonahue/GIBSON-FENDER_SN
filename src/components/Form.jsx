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

      // 8 DIGIT SN START //
        case 8:
          // Setting exception for years '95, '96, '97
          let firstTwoChars = sn.substring(0,2);
          // Declaring output variables
          let year = ``;
          let plant = ``;
          // SN destructuring to get identifying numbers
          let YY = sn.charAt(0) + sn.charAt(4);
          let DDD = sn.charAt(1) + sn.charAt(2) + sn.charAt(3);
          let RRR = sn.charAt(5) + sn.charAt(6) + sn.charAt(7);

          switch (firstTwoChars) {
            case `99`:
              YY = `75`
              DDD = sn.substring(2,5);
              RRR = sn.substring(5,8);
              break;
            case `00`:
              YY = `76`
              DDD = sn.substring(2,5);
              RRR = sn.substring(5,8);
              break;
            case `06`:
              YY = `77`
              DDD = sn.substring(2,5);
              RRR = sn.substring(5,8);
              break;
          }

          

            // if SN starts with 7, 8, or 9, the year is '19xx', if SN starts with 0, 1, or 2, the year is '20xx'
            year = (['7', '8', '9'].includes(YY.charAt(0))) ? `19${YY}` : (['0', '1', '2'].includes(YY.charAt(0))) ? `20${YY}` : year;
            // if SN ranking # is <= 499 the guitar was produced in MI, or else was produced in TN
            plant = (RRR <= 499) ? `Kalamzoo, MI` : `Nashville, TN`;
            // String manipulation trimming the date value
            let date = new String(dateFromDay(year, parseInt(DDD, 10))).slice(3,15);
            // Output statement
            const generatedOutput =`This guitar was manufactured ${date}, factory: ${plant}`  ;
            setReturnData(generatedOutput);
            break;
        // 8 DIGIT SN END //

      // 9 DIGIT SN START //
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
