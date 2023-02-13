import { willRequestToSupperApp } from '../SuperCore'
import { ActionID } from '../Type'
import { StorageRequest, StorageResponse } from './Type'

export function requestSetDataStorage(
    params: StorageRequest,
    completion: (onResponse: StorageResponse) => {},
) {
  willRequestToSupperApp(ActionID.setDataStorage, params, completion)
}

export function requestGetDataStorage(
  params: StorageRequest,
  completion: (onResponse: StorageResponse) => {},
) {
willRequestToSupperApp(ActionID.getDataStorage, params, completion)
}


export function requestDeleteDataStorage(
  params: StorageRequest,
  completion: (onResponse: StorageResponse) => {},
) {
willRequestToSupperApp(ActionID.deleteDataStorage, params, completion)
}

