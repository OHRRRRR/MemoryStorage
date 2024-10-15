import {PermissionsAndroid, Platform} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const RequestPermission = async () => {
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
      return granted === PermissionsAndroid.RESULTS.GRANTED; // 권한이 허용되면 true 반환
    } catch (err) {
      console.warn('권한 요청 중 오류:', err);
      return false; // 오류 발생 시 false 반환
    }
  } else if (Platform.OS === 'ios') {
    const res = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    return res === RESULTS.GRANTED; // iOS 권한 요청 결과에 따라 true 또는 false 반환
  }
  return false; // Android나 iOS가 아닌 경우 false 반환
};
