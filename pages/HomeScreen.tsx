import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import MenuTag from '../components/Home/MenuTag';
import HomeTitle from '../components/Home/HomeTitle';

const list = [
  {
    title: 'AI\n자서전',
    content: '나의 삶을 연령대별로 기록합니다',
    src: 'AI자서전Menu',
  },
  {
    title: '감정\n기억',
    content: '나의 감정을 중심으로 기록합니다',
    src: '감정기억Menu',
  },
  {
    title: '사랑\n기억',
    content: '나의 사랑에 대한 이야기를 기록합니다',
    src: '사랑기억Menu',
  },
  {
    title: '가족\n기억',
    content: '나의 삶을 연령대별로 기록합니다',
    src: '가족기억Menu',
  },
  {
    title: '우정\n기억',
    content: '나의 삶 속 뜨거운 우정을 기록합니다',
    src: '우정기억Menu',
  },
  {
    title: '성취감\n기억',
    content: '지금까지 느꼈던 성취감을 기록합니다',
    src: '성취감기억Menu',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeTitle />
      {list.map((item, idx) => (
        <TouchableOpacity style={styles.menuItemWrapper} key={idx}>
          <MenuTag title={item.title} content={item.content} src={item.src} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 3,
  },
  menuItemWrapper: {
    margin: 10,
  },
});
