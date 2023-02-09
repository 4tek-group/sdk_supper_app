import { DevicePermissionType } from 'react-native-super-app-sdk';
import { Platform } from 'react-native';
import { check, PERMISSIONS, request } from 'react-native-permissions';

const requestPermission = (
  type: string,
  callback: (result: string) => {}) => {
  let permissionType;
  switch (type) {
    case DevicePermissionType.camera:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.CAMERA;
      } else {
        permissionType = PERMISSIONS.IOS.CAMERA;
      }
      break;
    case DevicePermissionType.location:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
      } else {
        permissionType = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }
      break;
    case DevicePermissionType.contacts:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.READ_CONTACTS;
      } else {
        permissionType = PERMISSIONS.IOS.CONTACTS;
      }
      break;
    case DevicePermissionType.photo:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
      } else {
        permissionType = PERMISSIONS.IOS.MEDIA_LIBRARY;
      }
      break;
  }
  // @ts-ignore
  request(permissionType).then((result) => {
    callback(result);
  });
};
const checkPermission = (
  type: string,
  callback: (result: string) => {}) => {
  let permissionType;
  switch (type) {
    case DevicePermissionType.camera:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.CAMERA;
      } else {
        permissionType = PERMISSIONS.IOS.CAMERA;
      }
      break;
    case DevicePermissionType.location:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
      } else {
        permissionType = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }
      break;
    case DevicePermissionType.contacts:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.READ_CONTACTS;
      } else {
        permissionType = PERMISSIONS.IOS.CONTACTS;
      }
      break;
    case DevicePermissionType.photo:
      if (Platform.OS === 'android') {
        permissionType = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
      } else {
        permissionType = PERMISSIONS.IOS.MEDIA_LIBRARY;
      }
      break;
  }
  // @ts-ignore
  check(permissionType)
    .then((result) => {
      callback(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { requestPermission, checkPermission };
