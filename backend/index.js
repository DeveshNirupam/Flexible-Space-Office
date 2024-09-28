const express = require("express")
const app = express();
const port = 5000;

const cors = require("cors")

const UserRouter = require("./routers/userRouter")
const SpaceRouter = require("./routers/spaceRouter")
const BookingRouter = require("./routers/bookingrouter")
const ContactRouter = require("./routers/contactRouter")
const utilRouter = require("./routers/util")

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"]
}))

const stripe = require('stripe')('sk_test_4ypbMh4aR9gRNnUkQCwgOyCT00rSoAbXzZ');

app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'inr',
        description: 'Payment Description',
        customer: customer.id
    });
    
    res.json({
        clientSecret: paymentIntent.client_secret
    });
})

app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
});

app.use("/user", UserRouter)
app.use("/space", SpaceRouter)
app.use("/booking", BookingRouter)
app.use("/contact", ContactRouter)
app.use("/util", utilRouter)

app.use(express.static('./static/uploads'))

app.listen(port, () => {
    console.log("server started");
})