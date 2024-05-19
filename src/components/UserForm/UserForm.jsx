"use client"

import React, { useState, useEffect } from 'react';
import styles from './UserForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AvatarSelector from './AvatarSelector/AvatarSelector';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close'; 
import IconButton from '@mui/material/IconButton'; 

function UserForm({ close, userData }) {
  const [role, setRole] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [formData, setFormData] = useState({
    id: '', // id özelliği eklendi
    fullName: '',
    email: '',
    username: '',
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        id: userData.id,
        fullName: userData.fullName,
        email: userData.email,
        username: userData.username,
      });
      setRole(userData.role);
      setSelectedAvatar(userData.avatar);
    }
  }, [userData]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (userData) {
        // Kullanıcı bilgilerini güncelleme işlemi için PUT isteği gönderiyoruz
        response = await fetch(`/api/users/${formData.id}`, {
          method: 'PUT', // PUT isteği
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData, // Diğer kullanıcı bilgileri
            role, // Kullanıcı rolü
            avatar: selectedAvatar, // Kullanıcı avatarı
          }),
        });
      } else {
        // Yeni kullanıcı ekleme işlemi için POST isteği gönderiyoruz
        response = await fetch('/api/users', {
          method: 'POST', // POST isteği
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData, // Yeni kullanıcı bilgileri
            role, // Kullanıcı rolü
            avatar: selectedAvatar, // Kullanıcı avatarı
          }),
        });
      }
      if (response.ok) {
        console.log(userData ? 'User updated successfully!' : 'User added successfully!');
        close(); // Ekleme veya güncelleme işlemi tamamlandıktan sonra formu kapat
      } else {
        console.error('Failed to add/update user');
      }
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };
  
  
  return (
    console.log(userData),
    <div className={styles.container}>
      <div className={styles.closeBtn} onClick={close}>
        <IconButton sx={{color:"#fff"}} >
          <CloseIcon />
        </IconButton>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <TextField 
            id="fullName" 
            name="fullName"
            label="Full Name" 
            variant="outlined" 
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <TextField 
            id="username" 
            name="username"
            label="Username" 
            variant="outlined" 
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <TextField 
            id="email" 
            name="email"
            label="Email" 
            variant="outlined" 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={(event) => setRole(event.target.value)}
            >
              <MenuItem value="Contributor">Contributor</MenuItem>
              <MenuItem value="Subscriber">Subscriber</MenuItem>
              <MenuItem value="Author">Author</MenuItem>
              <MenuItem value="Administrator">Administrator</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.formGroup}>
          <p className={styles.text}>Select Avatar</p>
          <AvatarSelector onSelectAvatar={handleAvatarSelect} />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.btnContainer}>
            <Button 
              type="submit"
              variant="contained" 
              className={styles.addBtn} 
              sx={{ 
                color: 'white', 
                backgroundColor: '#2940D3',
                fontWeight: 600, 
                fontSize: '13px',
                width: '124px',
                height: '38px',
                textTransform: 'none' 
              }}
              size='Small'
            >
              {userData ? 'Update User' : 'Create User'}
            </Button>
          </div>    
        </div>
      </form>
    </div>
  );
}
export default UserForm;
