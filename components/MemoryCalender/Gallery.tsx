import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

const Gallery = () => {
  // 안드로이드 권한을 확인하는 함수
  const hasAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      const hasPermission = await PermissionsAndroid.check(permission);
      if (hasPermission) {
        return true;
      }

      const status = await PermissionsAndroid.request(permission);
      return status === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn('권한 요청 중 오류:', err);
      return false;
    }
  };

  // 권한을 확인하고 사진을 가져오는 함수
  const getPhotoWithPermission = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    // 사진 접근 로직을 추가하세요 (예: Image Picker)
    console.log('사진을 가져옵니다.');
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 권한 요청 및 사진 가져오기
    getPhotoWithPermission();
  }, []);

  return null;
};

export default Gallery;
