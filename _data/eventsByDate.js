const dateHelper = require("../src/date-helper.js");
const upcomingEvents = require("./events.js");

const upcomingDates = dateHelper.upcomingDates();

module.exports = function () {
  const eventsByDate = [];
  for (date of upcomingDates) {
    const eventsForDay = upcomingEvents().filter(
      (event) =>
        date.day == event.startDate.day &&
        date.month == event.startDate.month &&
        date.year == event.startDate.year
    );
    if (eventsForDay.length) {
      eventsByDate.push({ date: date, events: eventsForDay });
    }
  }
  return eventsByDate;
};
