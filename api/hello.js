const holidays = require("../_data/holidays.js");
const events = require("../_data/events.js");
const places = require("../_data/places.json");

module.exports = (req, res) => {
  const { name = "World" } = req.query;
  // res.status(200).send(`Hello ${name}! (${process.env.ANAME})`);
  console.log("holidays");
  console.log(holidays()[0].start.toISO());
  const theEvent = events()
    .flatMap((e) => e.events)
    .find((e) => e.eventId === "2020-10-29T19:00:00.000+00:00");
  const day = theEvent.startDate.year;
  const place = places[theEvent.placeId];
  res.status(200).send(day + place.name);
};
