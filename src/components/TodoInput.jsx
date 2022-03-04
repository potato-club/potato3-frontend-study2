import React, { useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';
import Modal from 'react-modal';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListState } from './../recoil/todoList';

export const TodoInput = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const setTodoList = useSetRecoilState(todoListState);

  const nextId = useRef(0);

  return (
    <>
      <Modal
        style={{ content: { padding: '1.5rem 2rem 1.5rem 2rem' } }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentElement={(props, children) => (
          <ModalContent {...props}>{children}</ModalContent>
        )}
      >
        내용을 입력해주세요!
        <ConfirmButton onClick={() => setModalIsOpen(false)}>
          확인
        </ConfirmButton>
      </Modal>
      <Form
        onSubmit={(event) => {
          event.preventDefault();

          if (value === '') {
            setModalIsOpen(true);
            return;
          }

          setTodoList((todoList) =>
            todoList.concat({ id: nextId.current++, text: value })
          );

          setValue('');
        }}
      >
        <Input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <SendButton type="submit">
          <MdSend size="1.5rem" color="white" />
        </SendButton>
      </Form>
    </>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: fit-content;
  margin: auto;
`;

const ConfirmButton = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-top: 1rem;
  margin-left: auto;
  border-radius: 2rem;
  border-width: 0px;
  background-color: rgb(64, 115, 226);
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const SendButton = styled.button`
  background: linear-gradient(
    90deg,
    rgb(56, 131, 173) 0%,
    rgb(78, 178, 215) 100%
  );
  border: none;
  padding: 0.5rem;
`;
