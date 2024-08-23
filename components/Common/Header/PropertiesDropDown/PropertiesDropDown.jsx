'use client';
import styles from './propertiesDropDown.module.scss';
import Link from 'next/link';

export default function PropertiesDropDown({ setIsPropertiesOpen }) {
  return (
    <div id="properties-menu" role="menu" className={styles.container}>
      <ul className={styles.links}>
        <li>
          <Link
            onClick={() => setIsPropertiesOpen(false)}
            href="/properties"
            className={styles.btn}
            role="menuitem"
            id="property-menu-item-1"
          >
            <small>View Properties</small>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsPropertiesOpen(false)}
            href="/properties/add"
            className={styles.btn}
            role="menuitem"
            id="property-menu-item-2"
          >
            <small>Add Property</small>
          </Link>
        </li>
      </ul>
    </div>
  );
}
