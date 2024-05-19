"use client"

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import styles from './AvatarSelector.module.css';

const AvatarSelector = ({ onSelectAvatar }) => {
  const [open, setOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAvatarSelect = (avatar) => {
    const fullPath = `/assets/AvatarFoto/${avatar.src}`;
    setSelectedAvatar(fullPath);
    onSelectAvatar(fullPath); // Seçilen avatarın tam yolunu üst bileşene iletiyoruz
    handleClose();
  };

  const avatarImages = [
    { id: 1, src: 'avatar1.jpg' },
    { id: 2, src: 'avatar2.jpg' },
    { id: 3, src: 'avatar3.jpg' },
    { id: 4, src: 'avatar4.jpg' },
    { id: 5, src: 'avatar5.jpg' },
    { id: 6, src: 'avatar6.jpg' },
  ];

  return (
    <div>
      <div className={styles.avatarContainer}>
        <Avatar alt="Selected Avatar" src={selectedAvatar} className={styles.avatar} />
        <IconButton onClick={handleOpen}>
          <PhotoCamera />
        </IconButton>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Avatar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose your avatar from the options below.
          </DialogContentText>
          {avatarImages.map((avatar) => (
            <Button key={avatar.id} onClick={() => handleAvatarSelect(avatar)}>
            <Avatar alt={`Avatar ${avatar.id}`} src={`assets/AvatarFoto/${avatar.src}`} className={styles.avatar} />
            </Button>
            ))}
        </DialogContent>
        <DialogActions>
          <Button className={styles.selectBtn} onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AvatarSelector;


