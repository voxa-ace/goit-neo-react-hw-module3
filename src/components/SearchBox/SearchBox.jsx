import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Find contacts by name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
