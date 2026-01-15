import { ACCEPTED_IMAGE_TYPES } from "../constants/app.constants";

export const isValidUrl = (url: string): boolean => {
  return url.trim().length > 0;
};

export const isValidImageFile = (file: File): boolean => {
  return ACCEPTED_IMAGE_TYPES.some((type) => file.type === type);
};

export const createDownloadLink = (href: string, filename: string): void => {
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  link.click();
};
