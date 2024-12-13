---
layout: layouts/layout.ejs
title: Lab 3
---
# Serverless Function Providers

## Introduction
Developers who don’t have the resources to manage servers can use serverless function providers to run code. These providers handle scaling, deployment, and infrastructure, allowing developers to focus solely on writing code and building applications.

## Types of Serverless Function Providers

### 1. **AWS Lambda**
- **Description**: AWS Lambda is a cloud service offered by Amazon Web Services (AWS). It is popular due to its powerful computing capabilities and seamless integration with AWS services like DynamoDB, S3, and API Gateway.
- **Features**: Lambda runs code automatically in response to events like file uploads or database updates. It is highly scalable and adjusts to traffic fluctuations efficiently.
- **Pricing**: AWS follows a **pay-as-you-go** model, meaning you only pay for the resources you use. However, this can be a disadvantage if scaling limits are not properly configured.
- **Complexity**: AWS services have a steep learning curve, which may not be ideal for developers looking for minimal setup.
- **Experience**: From my experience with AWS Lambda (from an AWS course), I found it not ideal for this assignment as AWS services are best suited for applications already built within the AWS ecosystem.

### 2. **Google Cloud Functions (GCF)**
- **Description**: Owned by Google, Cloud Functions integrate seamlessly with other Google Cloud services like Firebase, BigQuery, and Pub/Sub.
- **Features**: They are known for their low latency and fast cold starts, which are useful for real-time applications.
- **Pricing**: Google Cloud Functions have a **pay-per-use** pricing model, generally considered more predictable and affordable compared to AWS.
- **Complexity**: There is a learning curve, especially for those unfamiliar with Google Cloud’s services. My past experience with Firebase was not favorable, leaving me hesitant to return to Google Cloud Functions.

### 3. **Microsoft Azure Functions**
- **Description**: Azure Functions integrate well with Microsoft services like Azure SQL and Active Directory.
- **Features**: They offer low latency and cold starts, similar to Google Cloud Functions.
- **Pricing**: Azure functions also follow a **pay-per-use** model.
- **Complexity**: Azure is complex and better suited for databases or development environments rather than general-purpose serverless functions.

### 4. **Netlify**
- **Description**: Netlify focuses on frontend serverless functions and is designed for modern web applications, particularly static pages.
- **Features**: It’s easy to deploy functions with Netlify by adding a `netlify` folder and a `functions` subfolder, which handles deployment, scaling, and management.
- **Integration**: Netlify integrates well with GitHub and offers continuous deployment.
- **Limitations**: It is best suited for frontend-heavy projects, like static sites, and does not offer backend integrations like databases.
- **Recommendation**: Given the simpler pricing model, minimal learning curve, and compatibility with Assignment 3 requirements, Netlify seems like the most appealing option for my project.

---

Among the serverless function providers, **Netlify** stands out as the best choice due to its simplicity, ease of deployment, and compatibility with frontend-heavy applications. Since Assignment 3 does not require backend services like databases, Netlify aligns perfectly with the project’s requirements.

---
# Email Service Providers Comparison

To send emails, there are several popular email service providers offering different features tailored to various project scopes.

## SendGrid  
SendGrid is a widely-used email service known for its reliable email delivery. It provides automated spam protection and features like whitelabeling, which can help boost sender reputation. SendGrid integrates well with other cloud services, making it an easy choice for developers already using platforms like AWS or Google Cloud. However, SendGrid lacks advanced customization options and detailed analytics, which makes it less suitable for those looking to gain deeper insights into customer engagement. It excels in straightforward, scalable email delivery but might not be ideal for users needing advanced analytics or custom integrations.  


---

## Mailgun  
Mailgun is popular for its developer-friendly features such as tracking tools, detailed analytics, and spam complaint alerts. These tools help ensure emails land in recipients' inboxes and not their spam folders. Mailgun also offers domain registration and dedicated IPs, which improve sender reputation and boost deliverability. However, Mailgun’s customer support can be slow, and many users have reported issues with missing documentation or complex configurations requiring more technical knowledge, making it less accessible for new developers.  

---

## MailChimp  
MailChimp is primarily known for marketing-focused tools like campaign management, audience segmentation, and email automation. It is user-friendly for marketers, allowing customization of email templates and managing large subscriber lists. However, MailChimp’s free tier options are more limited compared to other providers, and its pricing structure becomes restrictive, especially for larger projects or higher email volumes. For Assignment 3, MailChimp is less ideal as its strengths are geared more towards marketing than email delivery.  

---
 
One reason I chose Netlify is its ease of integration with web services like SendGrid, which simplifies deployment and email handling. SendGrid was attractive due to its free tier offering and better overall ease of management, though the phone number requirement could be a minor inconvenience. However, compared to Mailgun and MailChimp, SendGrid appears more user-friendly and better suited for the requirements of Assignment 3.  

---

## Sources:
Sources:

https://payproglobal.com/answers/what-is-cold-start/#:~:text=In%20the%20context%20of%20serverless,to%20reach%20its%20full%20performance.
https://docs.aws.amazon.com/whitepapers/latest/security-overview-aws-lambda/benefits-of-lambda.html
https://medium.com/@geethika.guruge/the-good-bad-the-ugly-of-aws-lambda-e06df5930a9
https://www.donnchadh.dev/the-pros-and-cons-of-using-serverless-with-azure-functions-when-to-use-it-and-when-to-avoid-it/#:~:text=The%20Pros%20and%20Cons%20of%20Using%20Serverless%20with,a%20compelling%20middle%20ground.%20...%204%20Conclusion%20
https://www.cloudthat.com/resources/blog/use-cases-and-benefits-of-google-cloud-functions-for-serverless-architectures
https://www.netlify.com/blog/2018/08/06/five-key-benefits-of-going-serverless/
https://docs.netlify.com/integrations/email-integration/
https://www.mailmodo.com/guides/sendgrid-review/
https://www.emailtooltester.com/en/reviews/mailchimp/
https://maileroo.com/blog/mailgun-review/
Used Chatgpt to ensure layout is consistent

