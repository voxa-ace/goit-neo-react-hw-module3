import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactDetails}>
        <div className={styles.contactName}>{contact.name}</div>
        <div className={styles.contactNumber}>{contact.number}</div>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
