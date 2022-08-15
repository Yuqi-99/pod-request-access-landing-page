import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';

const Content = () => {
    return ( 
        <Box position='absolute'
            bgColor='brand.bg'
            marginTop={['30px','30px','20px','20px']} 
            marginLeft={['18px','35px','0px','0px']}
            height={['100px','100px','80px','80px']}
            width={['330px','330px','450px','450px']}
        >
            <Text fontSize={['15px','15px','18px','16px']} 
                color='brand.content'
                fontWeight='light'
                fontFamily='fonts.body'
                textAlign={['center','center','left','left']}
            > 
                Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
            </Text>
        </Box >
     );
}
 
export default Content;
