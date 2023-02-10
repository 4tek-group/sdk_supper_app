import { willRequestToSupperApp } from '../SuperCore'
import { UserRequest } from '../User/Type'
import { ActionID, BaseResponse } from '../Type'

export function requestCameraPermission(
  params: UserRequest,
  completion: (permissionResponse: BaseResponse) => {},
) {
  willRequestToSupperApp(ActionID.requestCamera, params, completion)
}

export function requestPhotoPermission(
  params: UserRequest,
  completion: (permissionResponse: BaseResponse) => {},
) {
  willRequestToSupperApp(ActionID.requestPhoto, params, completion)
}
