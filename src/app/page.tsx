'use client';
import Image from 'next/image';
import { FormEvent, FormEventHandler } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #801580;
  padding: 1rem;
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.165rem;
  width: 80%;
`;

const Input = styled.input`
  padding: 0.5rem;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: white;
  }
  transition: 1s ease;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 1);
  }
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4b4ba1;
  border-radius: 0.25rem;
  border: 1px solid #4b4ba1;

  transition: 1s ease;
  cursor: pointer;
  &:hover {
    background-color: #242435;
  }
`;

export default function Home() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert('Parabéns você é gay');
  }

  return (
    <>
      <Container>
        Formulário do João Vitor Siqueira Motta
        <Form onSubmit={onSubmit}>
          <InputContainer>
            <label htmlFor='email'>E-mail</label>
            <Input id='email' placeholder='E-mail' type='text' />
          </InputContainer>
          <InputContainer>
            <label htmlFor='password'>Senha</label>
            <Input id='password' placeholder='Senha' type='password' />
          </InputContainer>
          <Button>Sign-in</Button>
        </Form>
      </Container>
    </>
  );
}
