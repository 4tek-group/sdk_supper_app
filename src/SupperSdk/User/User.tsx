import type { UserRequest, UserResponse } from './Type';
import { willRequestToSupperApp } from '../SuperCore';
import { EventType } from '../Type';

export function requestUserInfo(
  params: UserRequest,
  completion: (userResponse: UserResponse) => {}
) {
  willRequestToSupperApp(EventType.user, params, completion);
}
