const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);

    const msg = {
        to: 'shahbano31@yahoo.com',
        from: body.email,
        subject: `Automated Message: ${body.subject}`,
        text: `Name: ${body.name}\nPhone: ${body.phone}\nEmail: ${body.email}\nMessage: ${body.message}`,
    };

    try {
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};
