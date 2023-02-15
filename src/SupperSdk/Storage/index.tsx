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

export function requestDeleteStorageKey(
  params: StorageRequest,
  completion: (onResponse: StorageResponse) => {},
) {
willRequestToSupperApp(ActionID.deleteStorageKey, params, completion)
}


export function requestDeleteAppStorage(
  params: StorageRequest,
  completion: (onResponse: StorageResponse) => {},
) {
willRequestToSupperApp(ActionID.deleteAppStorage, params, completion)
}

