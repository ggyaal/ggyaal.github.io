import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {UserLarge} from './Icons';

const Container = styled.div`
  height: 100px;
  border-bottom: 1px solid #787a91;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
`;

const HeaderSep = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');

  font-family: 'Hurricane', cursive;
  font-weight: 800;
  font-size: 25px;
`;

function Header() {
  return (
    <Container>
      <HeaderSep>
        <Logo to="/">GGYAAL</Logo>
      </HeaderSep>
      <HeaderSep>
        <UserLarge size="2x" />
      </HeaderSep>
    </Container>
  );
}

export default Header;
