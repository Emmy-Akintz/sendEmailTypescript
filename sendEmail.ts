import nodemailer from 'nodemailer';
import 'dotenv/config'
// D308
// const email = process.env.email ? process.env.email.split(', ') : []
const email = process.env.email2 ? process.env.email2.split(', ') : []

const sendEmail = async (numberCount: Number) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MYEMAIL,
            pass: process.env.MYPASS
        }
    });

    const sendPromises = email.map(async (recipient) => {
        let mailOptions = {
            from: process.env.MYEMAIL,
            to: recipient,
            subject: process.env.subject,
            html: process.env.html
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log({ numberCount, recipient, message: 'Operation Successful!!!' });
            return info;
        } catch (error) {
            console.log({ numberCount, recipient, error });
            return error;
        }
    });

    return Promise.all(sendPromises);
};

const parentFunction = async () => {
    try {
        for (let i = 1; i <= 1; i++) {
            await sendEmail(i);
        }
    } catch (error) {
        console.error('Error sending emails: ', error);
    }
};


parentFunction()