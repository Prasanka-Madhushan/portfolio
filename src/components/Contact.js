import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/.+\@.+\..+/.test(formData.email)) tempErrors.email = 'Email is not valid';
    if (!formData.telephone) tempErrors.telephone = 'Telephone number is required';
    else if (!/^\d{10}$/.test(formData.telephone)) tempErrors.telephone = 'Telephone number is not valid';
    if (!formData.message) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:5000/contacts', formData)
        .then((response) => {
          window.alert('Form submission received!');
          setFormData({
            name: '',
            email: '',
            telephone: '',
            subject: '',
            message: '',
          });
          setErrors({});
        })
        .catch((error) => {
          window.alert('Submission failed: ' + (error.response ? error.response.data : 'An error occurred'));
        });
    } else {
      window.alert('Please fix the form errors before submitting.');
    }
  };

  return (
    <div class="container">
      <div class="bubbles">
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>
        <span class="dot" style={{ '--i': `${Math.random() * 30 + 10}` }}></span>

        <section className="contact" id="contact">
          <h2 className="heading">Contact <span>Me!</span></h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-box">
              <input
                type="tel"
                name="telephone"
                required
                pattern="[0-9]{10}"
                placeholder="Mobile Number"
                value={formData.telephone}
                onChange={handleChange}
              />
              {errors.telephone && <p className="error">{errors.telephone}</p>}
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            <input type="submit" value="Send Message" className="btn" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
