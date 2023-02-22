import { UserParams, UserRequest, UserResponse } from './Type'
import { willRequestToSupperApp } from '../SuperCore'
import { ActionID } from '../Type/ActionID'

export function requestUserInfor(
  params: UserParams,
  completion: (userResponse: UserResponse) => {},
) {
  // parser to Base params
  willRequestToSupperApp(ActionID.getUserInfo, { data: params } as UserRequest, completion)
}

export function getUserInfor(
  params: UserParams,
  completion: (userResponse: UserResponse) => {},
) {
  // parser to Base params
  willRequestToSupperApp(ActionID.getUserInfo, { data: params } as UserRequest, completion)
}