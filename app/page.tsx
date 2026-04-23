'use client'
import { Raleway } from 'next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from './lib/supabase'

const raleway = Raleway({ subsets: ['latin'], weight: ['700'] })

export default function Home() {
  const [contractId, setContractId] = useState('')
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('contract_id', contractId)
      .eq('login_id', loginId)
      .eq('password_hash', password)
      .single()
    if (error || !data) {
      setError('契約ID・ログインID・パスワードを確認してください')
      setLoading(false)
      return
    }
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #006400 0%, #004d00 100%)'}}>
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className={'text-3xl font-bold mb-1 ' + raleway.className} style={{color: '#006400'}}>
            CareAxis
          </h1>
          <p className="text-gray-400 text-sm">訪問介護管理システム</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">契約ID</label>
            <input
              type="text"
              value={contractId}
              onChange={e => setContractId(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none text-gray-900"
              placeholder="例：CA-0001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">ログインID</label>
            <input
              type="text"
              value={loginId}
              onChange={e => setLoginId(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none text-gray-900"
              placeholder="ログインIDを入力"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none text-gray-900"
              placeholder="パスワードを入力"
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full text-white rounded-lg py-3 text-sm font-bold mt-2 transition hover:opacity-90"
            style={{backgroundColor: '#006400'}}
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </div>
        <p className="text-center text-xs text-gray-300 mt-6">2025 KeyAxis Inc.</p>
      </div>
    </div>
  )
}