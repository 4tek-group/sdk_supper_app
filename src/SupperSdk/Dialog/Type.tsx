import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface DialogRequest extends BaseRequest {
    title: string,
    message: string,
}

export interface DialogResponse extends BaseResponse {}