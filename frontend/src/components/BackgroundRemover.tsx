import { useState, useRef } from 'react';
import { removeBackground } from '@imgly/background-removal';
import { ImageIcon, Upload, Download, Loader2 } from 'lucide-react';

export default function BackgroundRemover() {
  const [originalImage, setOriginalImage] = useState<string>('');
  const [processedImage, setProcessedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageDataUrl = e.target?.result as string;
      setOriginalImage(imageDataUrl);
      await processImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const processImage = async (imageDataUrl: string) => {
    setIsLoading(true);
    setProcessedImage('');

    try {
      const blob = await removeBackground(imageDataUrl);
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'image-no-background.png';
    link.click();
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <ImageIcon className="w-7 h-7 text-orange-500" />
        <h2 className="text-2xl font-bold text-slate-100">Background Remover</h2>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        {!originalImage && !isLoading && (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`flex-1 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-all ${
              isDragging
                ? 'border-orange-500 bg-orange-500/10'
                : 'border-slate-600 hover:border-slate-500 bg-slate-900/50'
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
          <div className="flex-1 flex items-center justify-center bg-slate-900/50 rounded-lg backdrop-blur-sm">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
              <p className="text-slate-300 text-lg">Image is being processed...</p>
              <p className="text-slate-400 text-sm mt-2">Download will start soon</p>
            </div>
          </div>
        )}

        {processedImage && !isLoading && (
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-900/50 rounded-lg p-6">
            <div className="relative mb-4">
              <img
                src={processedImage}
                alt="Processed"
                className="max-w-full max-h-96 rounded-lg shadow-lg"
                style={{
                  backgroundImage:
                    'repeating-conic-gradient(#64748b 0% 25%, #475569 0% 50%) 50% / 20px 20px',
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
                onClick={() => {
                  setOriginalImage('');
                  setProcessedImage('');
                }}
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
}
