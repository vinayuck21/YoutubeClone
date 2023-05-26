import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import {Feed,Navbar} from './'




export const FetchApi = async (page) => {
  try {
    ////////console.log(url)
    const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    //////////////console.error('Error:', error);
    return null;
  }
};


export default FetchApi;
