import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import MenuTag from '../components/Home/MenuTag';

const list = [
  {title: 'AI 자서전', content: '나의 삶을 연령대별로 기록합니다'},
  {title: '감정기억', content: '나의 감정을 중심으로 기록합니다'},
  {title: '사랑기억', content: '나의 사랑에 대한 이야기를 기록합니다'},
  {title: '가족기억', content: '나의 삶을 연령대별로 기록합니다'},
  {title: '우정기억', content: '나의 삶 속 뜨거운 우정을 기록합니다'},
  {title: '성취감기억', content: '지금까지 느꼈던 성취감을 기록합니다'},
];

export default function HomeScreen() {
  return (
    <Container>
      {list.map((item, idx) => {
        return <MenuTag key={idx} title={item.title} content={item.content} />;
      })}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const CustomText = styled.Text`
  font-family: 'Cafe24Ssurround'; /* 폰트 적용 */
  color: #5c57bc;
  font-size: 35;
`;
const CustomText2 = styled.Text`
  font-family: 'Pretendard-Regular'; /* 폰트 적용 */
  font-size: 20;
`;
