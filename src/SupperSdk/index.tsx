import { requestUserInfor, getUserInfor } from './User/User'
import {
  getCamera,
  getPhoto,
} from './Devices/Devices'
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
import { requestPermission, checkPermission } from './Permission/Permission'

export default {
  init,
  destroy,
  requestUserInfor,
  getUserInfor,
  getCamera,
  getPhoto,
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
  requestWithdraw,
  requestPermission,
  checkPermission
}
