import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return <Container>ToDo List</Container>;
};

const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgb(56, 131, 173) 0%,
    rgb(78, 178, 215) 100%
  );
  font-size: 2rem;
  text-align: center;
  color: white;
  padding: 1rem;
`;
