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
    justifyContent: 'flex-start',
    backgroundColor: '#f3f2f6',
  },
  textContainer: {
    paddingTop: 96,
    paddingLeft: 29,
    marginBottom: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_title: {
    fontSize: 35,
    marginBottom: 30,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '800',
    color: '#5C57BC',
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginTop: -30,
    marginRight: 10,
  },
  text_subtitle: {
    fontSize: 30,
    fontFamily: 'Pretendard-ExtraBold',
    marginBottom: 10,
  },
  text_description: {
    fontSize: 19,
    color: '#747474',
    fontFamily: 'Pretendard-Medium',
    marginBottom: 50,
  },
});

export default MainTemplate;
