import React from 'react';
import {
  Box,
  Flex,
  Image,
  Center
} from '@chakra-ui/react';
import logo from '../images/logo.svg';
import dotImg from '../images/bg-pattern-dots.svg';

const Logo = () => {
    return ( 
        <Flex justify={['center','center','left','none']}>
        <Box display={['none','none','block','block']} marginTop={['0px','-100px','30px','-220px']}>
          <Image position='absolute' 
            marginLeft={['','','0px','750px']}
            w={['0%','0%','250px','25%']}
            src={dotImg} 
          />
          <Image
            marginTop={['-190px','-100px','-840px','-480px']}
            marginLeft={['105px','105px','30px','150px']}
            align={['center','center','none','none']}
            src={logo} />
        </Box>
          <Box display={['block','block','none','none']}>
            <Image
              marginTop={['-190px','-190px','-840px','-480px']}
              src={logo} />
          </Box> 
        
         
      </Flex>
      
     );
}
 
export default Logo;