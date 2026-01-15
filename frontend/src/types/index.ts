export interface QRCodeConfig {
  width: number;
  margin: number;
  color: {
    dark: string;
    light: string;
  };
}

export interface DonationFormData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  amount: number;
}

export type ProcessingStatus = "idle" | "loading" | "success" | "error";
