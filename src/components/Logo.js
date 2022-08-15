import React from 'react';
import {
  Box,
  Flex,
  Image
} from '@chakra-ui/react';
import logo from '../images/logo.svg';
import dotImg from '../images/bg-pattern-dots.svg';

const Logo = () => {
    return ( 
        <Flex>
        <Box marginTop={['0px','-100px','30px','-220px']}>
          <Image position='absolute' 
            marginLeft={['','','0px','750px']}
            w={['0%','0%','250px','25%']}
            src={dotImg} 
          />
          <Image position='absolute' 
            marginTop={['-190px','-100px','-840px','-480px']}
            marginLeft={['105px','180px','30px','150px']}
            src={logo} />
        </Box> 
      </Flex>
     );
}
 
export default Logo;