import {Linking, Alert} from 'react-native';

// 설정 화면으로 이동하는 함수
export const goToSettings = (message: string) => {
  // 설정 화면으로 이동하도록 유도하는 알림을 띄운다
  Alert.alert(
    '권한 필요',
    message,
    [
      {text: '취소', style: 'cancel'},
      {text: '설정으로 이동', onPress: () => Linking.openSettings()},
    ],
    {cancelable: true},
  );
};
