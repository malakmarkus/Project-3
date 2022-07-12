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
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
        <h2 class="mb-4 text-xl antialiased font-semibold text-center text-gray-800">Send Us a Message</h2>
        <form class="mx-8 space-y-8">
            <div>
                <input type="text"
                    class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                    placeholder="Full Name" />
            </div>
            <div>
                <input type="text"
                    class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                    placeholder="Your Email" />
                <span class="text-xs text-red-600">Email field required</span>
            </div>
            <div>
                <input type="text"
                    class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                    placeholder="Subject" />
            </div>
            <div>
                <textarea name="message"
                    class="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
                    placeholder="Enter your message"></textarea>
            </div>

            <button class="block w-full px-2 py-4 mt-2 text-white bg-black rounded-full">Send
                Form</button>
        </form>
    </div>
</div>
  );
}

export default ContactForm;