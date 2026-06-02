import React from 'react';

// SVG Logo Components untuk ChatPay

export const ChatPayLogoMain = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Background Circle */}
    <defs>
      <linearGradient id="gradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Outer Circle */}
    <circle cx="100" cy="100" r="95" fill="url(#gradientMain)" opacity="0.1" stroke="url(#gradientMain)" strokeWidth="2"/>
    
    {/* Chat Bubble */}
    <path d="M 50 60 L 150 60 Q 160 60 160 70 L 160 130 Q 160 140 150 140 L 70 140 L 50 155 L 60 140 L 50 140 Q 40 140 40 130 L 40 70 Q 40 60 50 60 Z" 
          fill="url(#gradientMain)" />
    
    {/* Coin inside Chat Bubble */}
    <g transform="translate(100, 95)">
      {/* Coin Circle */}
      <circle cx="0" cy="0" r="25" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2"/>
      
      {/* Coin Symbol */}
      <text x="0" y="10" fontSize="30" fontWeight="bold" textAnchor="middle" fill="#78350F">
        💰
      </text>
    </g>
    
    {/* Highlights */}
    <circle cx="120" cy="75" r="8" fill="white" opacity="0.4"/>
  </svg>
);

export const ChatPayLogoSimple = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="gradientSimple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Speech Bubble */}
    <path d="M 40 50 L 140 50 Q 155 50 155 65 L 155 130 Q 155 145 140 145 L 75 145 L 55 165 L 65 145 L 40 145 Q 25 145 25 130 L 25 65 Q 25 50 40 50 Z" 
          fill="url(#gradientSimple)" />
    
    {/* Coin Circles */}
    <circle cx="70" cy="95" r="15" fill="white" opacity="0.3" stroke="white" strokeWidth="2"/>
    <circle cx="100" cy="90" r="18" fill="#FBBF24" stroke="white" strokeWidth="2"/>
    <circle cx="130" cy="100" r="12" fill="white" opacity="0.4" stroke="white" strokeWidth="1.5"/>
    
    {/* Shine Effect */}
    <circle cx="105" cy="85" r="6" fill="white" opacity="0.7"/>
  </svg>
);

export const ChatPayLogoMinimal = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="gradientMinimal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Main Shape - Speech Bubble with Coin */}
    <g>
      {/* Bubble */}
      <rect x="35" y="45" width="130" height="95" rx="20" fill="url(#gradientMinimal)"/>
      <polygon points="50,140 70,110 45,110" fill="url(#gradientMinimal)"/>
      
      {/* Coin - Gold Circle */}
      <circle cx="100" cy="92" r="32" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3"/>
      
      {/* Coin Details */}
      <circle cx="100" cy="92" r="28" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.5" strokeDasharray="5,5"/>
      
      {/* Dollar Sign */}
      <text x="100" y="105" fontSize="45" fontWeight="bold" textAnchor="middle" fill="#78350F">
        $
      </text>
    </g>
  </svg>
);

export const ChatPayLogoModern = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="gradientModern" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3"/>
      </filter>
    </defs>
    
    {/* Message Bubble */}
    <path d="M 45 55 L 155 55 Q 165 55 165 65 L 165 125 Q 165 135 155 135 L 75 135 L 55 155 L 65 135 L 45 135 Q 35 135 35 125 L 35 65 Q 35 55 45 55 Z" 
          fill="url(#gradientModern)" filter="url(#shadow)"/>
    
    {/* Coin Elements */}
    {/* Coin 1 */}
    <g transform="translate(80, 90)">
      <circle cx="0" cy="0" r="20" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2"/>
      <circle cx="-7" cy="-5" r="3" fill="#78350F"/>
      <circle cx="7" cy="5" r="3" fill="#78350F"/>
      <path d="M -5 -10 Q 0 -8 5 -10" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
    </g>
    
    {/* Shine Lines */}
    <line x1="50" y1="60" x2="55" y2="65" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
    <line x1="155" y1="65" x2="160" y2="70" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
  </svg>
);

