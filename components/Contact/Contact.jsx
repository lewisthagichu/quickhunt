import styles from './Contact.module.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
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
                <p>hello@lewisthagichu.com</p>
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
            <h2>Let's get in touch</h2>
            <form className={styles.form}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                id="message"
                rows="5"
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
