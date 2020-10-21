const dateHelper = require("../src/date-helper.js");
const environment = require("../_data/environment.js");
const events = require("../_data/events.js");
const places = require("../_data/places.json");
const stripe = require("stripe")(environment.stripeSecretKey);

module.exports = async (req, res) => {
  const eventId = req.body;
  const event = events().find((e) => e.eventId === eventId);
  const place = places[event.placeId];
  const timeRange = dateHelper.timeRange(event.startDate, event.endDate);
  const description = `${timeRange} at ${place.name}`;

  const session = await stripe.checkout.sessions.create({
    cancel_url: environment.baseUrl,
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `${environment.baseUrl}/success/${eventId}`,
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: dateHelper.dayOfWeekAndDate(event.startDate),
            description: description,
            images: [environment.stripeCheckoutImage],
          },
          unit_amount: 800,
        },
        quantity: 1,
      },
    ],
    submit_type: "book",
  });
  res.json({ id: session.id, eventId: eventId });
};
