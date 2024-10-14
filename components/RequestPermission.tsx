// utils/requestPermission.ts
import {PermissionsAndroid, Platform} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const RequestPermission = async () => {
  console.log('권한 요청 시작'); // 권한 요청이 실행되는지 확인
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: '사진 접근 권한 요청',
          message: '사진을 선택하려면 갤러리 접근 권한이 필요합니다.',
          buttonNeutral: '나중에',
          buttonNegative: '취소',
          buttonPositive: '확인',
        },
      );
      console.log('Android 권한 요청 결과:', granted); // 권한 요청 결과 로그 출력
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn('권한 요청 중 오류:', err);
      return false;
    }
  } else if (Platform.OS === 'ios') {
    const res = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    console.log('iOS 권한 요청 결과:', res); // iOS 권한 요청 결과 확인
    return res === RESULTS.GRANTED;
  }
  return false;
};
