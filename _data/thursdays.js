const dateHelper = require("../src/date-helper.js");

module.exports = function () {
  const thursdays = dateHelper.upcomingThursdays();
  const daysWithThisWeekSelected = thursdays.map((currElement, index) => {
    return {
      value: currElement,
      selected: index === 1 ? "selected" : "",
    };
  });
  return daysWithThisWeekSelected;
};
