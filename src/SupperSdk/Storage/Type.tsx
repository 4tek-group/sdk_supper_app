import type { BaseRequest, BaseResponse } from '../Type/BaseType'

export interface StorageRequest extends BaseRequest {
    key: string,
    data: string,
}

export interface StorageResponse extends BaseResponse {}