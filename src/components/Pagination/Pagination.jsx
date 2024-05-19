"use client"

import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import style from './Pagination.module.css';

export default function PaginationRounded() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const count = Math.ceil(data.length / 5);
        setPageCount(count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };
  
  return (
    <div className={style.container}>
      <Stack spacing={2}>
        <Pagination
          className={style.pagination}
          count={pageCount}
          shape="rounded"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
