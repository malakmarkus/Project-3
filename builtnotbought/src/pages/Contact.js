import React, { useState } from 'react';


import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage] = useState('');



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