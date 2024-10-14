import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

export default function MenuTag({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  console.log('여깃츄');
  return (
    <Container>
      <TitleView>
        <TitleText>{title}assasas</TitleText>
      </TitleView>
      <ContentView>
        <ContentText>{content}</ContentText>
      </ContentView>
    </Container>
  );
}

const Container = styled.View`
  font-family: 'pretendard-regular';
  width: 164;
  height: 164;
  border-radius: 18px;
  background-color: #ffffff;
  /* justify-content: center; */
  /* align-items: center; */
`;

const TitleView = styled.View``;

const TitleText = styled.Text`
  font-family: 'Pretendard-ExtraBold';
  /* flex: 2; */
  color: #5f5bbb;
  font-size: 30;
`;

const ContentView = styled.View``;

const ContentText = styled.Text`
  /* flex: 1; */
  font-family: 'Pretendard-Regular';
  color: #909090;
`;
