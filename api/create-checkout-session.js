const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
module.exports = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    cancel_url: "https://example.com/cancel",
    mode: "payment",
    payment_method_types: ["card"],
    success_url: "https://example.com/success",
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: "Thursday 3rd January 2021",
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
