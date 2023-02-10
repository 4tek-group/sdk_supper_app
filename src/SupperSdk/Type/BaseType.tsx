export interface BaseResponse {
  data: any
  isError: boolean
  error: BaseError
}

export interface BaseError {
  error: string
  code: number
}

export interface BaseRequest {
  data: any
}
