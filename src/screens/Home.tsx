import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  border-bottom: 1px solid #787a91;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSep = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');

  font-family: 'Hurricane', cursive;
  font-weight: 800;
  font-size: 25px;
`;

function Home() {
  return (
    <Container>
      <HeaderSep>
        <Logo>GGYAALDOC</Logo>
      </HeaderSep>
      <HeaderSep></HeaderSep>
    </Container>
  );
}

export default Home;
