const moment = require("moment");
module.exports = function () {
  const thursday = 4; // ISO week runs 1–7, starting Monday
  const today = moment().isoWeekday();
  let weekOffset = today <= thursday ? -1 : 0;
  const thursdays = [];
  while (thursdays.length < 4) {
    const t = moment()
      .add(++weekOffset, "weeks")
      .isoWeekday(thursday);
    thursdays.push({
      name: t.format("dddd Do MMMM"),
      value: t.format("YYYY-MM-DD"),
      selected: thursdays.length == 1 ? "selected" : "",
    });
  }
  return thursdays;
};
