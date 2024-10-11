import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

export default function HomeScreen() {
  return (
    <Container>
      <CustomText>기억저장소</CustomText>
      <CustomText2>HomeScreen</CustomText2>
      <Text style={{fontSize: 20}}>HomeScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CustomText = styled.Text`
  font-family: 'Cafe24Ssurround'; /* 폰트 적용 */
  color: #5c57bc;
  font-size: 35px;
`;
const CustomText2 = styled.Text`
  font-family: 'Pretendard-Regular'; /* 폰트 적용 */
  font-size: 20px;
`;
