import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export type UserRole = 'name' | 'address' | 'phone' | 'age'

export interface UserParams {
    permissions: Array<{
        role: UserRole,
        required?: boolean
    }>
}

export interface UserResponse extends BaseResponse { }

export interface UserRequest extends BaseRequest {
    data: UserParams
}
