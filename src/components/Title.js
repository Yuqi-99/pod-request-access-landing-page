import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';

const Title = () => {
    return ( 
        <Box>
            <Text fontSize={['25px','43px','45px','40px']}
                color='brand.txt' 
                textTransform = 'uppercase'
                fontFamily='fonts.heading'
                marginLeft={['25px','15px','0%','0%']}
            >
                Publish your podcasts
            </Text>
            <Text fontSize={['25px','43px','45px','40px']} 
                color='white' 
                textTransform ='uppercase'
                fontFamily='fonts.heading'
                marginLeft={['95px','90px','0%','0%']}
                marginTop={['5px','5px','0%','0%']}
            > 
                everywhere.
            </Text>
        </Box>
     );
}
 
export default Title;