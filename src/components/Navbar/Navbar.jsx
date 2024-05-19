"use client"



import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function Navbar({ onAddNewUser, data, setData }) {
  const [activeButton, setActiveButton] = useState('All');

  const handleFilter = (role) => {
    setActiveButton(role);

    if (role === 'All') {
      setData(data);
    } else {
      const filteredData = data.filter((item) => item.role === role);
      setData(filteredData);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src="/assets/icons/usersIcon.png" alt='Personal Dashboard' width={20} height={20} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Users</h1>
      </div>
      
      <div className={styles.btnLinks}>
        <button 
          onClick={() => handleFilter('All')} 
          className={`${styles.btn} ${activeButton === 'All' ? styles.active : ''}`}
        >
          All Users
        </button>
        <button 
          onClick={() => handleFilter('Contributor')} 
          className={`${styles.btn} ${activeButton === 'Contributor' ? styles.active : ''}`}
        >
          Contributor
        </button>
        <button 
          onClick={() => handleFilter('Author')} 
          className={`${styles.btn} ${activeButton === 'Author' ? styles.active : ''}`}
        >
          Author
        </button>
        <button 
          onClick={() => handleFilter('Administrator')} 
          className={`${styles.btn} ${activeButton === 'Administrator' ? styles.active : ''}`}
        >
          Administrator
        </button>
        <button 
          onClick={() => handleFilter('Subscriber')} 
          className={`${styles.btn} ${activeButton === 'Subscriber' ? styles.active : ''}`}
        >
          Subscriber
        </button>
      </div>
      <div className={styles.addNewBtn}>
        <Button 
          variant="contained" 
          startIcon={<AddCircleOutlineIcon />} 
          className={styles.addBtn} 
          sx={{ 
            color: 'white', 
            backgroundColor: '#2940D3',
            fontWeight: 600, 
            fontSize: '13px',
            textTransform: 'none'
          }}
          size='medium'
          onClick={onAddNewUser}
        >
          Add New User
        </Button>
      </div>
      <Divider className={`${styles.divider} ${activeButton !== '' ? styles.activeDivider : ''}`} />
    </div>
  );
}

export default Navbar;
