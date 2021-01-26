// https://github.com/azer/relative-date/blob/master/lib/relative-date.js

// eslint-disable-next-line no-shadow-restricted-names
const relativeDate = (undefined => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const YEAR = DAY * 365;
  const MONTH = YEAR / 12;

  const formats = [
    [0.7 * MINUTE, 'teraz'],
    [1.5 * MINUTE, 'minute temu'],
    [60 * MINUTE, 'minut temu', MINUTE],
    [1.5 * HOUR, 'godzinę temu'],
    [DAY, 'godzin temu', HOUR],
    [2 * DAY, 'wczoraj'],
    [7 * DAY, 'dni temu', DAY],
    [1.5 * WEEK, 'tydzień temu'],
    [MONTH, 'tygodni temu', WEEK],
    [1.5 * MONTH, 'miesiąc temu'],
    [YEAR, 'miesięcy temu', MONTH],
    [1.5 * YEAR, 'rok temu'],
    [Number.MAX_VALUE, 'lat temu', YEAR],
  ];

  function relativeDate(input: any, reference: any) {
    !reference && (reference = new Date().getTime());
    reference instanceof Date && (reference = reference.getTime());
    input instanceof Date && (input = input.getTime());

    const delta = reference - input;
    let format: any;
    let i;
    let len;

    for (i = -1, len = formats.length; ++i < len; ) {
      format = formats[i];
      if (delta < format[0]) {
        return format[2] === undefined
          ? format[1]
          : Math.round(delta / format[2]) + ' ' + format[1];
      }
    }
  }

  return relativeDate;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = relativeDate;
}

export default relativeDate;
