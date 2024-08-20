import styles from './mission.module.scss';

export default function Mission() {
  return (
    <section id="mission" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headline}>
          <h2>How We Help</h2>
        </div>
        <div className={styles.content}>
          <p>
            Our goal is to make finding and renting your ideal property
            effortless. Whether you’re a house hunter looking for the perfect
            place to call home or a property owner eager to connect with
            potential tenants, our platform is designed to bridge the gap.
          </p>
          <p>
            For renters, we provide a full-fledged search tool that enables you
            to browse through the listings, bookmark the properties that
            interest you, and communicate with the owners. To property owners,
            we offer an easy listing process that allows you to manage your
            properties and have access to a large number of potential tenants.
            At BomaBora, we bring homes and people together, making your next
            move the best one yet.
          </p>
        </div>
      </div>
    </section>
  );
}
