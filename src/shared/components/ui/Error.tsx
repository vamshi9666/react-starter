import * as React from 'react';
import { Text } from '@zeit-ui/react';
import { AlertCircle } from '@zeit-ui/react-icons';
import { Flex } from 'rebass';

const ErrorText = (props: { children: string }) => {
  const { children } = props;
  return (
    <Flex alignItems="center">
      <AlertCircle size={16} />
      <Text type="error">{children}</Text>
    </Flex>
  );
};

export default ErrorText;
