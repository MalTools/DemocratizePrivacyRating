import { message } from 'antd';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Process the message here (e.g., send to an API)
    console.log('Message received:', formData);

    try {
      // Send data to backend API
      const response = await fetch('http://privacyrating.cloud:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message successfully sent!');       
        setIsSubmitted(true); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        console.error('Failed to send message.');
        message.error('Failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      message.error('Something is wrong... Failed to send message.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or suggestions, feel free to send us a message. Please leave your
        name and email, and we will get back to you as soon as possible.
      </p>
      {isSubmitted && (
        <p style={{ color: 'green', marginBottom: '16px' }}>
          Your message has been submitted. Thank you!
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginTop: '8px',
            }}
          />
        </div>
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginTop: '8px',
            }}
          />
        </div>
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <label>Message:</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginTop: '8px',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
