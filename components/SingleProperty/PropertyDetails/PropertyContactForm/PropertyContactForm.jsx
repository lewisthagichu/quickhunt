import styles from './propertyContactForm.module.scss';

export default function PropertyContactForm() {
  return (
    <form className={styles.container}>
      <div className={styles.row}>
        <label>Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          // value={fields.name}
        />
      </div>
      <div className={styles.row}>
        <label>Email*</label>
        <input
          type="text"
          id="email"
          name="name"
          placeholder="Your Email"
          required
          // value={fields.name}
        />
      </div>
      <div className={styles.row}>
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          // value={fields.name}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your message"
          required
          // value={fields.message}
        ></textarea>
      </div>

      <div className={styles.bigBtn}>
        <button className={`btn ${styles.btn}`} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}
