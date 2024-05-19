"use client"

// SearchBar.js

import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import DeleteIcon from '@mui/icons-material/Delete';

function SearchBar({ data, setData,}) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const filteredData = data.filter((item) =>
      item.username.toLowerCase().includes(value.toLowerCase()) ||
      item.email.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };



  return (
    <div className={styles.container}>
      <SearchSharpIcon sx={{ fontSize: 35 }} className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchText}
        onChange={handleSearch}
      />
      <div className={styles.deleteContainer}>
        <DeleteIcon
          sx={{
            color: '#82868c',
            cursor: 'pointer',
            width: 30,
            height: 30,
          }}
          className={styles.deleteIcon}
          
        />
        <button  className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}

export default SearchBar;
