const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SENDGRID_API_KEY=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');

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
