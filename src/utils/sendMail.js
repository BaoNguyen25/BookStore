const nodemailer = require('nodemailer');
const mailConfig = require('../config/config.mail');
const { app } = require('../config/config.app');

const sendMail = (to, subject, htmlContent) => {
    const transporter = nodemailer.createTransport({
        host: mailConfig.MailHost,
        port: mailConfig.MailPort,
        secure: false,
        auth: {
            user: mailConfig.MailUsername,
            pass: mailConfig.MailPassword
        }
    });

    const options = {
        from: `${mailConfig.MailFromName} <${mailConfig.MailFrom}>`,
        to: to,
        subject: subject,
        html: htmlContent
    };

    return transporter.sendMail(options);
};

module.exports = sendMail;