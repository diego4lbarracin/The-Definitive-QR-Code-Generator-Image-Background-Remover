import QRCodeGenerator from '../components/QRCodeGenerator';
import BackgroundRemover from '../components/BackgroundRemover';

export default function HomePage() {
  return (
    <div className="flex-1 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QRCodeGenerator />
          <BackgroundRemover />
        </div>
      </div>
    </div>
  );
}
