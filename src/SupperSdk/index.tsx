import { requestUserInfo } from './User/User'
import {
  requestPhotoPermission,
  requestCameraPermission,
} from './Permission/Permission'
import { init, destroy } from './SuperCore'
import {
  goHome,
  goBack,
  openUrl,
  openWeb,
  dismissAll,
  dismiss,
} from './Navigation'
import { hideLoading, showLoading } from './Screen'
import {
  requestSetDataStorage,
  requestGetDataStorage,
  requestDeleteStorageKey,
  requestDeleteAppStorage,
} from './Storage'
import { requestShowDialog } from './Dialog'
import { requestShowToast } from './Toast'
import { requestDeposit, requestWithdraw } from './Payment'

export default {
  init,
  destroy,
  requestUserInfo,
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
  requestSetDataStorage,
  requestGetDataStorage,
  requestDeleteStorageKey,
  requestDeleteAppStorage,
  requestShowDialog,
  requestShowToast,
  requestDeposit,
  requestWithdraw
}
