import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export const ToastType = {
    info: 'info',
    success: 'success',
    error: 'error',
}

export interface ToastRequest extends BaseRequest {
    type?: string,
    message: string,
}

export interface ToastResponse extends BaseResponse { }