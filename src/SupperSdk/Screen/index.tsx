import { willRequestToSupperApp } from '../SuperCore';
import { BaseRequest, BaseResponse, ActionID } from "../Type";

function showLoading(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.showLoading, params, completion);
}

function hideLoading(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.hideLoading, params, completion);
}

export { hideLoading, showLoading };
