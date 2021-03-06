const { DateTime, Settings } = require("luxon");
Settings.defaultZoneName = "Europe/London";
const dateHelper = require("../src/date-helper.js");
const holidays = require("./holidays.js");
const recurringEvents = require("./recurring-events.json");

const upcomingDates = dateHelper.upcomingDates();

module.exports = function () {
  const events = [];
  for (const date of upcomingDates) {
    for (const re of recurringEvents) {
      if (re.dayOfWeek === date.weekdayLong) {
        events.push({
          placeId: re.placeId,
          startDate: DateTime.local(
            date.year,
            date.month,
            date.day,
            re.startHour,
            re.startMinute
          ),
          endDate: DateTime.local(
            date.year,
            date.month,
            date.day,
            re.endHour,
            re.endMinute
          ),
          eventId: DateTime.local(
            date.year,
            date.month,
            date.day,
            re.startHour,
            re.startMinute
          ).toISO(),
        });
      }
    }
  }
  return events.filter((event) => !isInHoliday(event));
};

function isInHoliday(event) {
  for (const holiday of holidays()) {
    if (holiday.contains(event.startDate)) {
      return true;
    }
  }
  return false;
}
