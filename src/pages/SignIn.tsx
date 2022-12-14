import ReactLogo from '../assets/react.svg';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { FormEvent, useState } from 'react';
import axios from 'axios';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/login', {
      email: 'foo@bar.com',
      password: '123456',
    });
    setIsUserSignedIn(true);
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <img src={ReactLogo} height={98} width={93.78} />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
      </header>
      {isUserSignedIn && <p className='text-cyan-500 mt-4 py-2 px-4 rounded border-solid border-2 border-cyan-500'>Login efetuado com sucesso</p>}
      <form
        className='flex flex-col items-stretch w-full max-w-sm mt-10'
        onSubmit={handleSignIn}
      >
        <div className='flex flex-col gap-3'>
          <Text asChild className='font-semibold'>
            <label htmlFor='email'>Endereço de e-mail</label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type='email'
              id='email'
              placeholder='Digite seu e-mail'
              data-testid="email"
            />
          </TextInput.Root>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <Text asChild className='font-semibold'>
            <label htmlFor='password'>Senha</label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type='password'
              id='password'
              placeholder='********'
              data-testid="password"
            />
          </TextInput.Root>
        </div>
        <div className='flex gap-2 mt-3'>
          <Checkbox id='remember' />
          <Text asChild size='sm'>
            <label htmlFor='remember'>Lembrar de mim por 30 dias</label>
          </Text>
        </div>
        <Button className='mt-5' data-testid="loginButton">Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href='#' className='text-gray-400 underline hover:text-gray-200'>
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size='sm'>
          <a href='#' className='text-gray-400 underline hover:text-gray-200'>
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
