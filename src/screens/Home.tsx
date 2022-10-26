import React from 'react';
import styled from 'styled-components';
import Snuppy from '../components/Snuppy';
import Header from '../components/Header';

const Container = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Seperator = styled.div`
  flex-basis: 50px;
`;

const Block = styled.div`
  width: 800px;
  background-color: aliceblue;
  flex-basis: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div``;

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Seperator />
        <Block>Hello !</Block>
        <Block>
          <Snuppy />
        </Block>
      </Main>
    </Container>
  );
}

export default Home;
