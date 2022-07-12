import React, { useState } from 'react';


import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [] = useState({ name: '', email: '', message: '' });

  const [] = useState('');

  <Stack
  
    direction="row "
    justifyContent="space-around"
    sx={
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }



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