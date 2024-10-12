import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const SaveMemoryAge = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonPress = (ageCategory: string) => {
    setSelectedButton(ageCategory); // 선택된 버튼 업데이트
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text_title}>기억저장소</Text>
          <Image
            source={require('/Users/HYERYEONG/Desktop/mini_project/MemoryStorage/assets/images/letter.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text_subtitle}>기억 저장하기</Text>
        <Text style={styles.text_description}>
          기억하고 싶은 카테고리를 선택해 주세요
        </Text>
      </View>
      <View style={styles.rowContainer}>
        {/* 첫 번째 열 */}
        <View style={styles.column}>
          {['0-10대', '20대', '30대'].map(ageCategory => (
            <TouchableOpacity
              key={ageCategory}
              style={[
                styles.button,
                selectedButton === ageCategory && styles.selectedButton, // 선택된 버튼 스타일 적용
              ]}
              onPress={() => handleButtonPress(ageCategory)}>
              <Text style={styles.buttonText}>{ageCategory}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 두 번째 열 */}
        <View style={styles.column}>
          {['40대', '50대', '-현재'].map(ageCategory => (
            <TouchableOpacity
              key={ageCategory}
              style={[
                styles.button,
                selectedButton === ageCategory && styles.selectedButton, // 선택된 버튼 스타일 적용
              ]}
              onPress={() => handleButtonPress(ageCategory)}>
              <Text style={styles.buttonText}>{ageCategory}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // 위쪽에 정렬
    backgroundColor: '#efeff6', // 배경색 설정
  },
  textContainer: {
    paddingTop: 96, // 전체 화면에서 위쪽 여백 설정
    paddingLeft: 29,
    marginBottom: 50, // 제목과 설명 사이 간격
  },
  titleContainer: {
    flexDirection: 'row', // 텍스트와 이미지를 나란히 배치
    alignItems: 'center', // 텍스트와 이미지 수직 중앙 정렬
  },
  text_title: {
    fontSize: 35,
    marginBottom: 30, // 제목과 나머지 요소 사이 간격
    fontFamily: 'Pretendard-Bold', // 변경된 폰트 적용
    fontWeight: '800',
    color: '#5C57BC', // 텍스트 색상
    marginRight: 10, // 이미지와 텍스트 사이 간격
  },
  image: {
    width: 40, // 이미지 가로 크기
    height: 40, // 이미지 세로 크기
    marginTop: -30,
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
    marginBottom: 50, // 설명과 버튼 사이 간격
  },
  rowContainer: {
    flexDirection: 'row', // 행으로 정렬
    justifyContent: 'space-between', // 열 사이에 공간을 균등하게 배분
    paddingHorizontal: 30,
  },
  column: {
    flexDirection: 'column', // 세로 정렬
    justifyContent: 'space-between', // 버튼 사이에 공간을 균등하게 배분
    width: '45%', // 각 열의 너비 설정
    alignItems: 'center', // 열을 중앙에 배치
  },
  button: {
    backgroundColor: '#fff',
    width: 164, // 버튼 가로 크기 고정
    height: 51, // 버튼 세로 크기 고정
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff', // 기본 테두리 색상
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center', // 텍스트를 버튼 가운데로 배치
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#5C57BC', // 선택된 버튼 테두리 색상
  },
  buttonText: {
    color: '#5C57BC',
    fontFamily: 'Pretendard-Bold', // 변경된 폰트 적용
    fontSize: 23,
  },
});

export default SaveMemoryAge;
