import React from 'react';
import {
  Box,
  Flex,
  Image
} from '@chakra-ui/react';
import imageHost from '../images/image-host.jpg';
import smallImg from '../images/small-image-host.jpg';

const Background = () => {
    return ( 
        <Flex>
        <Box flex='1' 
           height={['20px','20px','750px','540px']}
           bgColor= 'brand.bg'
           marginTop= {['','','0px','120px']}
           marginY='120px'
           marginLeft={['','','0px','120px']}
           >
            <Flex>
              <Image flex='1'
                bgSize='cover'
                bgRepeat='no-repeat' 
                position='absolute' 
                w={['0%','0%','0%','57%']}
                marginLeft='300px'
                marginRight='0px'
                src={imageHost} 
              />
            </Flex>  
            <Flex>
              <Image flex='1'
                bgSize='cover'
                bgRepeat='no-repeat' 
                position='absolute' 
                w={['0%','0%','61%','0%']}
                marginLeft='300px'
                src={smallImg} 
              />
            </Flex>  
        </Box>
      </Flex>
     );
}
 
export default Background;