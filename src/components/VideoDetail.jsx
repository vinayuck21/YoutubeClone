import {useState,useEffect} from 'react'
import {Link,useParams,useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Stack,Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Video,FetchApi,FetchApiId} from './'

const VideoDetail = () => {
  const location = useLocation();
  const selectedPage = location.state?.selectedPage;
  const[videoDetail,setVideoDetail]=useState(null);
  const {id} = useParams()
  
  useEffect(()=>{
    console.log(selectedPage)
    FetchApiId(`videos?page=${selectedPage}`) 
    .then((data)=>{
      const posts = data.data.posts;
      const foundPost = posts.find(post => post.postId === id);
      //console.log(foundPost)
      setVideoDetail(foundPost)  
    }
    )

  },[id])
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky',top:'86'}}>
            <ReactPlayer url={`${videoDetail?.submission?.mediaUrl}`}
            className="react-player"
            controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {videoDetail?.submission?.title}
            </Typography>
            <Stack direction='column' gap='10px'justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
                <Typography variant={{sm:'subtitle1',md:'h6'}} color="#fff">
                  {videoDetail?.creator?.handle}
                  <CheckCircle sx={{fontSize:12,color:'grey',ml:'5px'}}/>
                </Typography>
                <Stack direction='row' gap='20px' align-items='center'>
                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {videoDetail?.reaction.count} reactions
                  </Typography>
                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {videoDetail?.comment.count} comments
                  </Typography>
                </Stack>
                <Typography variant='body1' color='grey'>
                    {videoDetail?.submission?.description}
                  </Typography>
            </Stack>
          </Box>
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail