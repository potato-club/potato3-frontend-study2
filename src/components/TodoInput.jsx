import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgb(56, 131, 173) 0%,
    rgb(78, 178, 215) 100%
  );
  border: none;
  padding: 0.5rem;
`;

export const TodoInput = (props) => {
  const [value, setValue] = useState('');

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();

        if (value === '') {
          return;
        }

        props.onSubmit(value);

        setValue('');
      }}
    >
      <Input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button type="submit">
        <MdSend size="1.5rem" color="white" />
      </Button>
    </Form>
  );
};
