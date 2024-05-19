"use client"

import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'; 
import Image from 'next/image';
import styles from "./UserDataTable.module.css";
import UserForm from '../UserForm/UserForm';
import { Modal } from '@mui/material';

const checkboxSpan = <span className={styles.icon}><CheckBoxOutlineBlankIcon/></span>;

export default function BasicTable({ data,}) {
  const [editUserId, setEditUserId] = useState(null); // Düzenlenen kullanıcının ID'si
  const [open, setOpen] = useState(false); // Modal açık mı?

  useEffect(() => {
    // Herhangi bir değişiklik olmadığı için useEffect gerekli değil
    // Ancak silme işlemindeki veri güncellemesi için useEffect kullanılabilir
  }, [data]); // data prop'unun değişikliklerini izle

  const handleEdit = (userId) => {
    setEditUserId(userId); // Düzenlenen kullanıcının ID'sini ayarla
    setOpen(true); // Modal'ı aç
  };

  const handleClose = () => {
    setOpen(false); // Modal'ı kapat
    setEditUserId(null); // Düzenlenen kullanıcının ID'sini sıfırla
  };
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/delete/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Kullanıcı başarıyla silindiği için kullanıcı listesini güncelle
        // data prop'unu güncelleme işlemi için setUsers yerine props olarak gelen setData fonksiyonunu kullanmalısın
        console.log('User deleted successfully!');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };




  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#F5F5F7' }}> 
            <TableRow>
              <TableCell>{checkboxSpan}</TableCell> 
              <TableCell sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>Avatar</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>Username</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>Role</TableCell>
              <TableCell  sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40', }}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id} style={{ height: '100px' }}> 
                <TableCell padding="checkbox"> 
                  <Checkbox
                    
                  />
                </TableCell>
                <TableCell component="th" scope="row" sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>
                  <Image className={styles.avatar} src={user.avatar} alt='Avatar' width={40} height={40} />
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '12px', color: '#3A3C40' }}>{user.fullName}</TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: '12px', color: '#3A3C40' }}>{user.username}</TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: '12px', color: '#3A3C40' }}>{user.email}</TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: '12px', color: '#3A3C40' }}>{user.role}</TableCell>
                <TableCell  sx={{ fontWeight: 500, fontSize: '12px', color: '#3A3C40', }}>
                  <IconButton aria-label="edit" onClick={() => handleEdit(user.id)}> {/* handleEdit fonksiyonunu kullanıcı id'si ile çağır */}
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => deleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <div>
          <UserForm close={handleClose} userData={data.find(user => user.id === editUserId)} />
        </div>
      </Modal>
    </div>
  );
}
