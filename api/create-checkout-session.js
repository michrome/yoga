const dateHelper = require("../src/date-helper.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
module.exports = async (req, res) => {
  const eventDate = req.body.eventDate;
  console.log(`eventDate is ${eventDate}`);
  const friendlyDate = dateHelper.friendlyDate(eventDate);

  const session = await stripe.checkout.sessions.create({
    cancel_url: "https://www.hello-yoga.co.uk/",
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `https://www.hello-yoga.co.uk/success/${eventDate}`,
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: friendlyDate,
            description: "7pm–8pm at Beckwith Health Club, Harrogate.",
            images: ["https://www.hello-yoga.co.uk/images/hello-yoga.png"],
          },
          unit_amount: 800,
        },
        quantity: 1,
      },
    ],
    submit_type: "book",
  });

  res.json({ id: session.id });
};
