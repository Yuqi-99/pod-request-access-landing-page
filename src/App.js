import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  Input,
  Button,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import logo from './images/logo.svg';
import spotifyLogo from './images/spotify.svg';
import applePodcast from './images/apple-podcast.svg';
import googlePodcasts from './images/google-podcasts.svg';
import pocketCasts from './images/pocket-casts.svg';
import imageHost from './images/image-host.jpg';
import smallImg from './images/small-image-host.jpg';
import dotImg from './images/bg-pattern-dots.svg';
import { useState } from 'react';
import validator from 'validator';

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
    <Stack bgColor= 'brand.bg'
      height={['950px','950px','1050px','auto']}
      width={['100%','100%','100%','100%']}> 
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
                w={['0%','0%','0%','750px']}
                marginLeft='390px'
                marginRight='0px'
                src={imageHost} 
              />
            </Flex>  
            <Flex>
              <Image flex='1'
                bgSize='cover'
                bgRepeat='no-repeat' 
                position='absolute' 
                w={['0%','0%','470px','0%']}
                marginLeft='300px'
                src={smallImg} 
              />
            </Flex>  
        </Box>
      </Flex>
      <Flex>
        <Box marginTop={['0px','-100px','30px','-180px']}>
          <Image position='absolute' 
            marginLeft={['','','0px','1000px']}
            w={['0%','0%','250px','250px']}
            src={dotImg} 
          />
          <Image position='absolute' 
            marginTop={['-190px','-100px','-840px','-515px']}
            marginLeft={['105px','180px','30px','150px']}
            src={logo} />
        </Box> 
      </Flex>
      <Flex>
        {/* Box before title and content */}
        <Box position='absolute'
           marginTop={['-130px','-130px','-630px','-586px']} 
           marginLeft={['15px','15px','15px','155px']}
           height='450px'
           width={['95%','590px','590px','590px']}
           bgColor= 'brand.bg'
           >
            {/* Box for show title and content  */}
            <Box position='absolute' 
              bgColor='brand.bg'
              marginTop='70px' 
              marginLeft={['-15px','-8px','0px','0px']}
              height='380px'
              width={['100%','570px','590px','630px']}
              > 
                <Text fontSize={['27px','43px','45px','45px']}
                  color='brand.txt' 
                  textTransform = 'uppercase'
                  fontFamily='fonts.heading'
                  marginLeft={['20px','15px','0%','0%']}
                  >
                    Publish your podcasts
                </Text>
                <Text fontSize={['30px','43px','45px','45px']} 
                  color='white' 
                  textTransform ='uppercase'
                  fontFamily='fonts.heading'
                  marginLeft={['90px','90px','0%','0%']}
                  marginTop={['5px','5px','0%','0%']}
                  > 
                  everywhere.
                </Text>
                {/* Box to hold the content */}
                <Box position='absolute'
                  bgColor='brand.bg'
                  marginTop={['30px','30px','20px','20px']} 
                  marginLeft={['25px','35px','0px','0px']}
                  height={['100px','100px','80px','80px']}
                  width={['330px','330px','450px','450px']}
                >
                  <Text fontSize={['15px','15px','18px','18px']} 
                    color='brand.content'
                    fontWeight='light'
                    fontFamily='fonts.body'
                    textAlign={['center','center','left','left']}
                  > 
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
                  </Text>
                </Box >
                {/* Box for four icon below */}
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
                {/* Box to handle email input section */}
                <Box 
                  bgColor='brand.bg'
                  marginTop={['200px','200px','125px','125px']} 
                  marginLeft={['5px','10px','0px','0px']}
                  height={['100%','','56px','56px']}
                  width={['100%','400px','427px','427px']}
                >
                  <InputGroup>
                    <FormControl marginTop={['100px','100px','2px','2px']}
                    onChange={(e) => validateEmail(e)}
                    >
                      <Input type='email'
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
                      <Button border='none' 
                          borderRadius='30px'
                          bgColor='brand.txt'
                          _hover={{bg:'brand.btnHover'}}
                          fontSize={['16px','18px','12px','12px']}
                          position='absolute'
                          marginTop={['390px','390px','20px','20px']}
                          marginLeft={['-310px','-300px','-110px','-110px']}
                          height={['75px','75px','45px','45px']}
                          width={['850%','850%','140px','140px']}
                          onChange={(e) => validateEmail(e)}
                          > Request Access
                        </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text fontSize='11px'
                  marginTop='5px'
                  marginLeft='18px'
                  color='red'
                  fontWeight='light'
                  fontFamily='fonts.body'>
                    {emailError}</Text>
                </Box>
            </Box>
          
        </Box> 
      </Flex>
    </Stack>
  );
}

export default App;
