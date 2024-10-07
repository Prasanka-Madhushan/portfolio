const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contacts')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  telephone: {
    type: String,
    required: [true, 'Telephone number is required'],
    match: [/^\d{10}$/, 'Please fill a valid telephone number'],
  },
  subject: String,
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
});

const Contact = mongoose.model('Contact', contactSchema);

// Handle form submission
app.post('/contacts', async (req, res) => {
  try {
    const { name, email, telephone, subject, message } = req.body;
    const contact = new Contact({ name, email, telephone, subject, message });
    await contact.save();
    res.status(200).send('Form submission received!');
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
