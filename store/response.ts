import { CropDto, MemberDto, PurchaseDto, UrbaniDto } from "./types";

// #region auth
export interface SigninResponse {
  member: MemberDto,
}

// #region purchase
export interface GetPurchaseHistoryResponse {
  history: PurchaseDto[]
}

// #region crops
export interface GetCropListResponse {
  crops: CropDto[]
}

// #region urbani
export interface GetUrbaniInfoResponse {
  urbani: UrbaniDto
}
export interface GetUrbaniListResponse {
  result: UrbaniDto[]
}