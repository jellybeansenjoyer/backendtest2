const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

// Route to send a notification using OneSignal API
app.post('/sendNotification', (req, res) => {
  const apiUrl = 'https://onesignal.com/api/v1/notifications';
  const apiKey = 'OGI0OTg1MjItZjdjOS00MjkyLWIyODQtODhkNzFmZWI0NDhl';

  const data = {
    app_id: '21e894da-b379-4f1d-a16f-9728a23e9092',
    contents: {
      en: 'Hi baby' // Get the notification message from the request body
    },
    included_segments: ['All']
  };

  axios.post(apiUrl, data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${OGI0OTg1MjItZjdjOS00MjkyLWIyODQtODhkNzFmZWI0NDhl}`
    }
  })
    .then(response => {
      console.log('Notification sent successfully:', response.data);
      res.status(200).json({ success: true, message: 'Notification sent successfully' });
    })
    .catch(error => {
      console.error('Error sending notification:', error);
      res.status(500).json({ success: false, message: 'Error sending notification' });
    });
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});