# Email Sending Utility Typescript

 This utility is designed to send emails using Nodemailer, a popular Node.js module for sending emails. It's configured to use Gmail's SMTP server, but can be easily adapted for other email services. The utility reads email addresses from an environment variable and sends emails to each of them.

## Prerequisites

* Node.js installed on your machine
* A Gmail account (or another email service if you modify the code)
* `nodemailer` and `dotenv` packages installed
* You must also have typescript installed globally:
 `npm install -g typescript`

## Installation

1. Clone this repository:
 `git clone http://github.com/emmy_akintz/sendEmailTypescript.git`
2. Navigate to the project directory:
 `cd sendEmailTypescript`
3. Install dependencies:
 `npm install`

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add your Gmail email and password to the `.env` file:
 `MYEMAIL=your-email@gmail.com`
 `MYPASS=your-password`
3. Add the email addresses you want to send emails to, separated by commas:
 `email2=recipient1@example.com,recipient2@example.com`
4. Optionally, set the email subject and HTML content:
 `subject=Hello from Nodemailer`
 `html=<p>This is a test email sent from Nodemailer.</p>`

## Usage

 Run the script with:
 `ts-node sendEmail.ts`

 The script will send an email to each address specified in the `email` environment variable.

## Code Overview

* The `sendEmail` function is an asynchronous function that sends emails to a list of recipients.
* It uses `nodemailer.createTransport` to create a transporter object configured for Gmail.
* It maps over the `email` array, creating a promise for each email to be sent.
* Each promise attempts to send an email and logs the result.
* The `parentFunction` orchestrates the sending process, looping over the number of iterations specified and calling `sendEmail` for each.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
