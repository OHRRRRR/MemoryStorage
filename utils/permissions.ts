import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import permissionModalStore from '../stores/permissionModalStore';
import {goToSettings} from '../utils/navigation'; // 설정으로 이동하는 함수

const permissionsPerOS =
  Platform.OS === 'ios'
    ? {
        photo: PERMISSIONS.IOS.PHOTO_LIBRARY,
        camera: PERMISSIONS.IOS.CAMERA,
      }
    : {
        photo: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        camera: PERMISSIONS.ANDROID.CAMERA,
      };

export const getPermission = async (
  permission: 'photo' | 'camera',
  onSuccess?: () => void,
  onFailed?: () => void,
  essential = false,
): Promise<boolean> => {
  const needPermission = permissionsPerOS[permission];
  permissionModalStore.setMessage(`권한 요청: ${permission}`);
  permissionModalStore.setOpen(true);

  const handlePermissionSuccess = () => {
    if (onSuccess) onSuccess();
    permissionModalStore.setOpen(false);
    permissionModalStore.setMessage('');
    return true;
  };

  const handlePermissionError = (message: string, openSetting = false) => {
    if (openSetting) goToSettings(message);
    if (onFailed) onFailed();
    permissionModalStore.setOpen(false);
    permissionModalStore.setMessage('');
    return false;
  };

  const checked = await check(needPermission);
  switch (checked) {
    case RESULTS.UNAVAILABLE:
      return handlePermissionError('이 기능을 사용할 수 없습니다.', essential);
    case RESULTS.GRANTED:
      return handlePermissionSuccess();
    case RESULTS.DENIED:
      const requested = await request(needPermission);
      if (requested === RESULTS.GRANTED) {
        return handlePermissionSuccess();
      }
    case RESULTS.LIMITED:
    case RESULTS.BLOCKED:
    default:
      return handlePermissionError('권한이 차단되었습니다.', essential);
  }
};

export const getPermissions = async (
  permissions: ('photo' | 'camera')[],
  onSuccess?: () => void,
  onFailed?: () => void,
  essential = false,
): Promise<void> => {
  const permissionsResult = await Promise.all(
    permissions.map(permission =>
      getPermission(permission, onSuccess, onFailed, essential),
    ),
  );

  if (permissionsResult.every(Boolean) && onSuccess) onSuccess();
  if (!permissionsResult.every(Boolean) && onFailed) {
    if (essential) goToSettings('필수 권한이 차단되었습니다.');
    onFailed();
  }
};
