// import React, {useState, useEffect} from 'react';
// import {View, Text, Button, Alert} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
// import {useNavigation, RouteProp} from '@react-navigation/native';

// // 타입 정의
// type CameraScreenRouteProp = RouteProp<{ CameraScreen: { onCapture: (path: string) => void } }, 'CameraScreen'>;

// export default function CameraScreen({route}: {route: CameraScreenRouteProp}) {
//   const [hasPermission, setHasPermission] = useState(false);
//   const devices = useCameraDevices();
//   const backCamera = devices.back; // devices 객체에서 back 카메라를 가져옴
//   const navigation = useNavigation();

//   useEffect(() => {
//     const requestCameraPermission = async () => {
//       const permission = await Camera.requestCameraPermission();
//       setHasPermission(permission === 'granted'); // "granted"와 비교
//     };
//     requestCameraPermission();
//   }, []);

//   const takePhoto = async () => {
//     if (backCamera) {
//       const photo = await backCamera.takeSnapshot({
//         quality: 0.8, // 사진 품질 설정
//         skipMetadata: true, // 메타데이터 생략
//       });
//       // 찍은 사진 경로를 스크린으로 전달
//       route.params.onCapture(photo.path);
//       navigation.goBack();
//     }
//   };

//   if (!hasPermission) {
//     return <Text>카메라 권한이 필요합니다.</Text>;
//   }

//   if (!backCamera) {
//     return <Text>카메라를 사용할 수 없습니다.</Text>;
//   }

//   return (
//     <View style={{flex: 1}}>
//       <Camera style={{flex: 1}} device={backCamera} isActive={true} />
//       <Button title="사진 찍기" onPress={takePhoto} />
//     </View>
//   );
// }
