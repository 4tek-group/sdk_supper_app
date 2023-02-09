export interface BaseResponse {
  id: string;
  data: any;
  isError: boolean;
  error: BaseError;
}

export interface BaseError {
  id: string;
  error: string;
  code: number;
}

export interface BaseRequest {
  id: string;
  data: any;
}
