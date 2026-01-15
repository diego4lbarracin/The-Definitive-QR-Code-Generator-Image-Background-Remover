import { useState, useCallback } from "react";
import { removeBackground } from "@imgly/background-removal";
import type { ProcessingStatus } from "../types";
import { isValidImageFile, createDownloadLink } from "../utils/validation";
import { readFileAsDataURL, createObjectURL } from "../utils/image.utils";

export const useBackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string>("");
  const [processedImage, setProcessedImage] = useState<string>("");
  const [status, setStatus] = useState<ProcessingStatus>("idle");

  const processImage = useCallback(async (file: File) => {
    if (!isValidImageFile(file)) {
      alert("Please upload a valid image file (JPG, PNG, or WEBP)");
      return;
    }

    setStatus("loading");
    setProcessedImage("");

    try {
      const imageDataUrl = await readFileAsDataURL(file);
      setOriginalImage(imageDataUrl);

      const blob = await removeBackground(imageDataUrl);
      const url = createObjectURL(blob);
      setProcessedImage(url);
      setStatus("success");
    } catch (error) {
      console.error("Error removing background:", error);
      alert("Failed to remove background. Please try again.");
      setStatus("error");
    }
  }, []);

  const downloadImage = useCallback(() => {
    if (!processedImage) return;
    createDownloadLink(processedImage, "image-no-background.png");
  }, [processedImage]);

  const reset = useCallback(() => {
    setOriginalImage("");
    setProcessedImage("");
    setStatus("idle");
  }, []);

  return {
    originalImage,
    processedImage,
    status,
    isLoading: status === "loading",
    processImage,
    downloadImage,
    reset,
  };
};
