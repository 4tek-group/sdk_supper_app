import { willRequestToSupperApp } from "../SuperCore"
import { ActionID, BaseRequest, DevicesResponse, DevicesRequest } from "../Type"

export function getCamera(
    params: BaseRequest,
    completion: (permissionResponse: DevicesResponse) => {},
) {
    willRequestToSupperApp(ActionID.requestCamera, {data: params, permission: 'camera'} as DevicesRequest, completion)
}

export function getPhoto(
    params: BaseRequest,
    completion: (permissionResponse: DevicesResponse) => {},
) {
    willRequestToSupperApp(ActionID.requestPhoto, {data: params, permission: 'photo'} as DevicesRequest, completion)
}