import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface MainTemplateProps {
  subtitle: string; // subtitle을 props로 받아서 렌더링
  description: string; // description을 props로 받아서 렌더링
}

const MainTemplate: React.FC<MainTemplateProps> = ({subtitle, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text_title}>기억저장소</Text>
          <Image
            source={require('../assets/images/letter.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text_subtitle}>{subtitle}</Text>
        <Text style={styles.text_description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    paddingTop: 96,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10, // 제목과 설명 사이 간격
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 40,
    height: 40,
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
    color: '#747474',
    fontFamily: 'Pretendard-Medium',
    marginBottom: 50,
  },
});

export default MainTemplate;
