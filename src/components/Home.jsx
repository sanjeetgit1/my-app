import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

import { Image } from '@chakra-ui/react';


const Home = () => {
  return (
    <Box>
<Mycarousel/>
    </Box>
  )
};
const Mycarousel =()=>{
    <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
<Box w="full" h={'100vh'} >
<Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} >
        Watch The Future
      </Heading>

</Box>

    </Carousel>
}

export default Home
