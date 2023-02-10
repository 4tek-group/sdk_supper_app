import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface ToastRequest extends BaseRequest {
    type?: string,
    title: string,
    message: string,
}

export interface ToastResponse extends BaseResponse {}