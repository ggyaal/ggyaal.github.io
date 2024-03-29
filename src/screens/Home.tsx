import React from 'react';
import styled from 'styled-components';
import ImgBlock from '../components/ImgBlock';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Comment = styled.div`
  color: grey;
`;

const Divider = styled.div`
  border: 3px solid gray;
  border-radius: 20%;
  width: 80%;
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
          <ImgBlock
            url="https://cdn.topichunter.co.kr/topichunter/2022/07/29145436/2.%EB%B8%94%EB%9E%99%EC%BB%AC%EB%9F%AC%EC%9A%94%EB%A6%AC-%EB%A7%9B%EC%A7%91-%EB%9D%BC%EB%AC%B4%EB%9D%BC-01.webp"
            width={550}
          />
          <Comment>from. 꺌꺌</Comment>
        </Block>
        <Block>
          <Divider />
        </Block>
        <Block>
          <ImgBlock
            url="data:image/jpeg;base64,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"
            width={200}
          />
          <ImgBlock
            url="https://cdn.discordapp.com/attachments/956862828441128972/1034752529625522216/IMG_0218.jpg"
            width={550}
          />
          <Comment>from. 안락삶</Comment>
        </Block>
        <Block>
          <Divider />
        </Block>
        <Block>
          <ImgBlock
            url="https://cdn.discordapp.com/attachments/956862828441128972/1034746930527481876/818a851463bae6dd.JPG"
            width={550}
          />
          <Comment>from. 햇모닝</Comment>
        </Block>
        <Block>
          <Divider />
        </Block>
        <Block>
          <ImgBlock
            url="https://cdn.discordapp.com/attachments/1034815593385304166/1036901670279458859/unknown.png"
            width={550}
          />
          <Comment>from. 긍정짱</Comment>
        </Block>
        <Block>Bye !</Block>
      </Main>
    </Container>
  );
}

export default Home;
