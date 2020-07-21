import { Button, Input, Spacer, Text, useToasts } from '@zeit-ui/react';
import React, { memo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Flex } from 'rebass';
import { login } from '../api';

interface LoginFormProps {
  switchToSignup: () => void;
  loginFunction?: (email: string, password: string) => any;
}

const LoginScreen = (props: LoginFormProps) => {
  const [_, setToast] = useToasts();

  const refetchAuth = () => ({});
  const [loading, setLoading] = useState(false);
  const { switchToSignup, loginFunction } = props;
  const history = useHistory();
  const { handleSubmit, reset, errors, control } = useForm();
  const onSubmit = (data: any) => {
    console.log('values', data);
    setLoading(true);
    if (loginFunction) {
      loginFunction(data.email, data.password);
    }
    login(data.email, data.password)
      .then((res) => {
        setLoading(false);
        const { token, userId } = res.data;
        if (!token) {
          alert(' went wrong during login . please try again');
          return;
        }
        localStorage.setItem('AUTH_TOKEN', token);
        localStorage.setItem('USER_ID', userId);
        refetchAuth();
        setTimeout(() => {
          history.push('/dashboard');
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);

        let message = 'Something went wrong . Please try again';
        if (err.status === 403) {
          message = 'Wrong Password';
        } else if (err.status === 404) {
          message = 'No User found with email';
        }
        setToast({ text: message });
        reset();
        console.log('erro', err);
      });
  };
  return (
    <Flex flexDirection="column" flex={1}>
      <CardHeader signup={false} />
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={
            <Input
              width="100%"
              status={errors && errors.email ? 'error' : 'default'}
              placeholder="Email"
            />
          }
          name="email"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />
        <Spacer y={1} />
        <Controller
          name="password"
          rules={{ required: true, minLength: 6 }}
          control={control}
          as={
            <Input.Password
              width="100%"
              status={errors && errors.email ? 'error' : 'default'}
              placeholder="Password"
            />
          }
        />
        <Spacer y={1} />
        <Button
          htmlType="submit"
          type="success"
          data-testid="submitBtn"
          onClick={() => handleSubmit((res) => onSubmit(res))}
          loading={loading}
        >
          Login
        </Button>
        <Spacer y={1} />
      </form>
      <CardFooter
        label="Dont have an account"
        onClick={switchToSignup}
        buttonText="Sign Up"
      />
    </Flex>
  );
};

LoginScreen.defaultProps = {
  loginFunction: (email: string, password: string) => ({ email, password }),
};

interface CardFooterProps {
  onClick: () => void;
  label: string;
  buttonText: string;
}
export const CardFooter: React.FC<CardFooterProps> = (
  props: CardFooterProps,
) => {
  const { onClick, label, buttonText } = props;
  return (
    <Flex mt={20} flex={1} justifyContent="space-between" alignItems="center">
      <Text p small>
        {label}
      </Text>
      <Spacer />
      <Button auto size="small" type="secondary-light" ghost onClick={onClick}>
        {buttonText}
      </Button>
    </Flex>
  );
};

interface CardHeaderProps {
  signup: boolean;
}
const CardHeaderMemo = (props: CardHeaderProps) => {
  const { signup } = props;
  return (
    <Text h3 style={{ alignSelf: 'center' }}>
      {signup ? 'Create Account ' : 'Login '}
    </Text>
  );
};

export const CardHeader = memo(CardHeaderMemo);
export default LoginScreen;
