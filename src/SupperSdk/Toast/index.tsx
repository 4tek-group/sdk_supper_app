import { willRequestToSupperApp } from '../SuperCore'
import { ActionID } from '../Type'
import { ToastRequest, ToastResponse } from './Type'

export function requestShowToast(
    params: ToastRequest,
    completion: (onResponse: ToastResponse) => {},
) {
  willRequestToSupperApp(ActionID.showToast, params, completion)
}
