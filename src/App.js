import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'

import {Navbar,Feed,VideoDetail} from './components';

const App = () => (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
    
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )


export default App