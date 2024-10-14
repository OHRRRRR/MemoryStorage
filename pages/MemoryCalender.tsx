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

const MemoryCalender = () => {
  console.log('MemoryCalender 렌더링 중');

  const [selectedImages, setSelectedImages] = useState<SelectedImages>({});

  const simpleDayPress = (day: DateData) => {
    console.log('테스트 - 날짜 선택됨:', day); // 클릭된 날짜 확인
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
          onMonthChange={(month: DateObject) =>
            console.log('월 변경됨:', month)
          }
          enableSwipeMonths={true}
          onDayPress={simpleDayPress} // 날짜 클릭 이벤트 설정
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
            <TouchableOpacity onPress={() => simpleDayPress(date)}>
              {/* 클릭 이벤트 추가 */}
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
