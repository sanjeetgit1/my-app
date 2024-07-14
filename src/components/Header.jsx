import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        h={'12'}
        w={'12'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'40'} />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton backgroundColor={'red'}/>
        <DrawerHeader>Video Hub</DrawerHeader>
        <DrawerBody>
<VStack align={'flex-start'}>
  <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
    <Link to={'/'}>Home</Link>
  </Button>
  <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
    <Link to={'/videos'}>Videos</Link>
  </Button>
  <Button  onClick={onClose} variant={'ghost'} colorScheme='purple' >
    <Link to={'/videos?categort=free'}>Free videos</Link>
  </Button>
  <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
    <Link to={'/upload'}>Upload video</Link>
  </Button>
 
</VStack>
<HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'} >
  <Button onClick={onClose} colorScheme={'purple'}>
    <Link to={'/login'}>Log In</Link>
  </Button>
  <Button  onClick={onClose}  variant={'outline'} colorScheme={'purple'}>
    <Link to={'/signup'}>sign Up</Link>
  </Button>
</HStack>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
