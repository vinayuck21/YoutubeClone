import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import {Feed,Navbar} from './'

export const FetchApiId = async(id) => {
    try {
        ////////console.log(url)
        const response = await fetch(`https://internship-service.onrender.com/${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        //////////////console.error('Error:', error);
        return null;
      }
}

export default FetchApiId