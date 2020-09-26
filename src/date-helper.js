const moment = require("moment");

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
