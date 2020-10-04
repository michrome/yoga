const moment = require("moment");
const { DateTime, Settings } = require("luxon");
Settings.defaultZoneName = "Europe/London";

exports.upcomingDates = function (days = 30) {
  let today = DateTime.local();
  today = DateTime.local(today.year, today.month, today.day);
  const upcomingDates = [];
  while (upcomingDates.length < days) {
    upcomingDates.push(today.plus({ days: upcomingDates.length }));
  }
  return upcomingDates;
};

exports.dayOfWeekAndDate = function (date) {
  return date.toFormat("EEEE d LLLL");
};

exports.timeRange = function (startDate, endDate) {
  startTime = startDate.toFormat("h:mm");
  endTime = endDate.toFormat("h:mm a").toLowerCase();
  return `${startTime} - ${endTime}`;
};

exports.friendlyDate = function (date) {
  d = moment(date);
  output = d.format("dddd Do MMMM");
  return output;
};

exports.upcomingThursdays = function () {
  const thursday = 4; // ISO week runs 1–7, starting Monday
  const today = moment().isoWeekday();
  let weekOffset = today <= thursday ? -1 : 0;
  const thursdays = [];
  while (thursdays.length < 4) {
    const t = moment()
      .add(weekOffset++, "weeks")
      .isoWeekday(thursday);
    thursdays.push(t.format("YYYY-MM-DD"));
  }
  return thursdays;
};
