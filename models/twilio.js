
// require('dotenv').config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// console.log(accountSid);
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const sendSms = (phone, message) => {
//   const client = require('twilio')(accountSid, authToken);
//   client.messages
//     .create({
//        body: "You have successfully created a medical aid with us. Your Policy number is:",
//        from: process.env.TWILIO_PHONE_NUMBER,
//        to: req.body.phone
//      })
//     .then(message => console.log(message.sid))
//     .catch((err) => console.log(err));
// }

// module.exports = sendSms;