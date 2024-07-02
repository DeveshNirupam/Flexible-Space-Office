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

app.use("/user", UserRouter)
app.use("/space", SpaceRouter)
app.use("/booking", BookingRouter)
app.use("/contact", ContactRouter)
app.use("/util", utilRouter)

app.use(express.static('./static/uploads'))

app.listen(port, () => {
    console.log("server started");
})