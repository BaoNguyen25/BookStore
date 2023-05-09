const dotenv = require('dotenv');
dotenv.config('../../.env');

const mailConfig = {
    Mailer: process.env.MAIL_MAILER,
    MailHost: process.env.MAIL_HOST,
    MailPort: process.env.MAIL_PORT,
    MailUsername: process.env.MAIL_USERNAME,
    MailPassword: process.env.MAIL_PASSWORD,
    MailFrom: process.env.MAIL_FROM,
    MailFromName: process.env.MAIL_FROM_NAME,
};

module.exports = mailConfig;