export const ChatPayLogoPremium = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="gradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <circle cx="100" cy="100" r="95" fill="white" stroke="url(#gradientPremium)" strokeWidth="3"/>
    
    {/* Chat Bubble */}
    <path d="M 45 55 L 145 55 Q 160 55 160 70 L 160 120 Q 160 135 145 135 L 75 135 L 50 160 L 65 135 L 45 135 Q 30 135 30 120 L 30 70 Q 30 55 45 55 Z" 
          fill="url(#gradientPremium)" fillOpacity="0.95"/>
    
    {/* Main Coin */}
    <circle cx="100" cy="95" r="28" fill="url(#coinGradient)" stroke="#D97706" strokeWidth="2.5"/>
    
    {/* Inner Circle */}
    <circle cx="100" cy="95" r="22" fill="none" stroke="#D97706" strokeWidth="1"/>
    
    {/* Coin Pattern */}
    <circle cx="95" cy="90" r="2" fill="#78350F"/>
    <circle cx="105" cy="90" r="2" fill="#78350F"/>
    <circle cx="95" cy="100" r="2" fill="#78350F"/>
    <circle cx="105" cy="100" r="2" fill="#78350F"/>
    
    {/* Currency Symbol */}
    <text x="100" y="103" fontSize="32" fontWeight="bold" textAnchor="middle" fill="white">
      💎
    </text>
    
    {/* Decorative Stars */}
    <text x="55" y="65" fontSize="18">✨</text>
    <text x="145" y="75" fontSize="16">✨</text>
  </svg>
);

// Logo Display Component
const ChatPayLogos = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          💬 ChatPay Logo Options
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Pilih logo yang paling Anda sukai untuk ChatPay
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className="h-40 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <div className="w-32 h-32">
                <ChatPayLogoMain />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Main</h3>
            <p className="text-sm text-gray-600 text-center">
              Classic dengan chat bubble & coin
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">Modern & Friendly</p>
          </div>

          {/* Logo 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className="h-40 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <div className="w-32 h-32">
                <ChatPayLogoSimple />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Simple</h3>
            <p className="text-sm text-gray-600 text-center">
              Minimalis dengan banyak koin
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">Clean & Playful</p>
          </div>

          {/* Logo 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className="h-40 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <div className="w-32 h-32">
                <ChatPayLogoMinimal />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Minimal</h3>
            <p className="text-sm text-gray-600 text-center">
              Dollar sign dalam chat bubble
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">Professional & Bold</p>
          </div>

          {/* Logo 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className="h-40 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <div className="w-32 h-32">
                <ChatPayLogoModern />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Modern</h3>
            <p className="text-sm text-gray-600 text-center">
              Design dengan efek shadow
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">Contemporary & Trendy</p>
          </div>

          {/* Logo 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className="h-40 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <div className="w-32 h-32">
                <ChatPayLogoPremium />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Premium</h3>
            <p className="text-sm text-gray-600 text-center">
              Luxury dengan coin pattern
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">Elegant & Exclusive</p>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">⭐ Rekomendasi</h2>
          <p className="mb-4">
            Logo <strong>Premium</strong> adalah pilihan terbaik karena:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Elegant dan professional</li>
            <li>Mudah dikenali dan memorable</li>
            <li>Cocok untuk berbagai platform</li>
            <li>Scalable dan responsive</li>
            <li>Menunjukkan value & premium feel</li>
          </ul>
        </div>

        {/* Usage Guide */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">📱 Ukuran Rekomendasi</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Header: 48px × 48px</li>
              <li>• Favicon: 32px × 32px</li>
              <li>• App Icon: 192px × 192px</li>
              <li>• Social Media: 256px × 256px</li>
              <li>• Large Display: 512px × 512px</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">🎨 Format Tersedia</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• SVG (Vector) - Recommended</li>
              <li>• PNG (Transparent)</li>
              <li>• JPG (Solid Background)</li>
              <li>• WebP (Modern Format)</li>
              <li>• Font Icon (.ttf, .woff)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPayLogos;

// Export untuk digunakan di components
export { ChatPayLogos };
