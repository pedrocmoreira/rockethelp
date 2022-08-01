import React, { useState } from 'react';
import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native'

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const { colors } = useTheme();

  const navigation = useNavigation(); 

  function handleSignIn(){
    navigation.navigate('home');
  }

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse a sua conta 
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4}/>}
        onChangeText={setName}
      />
      <Input
        placeholder="Senha"
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4}/>}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title='Entrar'
        w="full"
        onPress={handleSignIn}
      />
    </VStack>
  )
}