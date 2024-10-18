const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Endpoint to send feedback
app.post('/send-feedback', (req, res) => {
    const { whatsappUsername, favoriteAdmin, suggestions, newAdmin } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service (e.g., Gmail)
        auth: {
            user: 'theeone003@gmail.com', // Replace with your email
            pass: 'susanoo900' // Replace with your email password or app password
        }
    });

    // Email options
    const mailOptions = {
        from: 'theeone003@gmail.com', // Replace with your email
        to: 'anthony.campbell736@gmail.com', // Replace with the recipient's email
        subject: 'Feedback from RIZZLERS ET CATFISHES',
        text: `
            WhatsApp Username: ${whatsappUsername}
            Favorite Admin: ${favoriteAdmin}
            Suggestions: ${suggestions}
            New Admin: ${newAdmin ? newAdmin : 'No new admin requested'}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Feedback sent successfully');
    });
});

// Send all requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});Enter file contents here
