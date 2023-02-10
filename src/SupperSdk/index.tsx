import { requestUserInfo } from './User/User'
import {
  requestPhotoPermission,
  requestCameraPermission,
} from './Permission/Permission'
import { init, initPermission } from './SuperCore'

export default {
  requestUserInfo,
  init,
  initPermission,
  requestPhotoPermission,
  requestCameraPermission,
}
