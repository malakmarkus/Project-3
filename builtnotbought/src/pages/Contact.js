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
    <div class="">
    <div class="">
        <h2 class="">Send Us a Message</h2>
        <form class="">
            <div>
                <input type="text"
                    class=""
                    placeholder="Full Name" />
            </div>
            <div>
                <input type="text"
                    class=""
                    placeholder="Your Email" />
                <span class="">Email field required</span>
            </div>
            <div>
                <input type="text"
                    class=""
                    placeholder="Subject" />
            </div>
            <div>
                <textarea name="message"
                    class=""
                    placeholder="Enter your message"></textarea>
            </div>

            <button class="">Send
                Form</button>
        </form>
    </div>
</div>
  );
}

export default ContactForm;