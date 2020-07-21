/* eslint-disable react/display-name */
import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Image, Text } from 'rebass';

const Left = memo(() => (
  <Flex
    flex={1}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize={5}>{'intro text '}</Text>
  </Flex>
));

const Right = memo(
  () => (
    <Image
      style={{ maxHeight: '80vh', objectFit: 'contain' }}
      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
    />
  ),
  () => false,
);
function HomeScreen() {
  const history = useHistory();
  const isLoggedIn = false;
  useEffect(() => {
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, [isLoggedIn]);
  return (
    <Flex m={24} justifyContent="space-around" flexDirection="row">
      <Left />
      <Right />
    </Flex>
  );
}

export default HomeScreen;
