import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MainTemplate from '../components/MainTemplate';
import {Calendar, DateData} from 'react-native-calendars';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {getPermission} from '../utils/permissions';

const MemoryCalender = () => {
  const [selectedImages, setSelectedImages] = useState<{[key: string]: string}>(
    {},
  );

  const handleDayPress = async (day: DateData) => {
    // 사용자에게 갤러리 또는 카메라 권한 요청
    Alert.alert(
      '사진 선택',
      '갤러리에서 사진을 선택하시겠습니까, 아니면 카메라로 찍으시겠습니까?',
      [
        {
          text: '사진 선택',
          onPress: async () => {
            const hasPermission = await getPermission('photo');
            if (hasPermission) {
              launchImageLibrary(
                {mediaType: 'photo'},
                handleImageResponse(day),
              );
            }
          },
        },
        {
          text: '카메라 접근',
          onPress: async () => {
            const hasPermission = await getPermission('camera');
            if (hasPermission) {
              launchCamera({mediaType: 'photo'}, handleImageResponse(day));
            }
          },
        },
        {text: '취소', style: 'cancel'},
      ],
    );
  };

  const handleImageResponse = (day: DateData) => (response: any) => {
    if (response.didCancel) {
      Alert.alert('사용자가 취소했습니다.');
    } else if (response.errorCode) {
      Alert.alert('이미지 선택 중 오류가 발생했습니다', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const selectedUri = response.assets[0].uri;
      if (selectedUri) {
        setSelectedImages(prevImages => ({
          ...prevImages,
          [day.dateString]: selectedUri,
        }));
      }
    }
  };

  return (
    <View style={styles.container}>
      <MainTemplate
        subtitle="기억달력"
        description="오늘의 기억을 달력에 저장해 보세요"
      />

      <View style={styles.calendarContainer}>
        <Calendar
          current={new Date().toISOString().split('T')[0]}
          monthFormat={'yyyy년 MM월'}
          enableSwipeMonths={true}
          onDayPress={handleDayPress}
          theme={{
            todayTextColor: '#5C57BC',
            arrowColor: '#5C57BC',
            selectedDayBackgroundColor: '#5C57BC',
            selectedDayTextColor: '#ffffff',
            dotColor: '#5C57BC',
            monthTextColor: '#5C57BC',
            textDayFontFamily: 'Pretendard-Medium',
            textMonthFontFamily: 'Pretendard-ExtraBold',
            textDayHeaderFontFamily: 'Pretendard-Regular',
            textDayFontSize: 20,
            textDayHeaderFontSize: 16,
            textMonthFontSize: 24,
            dayTextColor: '#2d4150',
          }}
          style={styles.calendar}
          dayComponent={({date}: {date: DateData}) => (
            <TouchableOpacity onPress={() => handleDayPress(date)}>
              <View>
                {selectedImages[date.dateString] ? (
                  <Image
                    source={{uri: selectedImages[date.dateString]}}
                    style={styles.selectedImage}
                  />
                ) : (
                  <Text style={styles.dayText}>{date.day}</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
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
  calendarContainer: {
    marginTop: -30,
    paddingHorizontal: 0,
  },
  calendar: {
    width: '100%',
    height: '75%',
  },
  selectedImage: {
    width: 32,
    height: 32,
    borderRadius: 5,
  },
  dayText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#2d4150',
  },
});

export default MemoryCalender;
