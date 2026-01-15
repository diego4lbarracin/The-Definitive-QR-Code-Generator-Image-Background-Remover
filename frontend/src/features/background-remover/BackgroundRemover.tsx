import { useRef } from "react";
import { ImageIcon, Upload, Download, Loader2 } from "lucide-react";
import { useBackgroundRemover } from "../../hooks/useBackgroundRemover";
import { useFileUpload } from "../../hooks/useFileUpload";

export const BackgroundRemover = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    originalImage,
    processedImage,
    isLoading,
    processImage,
    downloadImage,
    reset,
  } = useBackgroundRemover();
  const { isDragging, handleDragOver, handleDragLeave, handleDrop } =
    useFileUpload();

  const onFileSelect = (file: File) => {
    processImage(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="bg-black rounded-2xl p-8 shadow-xl border border-gray-900 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <ImageIcon className="w-7 h-7 text-orange-500" />
        <h2 className="text-2xl font-bold text-slate-100">
          Background Remover
        </h2>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        {!originalImage && !isLoading && (
          <div
            onDrop={(e) => handleDrop(e, onFileSelect)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`flex-1 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-all ${
              isDragging
                ? "border-orange-500 bg-orange-500/10"
                : "border-gray-700 hover:border-gray-600 bg-gray-950/80"
            }`}
          >
            <div className="text-center p-8">
              <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-300 text-lg font-medium mb-2">
                Drop your image here or click to upload
              </p>
              <p className="text-slate-400 text-sm">
                Supports JPG, PNG, WEBP formats
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        )}

        {isLoading && (
          <div className="flex-1 flex items-center justify-center bg-gray-950/80 rounded-lg backdrop-blur-sm">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
              <p className="text-slate-300 text-lg">
                Image is being processed...
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Download will start soon
              </p>
            </div>
          </div>
        )}

        {processedImage && !isLoading && (
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-950/80 rounded-lg p-6">
            <div className="relative mb-4">
              <img
                src={processedImage}
                alt="Processed"
                className="max-w-full max-h-96 rounded-lg shadow-lg"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(#64748b 0% 25%, #475569 0% 50%) 50% / 20px 20px",
                }}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={downloadImage}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Image
              </button>
              <button
                onClick={reset}
                className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
              >
                Upload New
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
