import { useState, useCallback } from "react";
import QRCode from "qrcode";
import type { ProcessingStatus } from "../types";
import { QR_CODE_CONFIG, ANIMATION_DURATION } from "../constants/app.constants";
import { isValidUrl, createDownloadLink } from "../utils/validation";

export const useQRCode = () => {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [status, setStatus] = useState<ProcessingStatus>("idle");

  const generateQRCode = useCallback(async () => {
    if (!isValidUrl(url)) {
      alert("Please enter a valid URL");
      return;
    }

    setStatus("loading");

    try {
      const qrDataUrl = await QRCode.toDataURL(url, QR_CODE_CONFIG);
      setQrCodeUrl(qrDataUrl);

      setTimeout(() => {
        setStatus("success");
      }, ANIMATION_DURATION.LONG);
    } catch (error) {
      console.error("Error generating QR code:", error);
      alert("Failed to generate QR code");
      setStatus("error");
    }
  }, [url]);

  const downloadQRCode = useCallback(() => {
    if (!qrCodeUrl) return;
    createDownloadLink(qrCodeUrl, "qrcode.png");
  }, [qrCodeUrl]);

  const resetQRCode = useCallback(() => {
    setUrl("");
    setQrCodeUrl("");
    setStatus("idle");
  }, []);

  return {
    url,
    setUrl,
    qrCodeUrl,
    status,
    isLoading: status === "loading",
    generateQRCode,
    downloadQRCode,
    resetQRCode,
  };
};
