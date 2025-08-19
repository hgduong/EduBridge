import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!name || !email || !password) {
      setError('Vui lòng điền đầy đủ thông tin')
      return
    }
    if (password !== confirm) {
      setError('Mật khẩu xác nhận không khớp')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Đăng kí thất bại')
      }
      navigate('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 560, margin: '48px auto', padding: 24, background: '#fff', borderRadius: 8 }}>
      <h2>Đăng kí</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>Họ tên</label>
        <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 12 }} />

        <label style={{ display: 'block', marginBottom: 8 }}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 12 }} />

        <label style={{ display: 'block', marginBottom: 8 }}>Mật khẩu</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 12 }} />

        <label style={{ display: 'block', marginBottom: 8 }}>Xác nhận mật khẩu</label>
        <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 12 }} />

        <button type="submit" disabled={loading} style={{ padding: '10px 16px' }}>{loading ? 'Đang gửi...' : 'Đăng kí'}</button>
      </form>
      <p style={{ marginTop: 12 }}>
        Đã có tài khoản? <button onClick={() => navigate('/login')} style={{ color: '#1890ff', background: 'none', border: 'none', cursor: 'pointer' }}>Đăng nhập</button>
      </p>
    </div>
  )
}

export default Register