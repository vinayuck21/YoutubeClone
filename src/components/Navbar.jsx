import React from 'react'
import {Stack} from '@mui/material'
import { Pagination } from '@mui/material'
import {link} from 'react-router-dom'
import { positions } from '@mui/system'
import { useState } from 'react'

import Feed from './'

const Navbar = ({
                selectedPage,
                setSelectedPage}) => {
    
    ////////////////console.log("setSelectedPage type:", typeof setSelectedPage);
    const handleChange = (event, page) => {
        ////////////////console.log("Current page:", page);
        setSelectedPage(page-1);
    };

  return (
  <Pagination
  onChange={handleChange}
  count={10}
  variant="outlined"
  sx={{
    color: 'blue',
    position: 'sticky',
    background: '#fff',
    top: '0', // Adjust the value according to your needs
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
  }}
/>

  );
};

export default Navbar;



