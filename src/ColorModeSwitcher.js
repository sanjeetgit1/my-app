import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      pos={'fixed'}
      top={'4'}
      right={'4'} 
     zIndex={"overlay"}
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      bgColor={'#FFFFFF'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      
    />
  );
};

export default ColorModeSwitcher;