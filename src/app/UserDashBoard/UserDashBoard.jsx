"use client"

import React, { useState,useEffect } from 'react';
import styles from './UserDashBoard.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import UserForm from '@/components/UserForm/UserForm';
import PaginationRounded from '@/components/Pagination/Pagination';
import UserDataTable from '@/components/UserDataTable/UserDataTable';
import Divider from '@mui/material/Divider';


function UserDashBoard() {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleAddNewUser = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUserData(data);
    };
  
    // Her 5 saniyede bir verileri yenile
    const intervalId = setInterval(fetchData, 5000);
  
    // Komponentin unmount olması durumunda aralığı temizle
    return () => clearInterval(intervalId);
  }, []); // Boş bağımlılık dizisi, sadece bileşenin monte edilme aşamasında çalışmasını sağlar
  



  return (
    <div className={styles.container}>
      <Navbar data={userData} setData={setUserData} onAddNewUser={handleAddNewUser} />
      {showForm && (
        <div className={styles.overlay}>
          <UserForm  close={handleAddNewUser} />
        </div>
      )}
      <SearchBar  data={userData} setData={setUserData} />
      <UserDataTable  data={userData} />
      {!showForm && <PaginationRounded />} 
    </div>
  );
}

export default UserDashBoard;

