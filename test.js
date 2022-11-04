const nodemailer = require('nodemailer');

const message = `
    <h4>Test</h4>
    <p>This is a test</p>
`;

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25,
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
});

const mailOptions = {
    from: 'test@suelightning.com',
    to: 'lilmilk@gmail.com',
    subject: 'Test',
    html: message
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log('An error occurred', err);
    else console.log('succcess', info);
})