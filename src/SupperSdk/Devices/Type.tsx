import { PermissionType } from '../Type'
import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface DevicesRequest extends BaseRequest {
    permission: PermissionType
}

export interface DevicesResponse extends BaseResponse { }
