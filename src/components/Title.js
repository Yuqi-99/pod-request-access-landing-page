import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';

const Title = () => {
    return ( 
        <Box>
            <Text fontSize={['24px','30px','45px','40px']}
                color='brand.txt' 
                textTransform = 'uppercase'
                fontFamily='fonts.heading'
                align={['center','center','left','left']}
            >
                Publish your podcasts
            </Text>
            <Text fontSize={['24px','30px','45px','40px']} 
                color='white' 
                textTransform ='uppercase'
                fontFamily='fonts.heading'
                align={['center','center','left','left']}
                marginTop={['5px','5px','0%','0%']}
            > 
                everywhere.
            </Text>
        </Box>
     );
}
 
export default Title;