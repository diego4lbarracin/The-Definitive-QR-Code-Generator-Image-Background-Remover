import type { QRCodeConfig } from "../types";

export const QR_CODE_CONFIG: QRCodeConfig = {
  width: 400,
  margin: 2,
  color: {
    dark: "#1e293b",
    light: "#ffffff",
  },
};

export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const ANIMATION_DURATION = {
  SHORT: 300,
  MEDIUM: 500,
  LONG: 800,
} as const;

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/diego4lbarracin",
  LINKEDIN: "https://linkedin.com/in/diego4lbarracin",
} as const;
