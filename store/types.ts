import { LatLng } from "react-native-maps";

export interface UrbaniDto {
  name: string;
  location: string;
  dayOfWeek: string[];
  openTime: Date;
  closeTime: Date;
  latLong: LatLng;
  availableCrop: CropDto[];
}

export interface CropDto {
  id: number,
  name: string,
  price: number,
  description: string,
  amount: number,
  status: boolean,
  urbaniId: number
}
export interface PurchaseDto {
  name: string,
  amount: number,
  status: number,
  passcode: string,
  urbaniName: string,
  urbaniId: number,
  id: number,
  location: string,
}

export interface MemberDto {
  id: number;
  name: string;
  email: string;
  location?: string | null;
  role: string;
  purchaseHistory: PurchaseDto[];
}
