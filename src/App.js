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
      height={['calc(110vh)','calc(100vh)','calc(133vh)','calc(100vh)']}
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
          width={['95%','95%','590px','550px']}
          bgColor= 'brand.bg'
        >
            {/* Box for show title and content  */}
            <Box 
              bgColor='brand.bg'
              marginTop='70px' 
              align={['center','center','none','none']}
              height={['220px','200px','380px','380px']}
              width={['100%','100%','590px','550px']}
            > 
                <Title />
                <Content />
                <FourIcon />

                {/* Box to handle email input section */}
                <Box 
                  bgColor='brand.bg'
                  marginTop={['100px','240px','20px','50px']} 
                  marginLeft={['0','0','0px','0px']}
                  width={['100%','100%','427px','427px']}
                >
                  <InputGroup>
                    <FormControl 
                      onChange={(e) => validateEmail(e)}
                    >
                      <Input 
                        type='email'
                        height={['65px','65px','56px','56px']}
                        width={['95%','95%','100%','100%']}
                        marginLeft={['10px','10px','0%','0%']} 
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
                        display={['none','none','block','block']}
                        border='none' 
                        borderRadius='30px'
                        bgColor='brand.txt'
                        _hover={{bg:'brand.btnHover'}}
                        fontSize='12px'
                        marginTop='15px'
                        marginLeft='-110px'
                        height='45px'
                        width='140px'
                        onChange={(e) => validateEmail(e)}
                      > Request Access
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                    <Button 
                        display={['block','block','none','none']}
                        border='none' 
                        borderRadius='30px'
                        bgColor='brand.txt'
                        _hover={{bg:'brand.btnHover'}}
                        fontSize='16px'
                        height='65px'
                        width='95%'
                        marginLeft='10px'
                        marginTop='5'
                        onChange={(e) => validateEmail(e)}
                      > Request Access
                      </Button>
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