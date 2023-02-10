import { requestUserInfo } from './User/User'
import {
  requestPhotoPermission,
  requestCameraPermission,
} from './Permission/Permission'
import { init } from './SuperCore'
import {
  goHome,
  goBack,
  openUrl,
  openWeb,
  dismissAll,
  dismiss,
} from './Navigation';
import { hideLoading, showLoading } from './Screen';

export default {
  requestUserInfo,
  init,
  requestPhotoPermission,
  requestCameraPermission,
  goHome,
  goBack,
  openUrl,
  openWeb,
  dismissAll,
  dismiss,
  hideLoading,
  showLoading,
};
