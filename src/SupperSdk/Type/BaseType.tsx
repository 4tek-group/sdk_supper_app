export interface BaseResponse {
  data: any
  isError: boolean
  error: BaseError
}

export interface BaseError {
  message: string
  code: number
}

export interface BaseRequest {
  data?: any
}
