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
                marginTop={['170px','170px','217px','217px']} 
                marginLeft={['8px','8px','0px','0px']}
                height='30px'
                width={['100%','420px','450px','450px']}
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