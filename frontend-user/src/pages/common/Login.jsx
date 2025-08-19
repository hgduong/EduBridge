import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Vui lòng điền email và mật khẩu')
      return
    }
    setLoading(true)
    try {
      // Replace with real API call. This is a mock POST to demonstrate behavior.
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Đăng nhập thất bại')
      }
      // on success navigate to profile
      navigate('/profile')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: '48px auto', padding: 24, background: '#fff', borderRadius: 8 }}>
      <h2>Đăng nhập</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 12 }}
        />

        <label style={{ display: 'block', marginBottom: 8 }}>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 12 }}
        />

        <button type="submit" disabled={loading} style={{ padding: '10px 16px' }}>
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>
      <p style={{ marginTop: 12 }}>
        Chưa có tài khoản? <button onClick={() => navigate('/register')} style={{ color: '#1890ff', background: 'none', border: 'none', cursor: 'pointer' }}>Đăng kí</button>
      </p>
    </div>
  )
}

export default Login