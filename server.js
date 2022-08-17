// import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

require('dotenv').config();

const config = {
    gmail: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
    },
    mail: {
        subject: 'Your Purchase Detail'
    }
}

// create a new Express app. instance
const app = express();

// configure the Express middleware to accept CORS request and parse request body into JSON
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

// start application server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

app.get('/', (req, res) => {
    try {
        res.status(200).send(`Server is ready to accept HTTP POST request to path: '/sendmail`)
    } catch (err) {
        console.error(err);
    }
})

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post('/sendmail', (req, res) => {
    try {
        const reqBody = req.body;
        console.log(`incoming request for sending to ${reqBody.email}`);
        sendMail(reqBody, (info) => {
            console.log(`Email sent to ${reqBody.email}`);
            res.status(200).send(info);
        })
    } catch (err) {
        console.error(err);
    }
});

async function sendMail(reqBody, callback) {
    const transporter = nodemailer.createTransport({
        host: config.gmail.host,
        port: config.gmail.port,
        secure: config.gmail.secure,
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: `${process.env.EMAIL_SENDER}`,
        to: reqBody.email,
        subject: config.mail.subject,
        html: reqBody.content
    };

    // send email with defined transport object
    const info = await transporter.sendMail(mailOptions);

    callback(info)

}
