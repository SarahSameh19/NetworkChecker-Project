export interface Error {
  id: number;
  message: string;
}

export interface Data {
  flag: boolean;
}

export interface ApiResponse {
  data: Data;
  message: string;
  errorList: Error[];
}