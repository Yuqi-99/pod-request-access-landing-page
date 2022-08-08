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
import dotImg from './images/bg-pattern-dots.svg';
import { useState } from 'react';
import validator from 'validator';

function App(){
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
    if (email){
      if (validator.isEmail(email)) {
        setEmailError('');
      } 
      else {
        setEmailError('Oops!Please check your email');
      }
    }
    else{
      setEmailError('Oops!Please add your email');
    }
  }

  return (
    <Stack bgColor= 'brand.bg'> 
      <Flex>
        <Box flex='1' 
           height='580px'
           bgColor= 'brand.bg'
           marginY='120px'
           marginLeft='120px'
           >
            <Flex>
              <Image flex='1'
                bgSize='cover'
                bgRepeat='no-repeat' 
                position='absolute' 
                htmlWidth='800px'
                marginLeft='340px'
                src={imageHost} 
              />
            </Flex>  
        </Box>
      </Flex>
      <Flex>
        <Box marginTop='-180px'>
          <Image position='absolute' 
            marginLeft='1030px'
            src={dotImg} 
          />
          <Image position='absolute' 
            marginTop='-560px'
            marginLeft='150px'
            src={logo} />
        </Box> 
      </Flex>
      <Flex>
        {/* Box before title and content */}
        <Box position='absolute'
           marginTop='-586px' 
           marginLeft='155px'
           height='450px'
           width='590px'
           bgColor= 'brand.bg'
           >
            {/* Box for show title and content  */}
            <Box position='absolute' 
              bgColor='brand.bg'
              marginTop='70px' 
              marginLeft='0px'
              height='380px'
              width='590px'
              > 
                <Text fontSize='45px'
                  color='brand.txt' 
                  textTransform = 'uppercase'
                  fontFamily='fonts.heading'
                  fontWeight='light'
                  >
                    Publish your podcasts
                </Text>
                <Text fontSize='45px' 
                  color='white' 
                  textTransform ='uppercase'
                  fontFamily='fonts.heading'
                  fontWeight='light'
                  > 
                  everywhere.
                </Text>
                {/* Box to hold the content */}
                <Box position='absolute'
                  bgColor='brand.bg'
                  marginTop='20px' 
                  marginLeft='0px'
                  height='80px'
                  width='450px'
                >
                  <Text fontSize='18px' 
                    color='brand.content'
                    fontWeight='light'
                    fontFamily='fonts.body'
                  > 
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
                  </Text>
                </Box >
                {/* Box for four icon below */}
                <Box position='absolute'
                  bgColor='brand.bg'
                  marginTop='217px' 
                  marginLeft='0px'
                  height='30px'
                  width='450px'
                >
                  <Stack direction={['column', 'row']} spacing='24px'>
                    <Box w='96px' h='29px' opacity='0.5'>
                      <Image htmlHeight='29px' htmlWidth='96px' src={spotifyLogo}/>
                    </Box>
                    <Box w='78px' h='29px' opacity='0.5'>
                      <Image htmlHeight='29px' htmlWidth='78px' src={applePodcast}/>
                    </Box>
                    <Box w='125px' h='29px' opacity='0.5'>
                      <Image htmlHeight='29px' htmlWidth='125px' src={googlePodcasts}/>
                    </Box>
                    <Box w='129px' h='29px' opacity='0.5'>
                      <Image htmlHeight='29px' htmlWidth='129px' src={pocketCasts}/> 
                    </Box>
                  </Stack>

                </Box>
                {/* Box to handle email input section */}
                <Box position='absolute'
                  bgColor='brand.bg'
                  marginTop='125px' 
                  marginLeft='0px'
                  height='56px'
                  width='427px'
                >
                  <InputGroup>
                    <FormControl marginTop='2px'>
                      <Input type='email'
                        height='56px' 
                        bgColor='brand.emailHolder'
                        color='brand.content'
                        border='none' 
                        borderRadius='30px' 
                        placeholder='Email address'
                        onChange={(e) => validateEmail(e)}
                        />
                    </FormControl>
                    {/* make the button a part of the inputbar */}
                    <InputRightElement> 
                    {/* Request button */}
                      <Button border='none' 
                          borderRadius='30px'
                          bgColor='brand.txt'
                          _hover={{bg:'brand.btnHover'}}
                          fontSize='12px'
                          position='absolute'
                          marginTop='20px'
                          marginLeft='-110px'
                          height='45px'
                          width='140px'
                          
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
