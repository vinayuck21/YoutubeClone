import React from 'react'
import {Stack,Box} from '@mui/material'
import {VideoCard} from './'
const Videos = ({videos,selectedPage}) => {
  
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ justifyContent: {sm:"center",md:"start"}}} gap={2}>
      {
        videos.map((item,idx)=>(
        <Box key={idx}>
            <VideoCard video={item} 
            selectedPage={selectedPage}/> 
        </Box>
        )
        )}

    </Stack>
  )
}

export default Videos