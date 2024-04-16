const express = require("express")
const app = express();
const port = 5000;

const cors = require("cors")

const UserRouter = require("./routers/userRouter")
const SpaceRouter = require("./routers/spaceRouter")
const BookingRouter = require("./routers/bookingrouter")
const ContactRouter = require("./routers/contactRouter")

app.use(express.json())
app.use(cors( {
    origin: ["http://localhost:3000"]
}))

app.use("/user", UserRouter)
app.use("/flexiblespaces", SpaceRouter)
app.use("/bookingspaces", BookingRouter)
app.use("/contact", ContactRouter )




app.listen(port,() => {
    console.log("server started");
})