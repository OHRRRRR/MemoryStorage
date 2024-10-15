import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function HomeTitle() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text_title}>기억저장소</Text>
          <Image
            source={require('../../assets/images/letter.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text_subtitle}>기억 저장하기</Text>
        <Text style={styles.text_description}>
          기억하고 싶은 카테고리를 선택해 주세요
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    paddingTop: 96, // 전체 화면에서 위쪽 여백 설정
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10, // 제목과 설명 사이 간격
  },
  titleContainer: {
    flexDirection: 'row', // 텍스트와 이미지를 나란히 배치
    alignItems: 'center', // 텍스트와 이미지 수직 중앙 정렬
  },
  text_title: {
    fontSize: 35,
    marginBottom: 20, // 제목과 나머지 요소 사이 간격
    fontFamily: 'Cafe24Ssurround', // 변경된 폰트 적용
    fontWeight: '800',
    color: '#5C57BC', // 텍스트 색상
    marginRight: 10, // 이미지와 텍스트 사이 간격
  },
  image: {
    width: 40, // 이미지 가로 크기
    height: 40, // 이미지 세로 크기
    marginTop: -20,
    marginRight: 10,
  },
  text_subtitle: {
    fontSize: 30,
    fontFamily: 'Pretendard-ExtraBold', // 변경된 폰트 적용
    marginBottom: 10, // 제목과 설명 사이 간격
  },
  text_description: {
    fontSize: 19,
    color: '#747474', // 설명 텍스트 색상
    fontFamily: 'Pretendard-Medium', // 변경된 폰트 적용
  },
});
