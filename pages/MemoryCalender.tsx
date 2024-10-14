// components/MemoryCalender.tsx
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import MainTemplate from '../components/MainTemplate';
import {Calendar, DateData} from 'react-native-calendars';
import {launchImageLibrary} from 'react-native-image-picker';
import {RequestPermission} from '../components/requestPermission';

// DateObject 타입 직접 정의
interface DateObject {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

interface SelectedImages {
  [key: string]: string; // 각 날짜(dateString)를 키로 하고, 이미지 URI를 값으로 가짐
}
const simpleDayPress = (day: DateData) => {
  console.log('테스트 - 날짜 선택됨:', day);
};

const MemoryCalender = () => {
  console.log('MemoryCalender 렌더링 중'); // 이 로그가 출력되는지 확인

  // 각 날짜에 선택된 이미지를 저장할 상태
  const [selectedImages, setSelectedImages] = useState<SelectedImages>({});

  const handleDayPress = async (day: DateData) => {
    console.log('날짜 선택됨:', day); // 선택된 날짜가 로그에 표시되는지 확인
    try {
      const hasPermission = await RequestPermission();
      console.log('권한 상태:', hasPermission); // 권한 상태가 로그에 표시되는지 확인

      if (!hasPermission) {
        Alert.alert('갤러리 접근 권한이 필요합니다.');
        return;
      }

      console.log('갤러리 열기 시작');

      launchImageLibrary({mediaType: 'photo'}, response => {
        console.log('갤러리 응답:', response); // 갤러리에서 이미지를 선택했을 때 응답이 로그에 표시되는지 확인

        if (response.didCancel) {
          Alert.alert('취소되었습니다');
        } else if (response.errorCode) {
          Alert.alert('갤러리 접근에 실패했습니다', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedUri = response.assets[0].uri;
          console.log('선택된 이미지 URI:', selectedUri); // 선택된 이미지 URI가 로그에 표시되는지 확인

          if (selectedUri) {
            setSelectedImages(prevImages => ({
              ...prevImages,
              [day.dateString]: selectedUri,
            }));
            console.log('이미지 저장됨:', selectedImages); // 이미지가 상태에 저장되었는지 로그로 확인
          }
        }
      });
    } catch (error) {
      console.error('handleDayPress 오류:', error); // 만약 오류가 있다면, 로그로 확인
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
          // 기본적으로 현재 날짜를 표시합니다.
          current={new Date().toISOString().split('T')[0]}
          // 달력에서 요일을 표시하는 포맷을 한국어로 변경합니다.
          monthFormat={'yyyy년 MM월'}
          onMonthChange={(month: DateObject) =>
            console.log('월 변경됨:', month)
          } // 직접 정의한 DateObject 타입 사용
          // 오늘 날짜 버튼 추가
          enableSwipeMonths={true}
          //   onDayPress={handleDayPress} // 여기가 올바르게 연결되어 있는지 확인
          onDayPress={simpleDayPress} // 간단한 핸들러로 테스트
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
            textDayFontSize: 20, // 날짜 텍스트
            textDayHeaderFontSize: 16, // 요일 헤더 텍스트
            textMonthFontSize: 24, // 월 텍스트
            dayTextColor: '#2d4150', // 날짜 텍스트
          }}
          style={styles.calendar} // 추가된 스타일
          // 선택된 날짜에 이미지를 표시
          dayComponent={({date}: {date: DateData}) => (
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
    width: '100%', // 가로 크기를 화면에 맞추기
    height: '75%', // 원하는 세로 크기 설정
  },
  selectedImage: {
    width: 32, // 날짜 칸에 맞는 이미지 크기
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
