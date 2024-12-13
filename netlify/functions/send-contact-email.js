// Importing the SendGrid mail package
const sgMail = require('@sendgrid/mail');

// Retrieving the API key from my netlify environment variables

const apiKey = process.env.NETLIFY_EMAILS_PROVIDER_API_KEY;

exports.handler = async function(event, context) {

    //Supposed to change the request
    // const body = JSON.parse(event.body);

    const msg = {
        //Recipient email address
        to: 'shahbano31@yahoo.com',
        from: 'shibistuff@gmail.com',
        // from: 'body.email',
        // each  variable should be replaced by the content from the form input
        subject: `Automated Message: ${body.subject}`,
        text: `Name: ${body.name}\nPhone: ${body.phone}\nEmail: ${body.email}\nMessage: ${body.message}`,
    };

    try {
        await sgMail.send(msg);
        return {
            statusCode: 200, //Successful message
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        // Handling errors , debugging suggestion?
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};
