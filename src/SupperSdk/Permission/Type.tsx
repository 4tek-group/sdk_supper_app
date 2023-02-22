import { PermissionType } from '../Type';
import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface PermissionRequest extends BaseRequest {
    data: PermissionType
}

export interface PermissionResponse extends BaseResponse { }