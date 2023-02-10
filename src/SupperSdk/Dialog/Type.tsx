import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface DialogRequest extends BaseRequest {
    message: string,
}

export interface DialogResponse extends BaseResponse {}