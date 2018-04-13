import nodemailer from 'nodemailer';


require('dotenv').config();

export const startFreeSurvey = (req, res, next) => {
  const mailBody = `
    <img src="cid:something@something" />
    <p>Thanks for trying our free survey.</p>
    `;
  /*
  TODO:
      1. Checks if email is already in the freeTrials collection.
        (if unique)
          a. Create a new document for the email
          b. Send an email to the provided address
          c. Redirect to the trialSurvey page
        (if not unique)
          a. Redirects to trialSurvey (no need to do anything else)
        */

  console.log(`${req.body.email} was provided, but no template exists yet.`);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAILHOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPW,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // setup email data with unicode symbols
  const mailOptions = {
    from: '"TermómetroUY 👻" <test@termometro.uy>', // sender address
    to: req.body.email, // list of receivers
    subject: 'Thank you for checking out our survey ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: mailBody, // html body
    attachments: [{
      filename: 'termotest.jpg',
      path: './img/termotest.jpg',
      cid: 'something@something',
    }],
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  });
};

export const sendPasswordRecovery = (req, res, next) => {
};
