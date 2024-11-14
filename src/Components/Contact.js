import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { contact } from '../data';

function Contact() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgxgcgk', 'template_wu4b6bi', form.current, 'PyRe3UOfhanQExzoO')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    if (formSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [formSubmitted]);

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle text-2xl'>
            I'm excited to connect with you!. Let's start a conversation – I'm just a message away from exploring new opportunities together
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* Info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>{icon}</div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1'>{subtitle}</p>
                    {/* <Link to={`mailto: noelguillenblas@gmail.com`} className='text-accent font-normal'>{description}</Link> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className='space-y-8 w-full max-w-[780px]'>
            <div className="flex gap-8">
              <input type="text" className='input' placeholder='Your Name' name='user_name' required/>
              <input type="email" className='input' placeholder='Your Email' name='user_email' required/>
            </div>
            <input type="text" className='input' placeholder='Subject' name='subject' required/>
            <textarea className='textarea' placeholder='Your Message' name='message' required></textarea>
            <button type='submit' className='btn btn-lg bg-accent hover:bg-accent-hover rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
