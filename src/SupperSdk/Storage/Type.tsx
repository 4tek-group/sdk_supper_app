import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface StorageRequest extends BaseRequest {
    appId: string,
    key?: string,
    value?: boolean | string | number,
}

export interface StorageResponse extends BaseResponse {}