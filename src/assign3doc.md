---
layout: layouts/layout.ejs
title: Assignment 3 Documentation
---
# Setting up Netlify

I started off by publishing my folder into GitHub so I can link it on Netlify.

I followed the docs steps for getting my API using SendGrid, and setting it up in Netlify. This allows me to just refer to it in my code rather than hardcoding it. I did have a `.env` file where I hardcoded my API just for testing purposes, but my final product refers to the Netlify one.

## ./netlify/functions/send-contact-email.js

@sendgrid/mail imports the package which provides the functionality to send emails through SendGrid.

const apiKey = process.env.NETLIFY_EMAILS_PROVIDER_API_KEY;

The SG API key is retrieved from the environment variable and it is used to authenticate and send emails. It is stored securely, not hardcoded to keep data safe.

exports.handler is how the serverless function is created in Node.js, used to deploy on Netlify.

My initial plan was to parse the request body if it is a POST request, however, it was throwing me errors, so I commented it out. But the main construction of the email message remains:

const msg = {
    to: 'xxx@xxx.com',          
    from: body.email,                      
    subject: `Automated Message: ${body.subject}`, 
    text: `Name: ${body.name}\nPhone: ${body.phone}\nEmail: ${body.email}\nMessage: ${body.message}`, 
};

to is for the recipient of the email, which is set beforehand. from will be the email address my user puts in the contact form. The same applies to subject and text. In theory, the contents of the email parse and print out, with the variables as placeholders.

The try and catch block essentially tries sending the email message to SendGrid and returns a success message, otherwise, it will return an error message. The error message was just put in for debugging purposes. It can block many issues like the wrong API key, invalid recipient email, etc.

## contact.ejs

This page handles form submission and the associated content in the script tag. Keeping the logic in the same file helped me track the form behavior.

### Form Structure

- data-netlify="true" ensures Netlify processes the form submission, validation, and sends it to the specified serverless function.
- Correct form element types ensure proper validation.

### Spinner Setup

<div id="spinner" style="display: none;">
  <i class="fas fa-spinner fa-spin"></i> Sending...
</div>

- The display: none; hides the spinner initially.
- Once the form is submitted, the spinner becomes visible, giving visual feedback to the user.

## contact.ejs Script

formData collects the form data, and I linked a JS file to handle the POST request to the serverless function.

Finally, I applied some styling to the form, including the spinner (attached through favicon). I made it match the aesthetic of my website. I also added a link to Lab 3 in the nav bar.


