import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['700'] })

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #006400 0%, #004d00 100%)'}}>
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-1 ${raleway.className}`} style={{color: '#006400'}}>
            CareAxis
          </h1>
          <p className="text-gray-400 text-sm">訪問介護管理システム</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">契約ID</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
              style={{'--tw-ring-color': '#90EE90'} as React.CSSProperties}
              placeholder="契約IDを入力"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">ログインID</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
              placeholder="ログインIDを入力"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">パスワード</label>
            <input
              type="password"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
              placeholder="••••••••"
            />
          </div>
          <button
            className="w-full text-white rounded-lg py-3 text-sm font-bold mt-2 transition hover:opacity-90"
            style={{backgroundColor: '#006400'}}
          >
            ログイン
          </button>
        </div>
        <p className="text-center text-xs text-gray-300 mt-6">© 2025 KeyAxis Inc.</p>
      </div>
    </div>
  )
}