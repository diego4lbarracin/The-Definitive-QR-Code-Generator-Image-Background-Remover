import { Heart, CreditCard, Lock } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="flex-1 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-orange-500 fill-orange-500" />
              <h2 className="text-3xl font-bold text-slate-100">Support This Project</h2>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                Thank you for considering a donation to keep this project alive and running!
              </p>

              <p className="leading-relaxed">
                This tool is completely free to use, and your generous contributions help cover
                server costs, maintenance, and future development. Every donation, no matter how
                small, makes a significant difference and is deeply appreciated.
              </p>

              <p className="leading-relaxed">
                Your support enables us to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keep the service running 24/7</li>
                <li>Add new features and improvements</li>
                <li>Maintain high-quality performance</li>
                <li>Provide free tools for everyone</li>
              </ul>

              <p className="text-lg font-semibold text-orange-400 mt-6">
                Thank you for your support!
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-7 h-7 text-orange-500" />
              <h2 className="text-2xl font-bold text-slate-100">Payment Details</h2>
            </div>

            <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4 mb-6">
              <p className="text-slate-300 text-sm flex items-start gap-2">
                <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Payment processing will be configured soon. This form is currently for demonstration purposes only.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="card-name" className="block text-sm font-medium text-slate-300 mb-2">
                  Cardholder Name
                </label>
                <input
                  id="card-name"
                  type="text"
                  placeholder="John Doe"
                  disabled
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-400 placeholder-slate-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-slate-300 mb-2">
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  disabled
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-400 placeholder-slate-500 cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-slate-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    disabled
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-400 placeholder-slate-500 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-slate-300 mb-2">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    disabled
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-400 placeholder-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-slate-300 mb-2">
                  Donation Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input
                    id="amount"
                    type="text"
                    placeholder="10.00"
                    disabled
                    className="w-full pl-8 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-400 placeholder-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled
                className="w-full bg-slate-600 text-slate-400 font-semibold py-3 rounded-lg cursor-not-allowed transition-colors duration-200"
              >
                Complete Donation (Coming Soon)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
