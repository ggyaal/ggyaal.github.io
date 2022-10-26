import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const ImgBl = styled.img``;

function ImgBlock({url, width}: {url: string; width: number}) {
  return (
    <Container>
      <ImgBl src={url} width={width + 'px'} />
    </Container>
  );
}

export default ImgBlock;
