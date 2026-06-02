import React from 'react';
import { ChatPayLogoPremium } from '../Logo/ChatPayLogos';

const CoinPackageCard = ({ title, coins, price, bonus, popular }) => {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 cursor-pointer ${
        popular
          ? 'ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 relative'
          : 'bg-white hover:shadow-xl'
      }`}
    >
      {popular && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
          ⭐ POPULAR
        </div>
      )}

      <div className="p-6">
        {/* Package Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Coin Amount */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-12 h-12">
            <ChatPayLogoPremium />
          </div>
          <div>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {coins}
            </p>
            <p className="text-xs text-gray-600">Koin</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-3xl font-bold text-gray-800">
            Rp {price.toLocaleString('id-ID')}
          </p>
          <p className="text-sm text-gray-600">
            {(price / coins).toFixed(0)} per koin
          </p>
        </div>

        {/* Bonus */}
        {bonus > 0 && (
          <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
            <p className="text-sm font-semibold text-green-800">
              🎁 + {bonus} Bonus Koin
            </p>
          </div>
        )}

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          <p className="text-sm text-gray-700">✓ Instant delivery</p>
          <p className="text-sm text-gray-700">✓ No expiration</p>
          <p className="text-sm text-gray-700">✓ Money back guarantee</p>
        </div>

        {/* Button */}
        <button
          className={`w-full py-3 rounded-lg font-bold transition ${
            popular
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {popular ? '🛒 Beli Sekarang' : 'Pilih Paket'}
        </button>
      </div>
    </div>
  );
};

const CoinPackages = () => {
  const packages = [
    {
      title: 'Starter',
      coins: 100,
      price: 50000,
      bonus: 0,
      popular: false
    },
    {
      title: 'Standard',
      coins: 500,
      price: 200000,
      bonus: 25,
      popular: false
    },
    {
      title: 'Premium',
      coins: 1000,
      price: 350000,
      bonus: 100,
      popular: true
    },
    {
      title: 'Platinum',
      coins: 2500,
      price: 800000,
      bonus: 300,
      popular: false
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">🪙 Coin Packages</h2>
          <p className="text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => (
            <CoinPackageCard
              key={pkg.title}
              title={pkg.title}
              coins={pkg.coins}
              price={pkg.price}
              bonus={pkg.bonus}
              popular={pkg.popular}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6">💡 Bagaimana cara kerja koin?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-lg font-bold mb-2">Chat Messaging</h4>
              <p className="text-gray-600">Setiap pesan yang Anda kirim = 1 koin</p>
            </div>
            <div>
              <div className="text-4xl mb-4">☎️</div>
              <h4 className="text-lg font-bold mb-2">Audio Call</h4>
              <p className="text-gray-600">Audio call = 1 koin per menit</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="text-lg font-bold mb-2">Video Call</h4>
              <p className="text-gray-600">Video call = 2 koin per menit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPackages;
