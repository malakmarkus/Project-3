import React, { useState } from 'react';


import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <div>
          <h2>Send Us a Message</h2>
          <form>
              <div>
                  <input type="text"
                      placeholder="Full Name" />
              </div>
              <div>
                  <input type="text"
                      placeholder="Your Email" />
                  <span>Email field required</span>
              </div>
              <div>
                  <input type="text"
                      placeholder="Subject" />
              </div>
              <div>
                  <textarea name="message"
                      placeholder="Enter your message"></textarea>
              </div>

              <button>Send Form</button>
          </form>
      </div>
  </div>
  );
}

export default ContactForm;