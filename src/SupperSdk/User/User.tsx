import type { UserRequest, UserResponse } from './Type'
import { willRequestToSupperApp } from '../SuperCore'
import { ActionID } from '../Type/ActionID'

export function requestUserInfo(
  params: UserRequest,
  completion: (userResponse: UserResponse) => {},
) {
  willRequestToSupperApp(ActionID.getUserInfo, params, completion)
}
