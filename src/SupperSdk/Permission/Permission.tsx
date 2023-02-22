import { willRequestToSupperApp } from '../SuperCore'
import { ActionID, PermissionType, PermissionResponse, DevicesRequest } from '../Type'

export function requestPermission(
  type: PermissionType,
  completion: (permissionResponse: PermissionResponse) => {},
) {
  willRequestToSupperApp(ActionID.requestPermission, { data: type, permission: type } as DevicesRequest, completion)
}

export function checkPermission(
  type: PermissionType,
  completion: (permissionResponse: PermissionResponse) => {},
) {
  willRequestToSupperApp(ActionID.checkPermission, { data: type, permission: type } as DevicesRequest, completion)
}
