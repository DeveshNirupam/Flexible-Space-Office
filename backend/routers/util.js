const multer = require("multer");
const router = require("express").Router();
const nodemailer = require("nodemailer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const createdOTPs = {};

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

const mailConfig = {
  service: "gmail",
  auth: {
    user: "flexibleofiicespaces@gmail.com",
    pass: "hqmjgzugiuvsfjhx",
  }
}

const transporter = nodemailer.createTransport(mailConfig);

const generateOTP = () => {
  const otp = Math.floor(Math.random() * 1000000);
  console.log(otp);
  return otp;

};

router.post("/sendotp", (req, res) => {
  console.log(req.body);
  const otp = generateOTP();
  createdOTPs[req.body.email] = otp;
  console.log(createdOTPs);
  transporter.sendMail({
    from: "flexibleofiicespaces@gmail.com",
    to: req.body.email,
    subject: "OTP for password reset",
    html: `<p> OTP for password reset is <b> ${otp}</b></p>`,
  })

    .then((info) => {
      return res.status(200).json(
        {
          msg: "OTP sent successfully",
          info: info.messageID,
          preview: nodemailer.getTestMessageUrl(info),
        }
      );

    }).catch((err) => {
      console.log(err);
      return res.status(400).json({ msg: "OTP not sent" });
    });
})

router.get('/verifyotp/:email/:otp', (req, res) => {
  const oldOTP = createdOTPs[req.params.email];
  if (oldOTP == req.params.otp) {
    return res.status(200).json({ msg: "OTP verified successfully" });
  } else {
    return res.status(400).json({ msg: "OTP verification failed" });
  }
})


module.exports = router;