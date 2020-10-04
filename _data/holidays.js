const { DateTime, Interval, Settings } = require("luxon");
Settings.defaultZoneName = "Europe/London";

module.exports = function () {
  holidays = [
    {
      start: DateTime.local(2020, 10, 22, 12, 30),
      end: DateTime.local(2020, 10, 22, 13, 30),
    },
    {
      start: DateTime.local(2020, 11, 22, 12, 30),
      end: DateTime.local(2020, 11, 22, 13, 30),
    },
  ];
  return holidays.map((h) => Interval.fromDateTimes(h.start, h.end));
};
