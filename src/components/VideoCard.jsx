import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { grey } from '@mui/material/colors'
const demoVideoUrl = '/video/GDa8kZLNhJ4'
const VideoCard = ({video: {postId,creator, submission},selectedPage}) => {
  
  return (
    <Card sx={{boxShadow: 'none', borderRadius: 0}}>
        <Link to= {`/video/${postId}`} state={{selectedPage:selectedPage}}>
        <CardMedia image={submission?.thumbnail}
        sx={{width: 350, height:500}}
        />
        </Link>
        <CardContent sx={{backgroundColor:'#1E1E1E',height: '50px'}}>
        <Link to= {`/video/${postId}`} state={{selectedPage:selectedPage}}>
            <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                {submission?.title.slice(0,60)}
                
            </Typography>
            <Typography variant='subtitle2' fontWeight="bold" color="grey">
                {creator?.handle}
                
                <CheckCircle sx={{fontSize:12,color:'grey',ml:'5px'}}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard