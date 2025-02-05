import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || ''); // Ensure your API key is set

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, service, phoneNumber } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ message: 'Required fields are missing.' });
  }

  const message = {
    to: 'your-email@example.com', // Replace with your recipient email
    from: 'noreply@chromasols.com', // Replace with a verified sender email
    subject: `New Service Inquiry: ${service}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber || 'Not Provided'}\nService: ${service}`,
    html: `
      <h2>New Service Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber || 'Not Provided'}</p>
      <p><strong>Service:</strong> ${service}</p>
    `,
  };

  try {
    await sgMail.send(message);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
