import * as React from 'react';
import { Flex, Text } from 'rebass';

const Navbar = () => (
  <nav>
    <Flex
      height={56}
      width={'100vw'}
      p={16}
      sx={{
        overflow: 'hidden',
        boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
      }}
    >
      <Text> My next app </Text>
    </Flex>
  </nav>
);

export default Navbar;
