import { useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Loader2 } from 'lucide-react';

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = async () => {
    if (!url.trim()) {
      alert('Please enter a valid URL');
      return;
    }

    setIsLoading(true);

    try {
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 400,
        margin: 2,
        color: {
          dark: '#1e293b',
          light: '#ffffff',
        },
      });

      setQrCodeUrl(qrDataUrl);

      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code');
      setIsLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <QrCode className="w-7 h-7 text-orange-500" />
        <h2 className="text-2xl font-bold text-slate-100">QR Code Generator</h2>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        <div>
          <label htmlFor="url-input" className="block text-sm font-medium text-slate-300 mb-2">
            Enter URL
          </label>
          <input
            id="url-input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && generateQRCode()}
            placeholder="https://example.com"
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          onClick={generateQRCode}
          disabled={isLoading}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-orange-500/50"
        >
          {isLoading ? 'Generating...' : 'Generate QR Code'}
        </button>

        {isLoading && (
          <div className="flex-1 flex items-center justify-center bg-slate-900/50 rounded-lg backdrop-blur-sm">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
              <p className="text-slate-300 text-lg">QR Code is being generated...</p>
              <p className="text-slate-400 text-sm mt-2">Download will start soon</p>
            </div>
          </div>
        )}

        {qrCodeUrl && !isLoading && (
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-900/50 rounded-lg p-6">
            <img
              src={qrCodeUrl}
              alt="Generated QR Code"
              className="w-64 h-64 bg-white p-4 rounded-lg shadow-lg mb-4"
            />
            <button
              onClick={downloadQRCode}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
