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
import {launchImageLibrary} from 'react-native-image-picker';
import {getPermission} from '../utils/permissions';
import {useNavigation, NavigationProp} from '@react-navigation/native';

// 네비게이션 스택에 대한 타입 정의
type RootStackParamList = {
  BottomNavigator: undefined;
  CameraScreen: {onCapture: (path: string) => void};
};

const MemoryCalender = () => {
  const [selectedImages, setSelectedImages] = useState<{[key: string]: string}>(
    {},
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDayPress = async (day: DateData) => {
    Alert.alert('사진 선택', '오늘의 기억을 사진으로 남기세요!', [
      {
        text: '갤러리에서 사진 선택',
        onPress: async () => {
          const hasPermission = await getPermission('photo');
          if (hasPermission) {
            const result = await launchImageLibrary({mediaType: 'photo'});
            handleImageResponse(day)(result); // 응답 전달
          }
        },
      },
      {
        text: '카메라',
        onPress: async () => {
          const hasPermission = await getPermission('camera');
          if (hasPermission) {
            // CameraScreen으로 이동하면서 onCapture 콜백을 전달
            navigation.navigate('CameraScreen', {
              onCapture: (path: string) => {
                setSelectedImages(prevImages => ({
                  ...prevImages,
                  [day.dateString]: path,
                }));
              },
            });
          }
        },
      },
      {text: '취소', style: 'cancel'},
    ]);
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
    } else {
      Alert.alert('이미지를 선택하지 않았습니다.');
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
              <View style={styles.dayContainer}>
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
    flex: 1,
    justifyContent: 'center',
    marginTop: -20,
  },
  calendar: {
    width: '100%',
    height: '100%',
  },
  dayContainer: {
    width: 60,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
  },
  selectedImage: {
    width: '100%',
    height: 70,
    borderRadius: 5,
  },
  dayText: {
    fontSize: 18,
    color: '#2d4150',
  },
});

export default MemoryCalender;
