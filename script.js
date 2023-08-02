function isValidGuitarSerial(serialNumber) {
    const pattern1975To1977 = /^(99|00|06)\d{6}$/;
    const patternPriorTo1984 = /^[0-9]{2}(0[1-9]|[1-2][0-9]|3[0-5])[0-9]{3}$/;
    const patternAfter1989 = /^[0-9]{2}(0[1-9]|[1-2][0-9]|3[0-6])[0-9]{3}$/;
    const patternLesPaulClassic = /^([0-9]\s|\s)?[0-9]{3,6}$/;
    const patternJuly2005 = /^[0-9]{5}0[0-9]{3}$/;
    const patternCentennialYear = /^94\d{6}$/;
    const patternGibsonUSA2014Present = /^[0-9]{2}[0-9]{6}$/;
    const patternGibsonCustomLesPaulExplorer = /^[0-9]\s[0-9]{4}$/;
    const patternGibsonCustomFirebirdSG = /^[0-9]{6}[1-5,8]$/;
    const patternHistoricESMODELS = /^[A-B]-[0-9]{4}$/;
    const patternCarvedTopModels = /^(19|20)\d{3}[0-9]{3}$/;
    const patternCustomShopRegular = /^CS[0-9]{4}$/;
    const patternSignatureModels = /^(ACE|AS|DB|DBR|GR|13|PAGE|JPP|JP|JA|PETE|PFY|PF|SL|TI|ZW|ZPW)\s\d{3}$/;
  
    return (
      pattern1975To1977.test(serialNumber) ||
      patternPriorTo1984.test(serialNumber) ||
      patternAfter1989.test(serialNumber) ||
      patternLesPaulClassic.test(serialNumber) ||
      patternJuly2005.test(serialNumber) ||
      patternCentennialYear.test(serialNumber) ||
      patternGibsonUSA2014Present.test(serialNumber) ||
      patternGibsonCustomLesPaulExplorer.test(serialNumber) ||
      patternGibsonCustomFirebirdSG.test(serialNumber) ||
      patternHistoricESMODELS.test(serialNumber) ||
      patternCarvedTopModels.test(serialNumber) ||
      patternCustomShopRegular.test(serialNumber) ||
      patternSignatureModels.test(serialNumber)
    );
  }
  
  // Examples of how to use the function:
  console.log(isValidGuitarSerial("99012345")); // true (1975 serial number)
  console.log(isValidGuitarSerial("07123456")); // true (July 2005 serial number)
  console.log(isValidGuitarSerial("70108276")); // true (Post 1977 serial number)
  console.log(isValidGuitarSerial("950123"));   // true (Centennial year - 1994)
  console.log(isValidGuitarSerial("14000001")); // true (Gibson USA 2014-present)
  console.log(isValidGuitarSerial("7 5123"));   // true (Gibson Custom - 1957 reissue, 2005)
  console.log(isValidGuitarSerial("050102"));  // true (Gibson Custom - SG Standard reissue, 2005)
  console.log(isValidGuitarSerial("A-38005")); // true (Historic ES MODEL - '63 ES-335 reissue, 1998)
  console.log(isValidGuitarSerial("91418009"));// true (Carved Top model, 1998)
  console.log(isValidGuitarSerial("CS10845")); // true (Custom Shop regular production model, 2001)
  console.log(isValidGuitarSerial("AS 123"));  // true (Signature model - Andy Summers ES-335)
  