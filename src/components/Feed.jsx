import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Pagination, Stack, Typography} from '@mui/material'
import {Videos,Navbar,FetchApi} from './'


const Feed = () => {

  const [selectedPage,setSelectedPage] = useState(0);
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    //////////console.log(selectedPage)
    FetchApi(`${selectedPage}`)
      .then((data)=>setVideos(data.data.posts))
  },[selectedPage])
  
  return (
<Stack sx={{ flexDirection: {sx:"row",md:"column"}, alignItems: 'center', justifyContent: 'center' }}>
  <Navbar
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
  />
  <Box p={2} mb={2} ml={3} sx={{ overflowY: 'auto', height: '100vh', flex: 2, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
    <Typography variant="h4" fontWeight="bold" mb={2} ml={3} sx={{ color: 'white' }}>
      Page
      <span style={{ color: '#fff' }}> {selectedPage+1} </span>
    </Typography>
    <Box p={10}>
    <Videos videos={videos} selectedPage={selectedPage}/>
    </Box>
   
    
  </Box>
  
</Stack>

  )
}

export default Feed