const moment = require("moment");
module.exports = function () {
  const thursday = 4; // ISO week runs 1–7, starting Monday
  const today = moment().isoWeekday();
  let week = today <= thursday ? -1 : 0;
  const thursdays = [];
  for (let i = 1; i <= 4; i++) {
    const t = moment().add(week, "weeks").isoWeekday(thursday);
    thursdays.push({
      name: t.format("dddd Do MMMM"),
      value: t.format("YYYY-MM-DD"),
      selected: i == 2 ? "selected" : "",
    });
    week++;
  }
  return thursdays;
};
