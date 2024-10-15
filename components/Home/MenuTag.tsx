import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const images: any = {
  AI자서전Menu: require('../../assets/images/AIBook.png'),
  감정기억Menu: require('../../assets/images/emotionMemory.png'),
  사랑기억Menu: require('../../assets/images/loveMemory.png'),
  가족기억Menu: require('../../assets/images/familyMemory.png'),
  우정기억Menu: require('../../assets/images/friendlyMemory.png'),
  성취감기억Menu: require('../../assets/images/achievementMemory.png'),
};

export default function MenuTag({
  title,
  content,
  src,
}: {
  title: string;
  content: string;
  src: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          {title} <Image source={images[src]} style={styles.image} />
        </Text>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'pretendard-regular',
    width: 166,
    height: 150,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 19,
  },
  titleView: {
    // 스타일이 따로 없을 경우, 여기는 비워둘 수 있습니다
    marginBottom: 10,
  },
  titleText: {
    fontFamily: 'Pretendard-ExtraBold',
    color: '#5f5bbb',
    fontSize: 30,
  },
  contentView: {
    // 스타일이 따로 없을 경우, 여기는 비워둘 수 있습니다
  },
  contentText: {
    fontFamily: 'Pretendard-Regular',
    color: '#909090',
  },
  image: {
    width: 28, // 이미지 크기
    height: 28, // 이미지 크기
  },
});
