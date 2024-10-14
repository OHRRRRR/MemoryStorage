import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MainTemplate from '../components/MainTemplate';

const SaveMemoryAge = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonPress = (ageCategory: string) => {
    setSelectedButton(ageCategory);
  };

  return (
    <View style={styles.container}>

      <MainTemplate
        subtitle="기억 저장소"
        description="저장하고 싶은 기억을 선택해 주세요"
      />

      <View style={styles.rowContainer}>
        <View style={styles.column}>
          {['0-10대', '20대', '30대'].map(ageCategory => (
            <TouchableOpacity
              key={ageCategory}
              style={[
                styles.button,
                selectedButton === ageCategory && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress(ageCategory)}>
              <Text style={styles.buttonText}>{ageCategory}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.column}>
          {['40대', '50대', '-현재'].map(ageCategory => (
            <TouchableOpacity
              key={ageCategory}
              style={[
                styles.button,
                selectedButton === ageCategory && styles.selectedButton,
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
    justifyContent: 'flex-start',
    backgroundColor: '#f3f2f6',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '45%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    width: 164,
    height: 51,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#5C57BC',
  },
  buttonText: {
    color: '#5C57BC',
    fontFamily: 'Pretendard-Bold',
    fontSize: 23,
  },
});

export default SaveMemoryAge;
