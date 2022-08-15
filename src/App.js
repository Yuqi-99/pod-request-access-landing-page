import React from 'react';
import {
  Box, Text, Flex, Stack, Input, Button, InputGroup, FormControl, InputRightElement
} from '@chakra-ui/react';
import { useState } from 'react';
import validator from 'validator';
import FourIcon from './components/FourIcon';
import Logo from './components/Logo';
import Background from './components/Background';
import Content from './components/Content';
import Title from './components/Title';

function App(){
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
    if (email !== '' && validator.isEmail(email)){
      setEmailError('');
    } else if (email === ''){
      setEmailError('Oops!Please add your email');
    } else {
      setEmailError('Oops!Please check your email');
    }
  }
// fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
  return (
    <Stack 
      bgColor= 'brand.bg'
      height={['950px','950px','1025px','auto']}
      width={['100%','100%','100%','100%']}
    > 
      <Background />
      <Logo />
      <Flex>
        {/* Box before title and content */}
        <Box 
          position='absolute'
          marginTop={['-130px','-130px','-630px','-586px']} 
          marginLeft={['15px','15px','15px','155px']}
          height='450px'
          width={['95%','590px','590px','550px']}
          bgColor= 'brand.bg'
        >
            {/* Box for show title and content  */}
            <Box 
              position='absolute' 
              bgColor='brand.bg'
              marginTop='70px' 
              marginLeft={['-15px','-8px','0px','0px']}
              height='380px'
              width={['100%','570px','590px','550px']}
            > 
                <Title />
                <Content />
                <FourIcon />

                {/* Box to handle email input section */}
                <Box 
                  bgColor='brand.bg'
                  marginTop={['200px','200px','125px','125px']} 
                  marginLeft={['5px','10px','0px','0px']}
                  height={['100%','','56px','56px']}
                  width={['100%','400px','427px','427px']}
                >
                  <InputGroup>
                    <FormControl 
                      marginTop={['100px','100px','2px','2px']}
                      onChange={(e) => validateEmail(e)}
                    >
                      <Input 
                        type='email'
                        height={['75px','75px','56px','56px']}
                        width={['95%','100%','100%','100%']}
                        marginTop={['-50px','-50px','0%','0%']}
                        marginLeft={['15px','15px','0%','0%']} 
                        bgColor='brand.emailHolder'
                        color='brand.content'
                        border='none' 
                        borderRadius='30px' 
                        placeholder='Email address'
                      />
                    </FormControl>
                    {/* make the button a part of the inputbar */}
                    <InputRightElement> 
                    {/* Request button */}
                      <Button 
                        border='none' 
                        borderRadius='30px'
                        bgColor='brand.txt'
                        _hover={{bg:'brand.btnHover'}}
                        fontSize={['16px','18px','12px','12px']}
                        position='absolute'
                        marginTop={['390px','390px','20px','20px']}
                        marginLeft={['-290px','-300px','-110px','-110px']}
                        height={['75px','75px','45px','45px']}
                        width={['800%','850%','140px','140px']}
                        onChange={(e) => validateEmail(e)}
                      > Request Access
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text 
                    fontSize='11px'
                    marginTop='5px'
                    marginLeft='18px'
                    color='red'
                    fontWeight='light'
                    fontFamily='fonts.body'
                  >
                    {emailError}</Text>
                </Box>
            </Box>
        </Box> 
      </Flex>
    </Stack>
  );
}

export default App;
