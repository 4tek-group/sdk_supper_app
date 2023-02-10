import { willRequestToSupperApp } from '../SuperCore'
import { ActionID } from '../Type'
import { DialogRequest, DialogResponse } from './Type'

export function requestShowDialog(
    params: DialogRequest,
    completion: (onResponse: DialogResponse) => {},
) {
  willRequestToSupperApp(ActionID.showDialog, params, completion)
}

