export interface SigninRequest {
  email: string;
  password: string;
}

export interface GetUrbaniListRequest {
  latitude: number;
  longitude: number;
}

export interface PostPurchaseRequest {
  acId: number,
  amount: number,
  memberId: number, 
}