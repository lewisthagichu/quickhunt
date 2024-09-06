'use client';
import styles from './Contact.module.scss';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (name.trim() === '') {
        toast.error('Please enter your name');
        return;
      }

      if (email.trim() === '' || !email.includes('@')) {
        toast.error('Please enter a valid email address');
        return;
      }

      if (message.trim() === '') {
        toast.error('Please enter your message');

        return;
      }

      emailjs
        .sendForm('service_c9uerbf', 'template_zzu7gy6', formRef.current, {
          publicKey: '51GrnnqtQ3FE-YPhq',
        })
        .then(
          () => {
            setFormData({
              name: '',
              email: '',
              message: '',
            });

            toast.success('Message sent successfully');
          },
          (error) => {
            console.log(error);
            throw new Error('Something went wrong. Please try again');
          }
        );
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Contact Us</h1>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>You can find us at</h2>
            <ul>
              <li>
                <h5>Email</h5>
                <p>info@lewisthagichu.com</p>
              </li>
              <li>
                <h5>Phone Number</h5>
                <p>+254722797858</p>
              </li>
              <li>
                <h5>Location</h5>
                <p>Nairobi, Kenya</p>
              </li>
              <li className={styles.socials}>
                <a href="https://github.com/lewisthagichu" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lewis-thagichu/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>

                <a href="https://x.com/home" target="_blank">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.email}>
            <h2>Get in touch</h2>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                value={message}
                onChange={handleChange}
                placeholder="Your message..."
                required
              ></textarea>
              <button className={`btn ${styles.btn}`}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
