import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface StorageRequest extends BaseRequest {
    key?: string,
    value?: boolean | string | number,
    encryptKey?: string,
}

export interface StorageResponse extends BaseResponse {}