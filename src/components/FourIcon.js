import {
    Box,
    Image,
    Stack,
    Wrap
  } from '@chakra-ui/react';
  import spotifyLogo from '../images/spotify.svg';
  import applePodcast from '../images/apple-podcast.svg';
  import googlePodcasts from '../images/google-podcasts.svg';
  import pocketCasts from '../images/pocket-casts.svg';

const FourIcon = () => {
    return ( 
            <Box position='absolute'
                bgColor='brand.bg'
                marginTop={['20px','20px','120px','170px']} 
                align={['center','center','none','none']}
                height='30px'
                width={['95%','100%','450px','450px']}
            >
                <Stack direction={['row']} spacing={['15px','20px','24px','24px']}>
                <Box w={['75px','75px','96px','96px']} 
                    h='29px' 
                    opacity='0.5'>
                    <Image htmlHeight='29px' 
                    htmlWidth='96px' 
                    src={spotifyLogo}/>
                </Box>
                <Box w={['60px','60px','78px','78px']} 
                    h='29px' 
                    opacity='0.5'>
                    <Image htmlHeight='29px' 
                    htmlWidth='78px' 
                    src={applePodcast}/>
                </Box>
                <Box w={['100px','100px','125px','125px']} 
                    h='29px' 
                    opacity='0.5'>
                    <Image htmlHeight='29px' 
                    htmlWidth='125px' 
                    src={googlePodcasts}/>
                </Box>
                <Box w={['102px','102px','129px','129px']} 
                    h='29px' 
                    opacity='0.5'>
                    <Image htmlHeight='29px' 
                    htmlWidth='129px' 
                    src={pocketCasts}/> 
                </Box>
                </Stack>
            </Box>
        
     );
}
 
export default FourIcon;