'use client'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['700'] })

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f5f5'}}>
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className={'text-xl font-bold ' + raleway.className} style={{color: '#006400'}}>
          CareAxis
        </h1>
        <span className="text-sm text-gray-500">岡村管理者さん（admin）</span>
      </header>
      <main className="p-6">
        <h2 className="text-lg font-bold text-gray-700 mb-4">ダッシュボード</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">今日の訪問件数</p>
            <p className="text-3xl font-bold mt-1" style={{color: '#006400'}}>12</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">稼働スタッフ数</p>
            <p className="text-3xl font-bold mt-1" style={{color: '#006400'}}>8</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">登録利用者数</p>
            <p className="text-3xl font-bold mt-1" style={{color: '#006400'}}>34</p>
          </div>
        </div>
      </main>
    </div>
  )
}