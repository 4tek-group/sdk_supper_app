import { willRequestToSupperApp } from "../SuperCore"
import { ActionID, BaseRequest, BaseResponse } from "../Type"

export function requestDeposit(
    params: BaseRequest,
    completion: (permissionResponse: BaseResponse) => {},
  ) {
    willRequestToSupperApp(ActionID.requestDeposit, params, completion)
  }
  
  export function requestWithdraw(
    params: BaseRequest,
    completion: (permissionResponse: BaseResponse) => {},
  ) {
    willRequestToSupperApp(ActionID.requestWithDraw, params, completion)
  }