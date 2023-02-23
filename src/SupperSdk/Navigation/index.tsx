import { willRequestToSupperApp } from '../SuperCore';
import { BaseRequest, BaseResponse, ActionID } from "../Type";

function goHome(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.goHome, params, completion);
}

function goBack(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.goBack, params, completion);
}

function openUrl(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.openUrl, params, completion);
}

function openWeb(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.openWeb, params, completion);
}

function dismissAll(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.dismissAll, params, completion);
}

function dismiss(params: BaseRequest, completion: (baseResponse: BaseResponse) => {}) {
  willRequestToSupperApp(ActionID.dismiss, params, completion);
}

export { goHome, goBack, openUrl, openWeb, dismissAll, dismiss };
