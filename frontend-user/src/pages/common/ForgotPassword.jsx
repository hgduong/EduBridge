import React, { useState } from 'react'

const ForgotPassword = () => {
	const [email, setEmail] = useState('')
	const [sent, setSent] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		// mock behavior
		setSent(true)
	}

	return (
		<div style={{ maxWidth: 480, margin: '48px auto', padding: 24, background: '#fff', borderRadius: 8 }}>
			<h2>Quên mật khẩu</h2>
			{sent ? (
				<div>Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu tới email của bạn nếu email tồn tại.</div>
			) : (
				<form onSubmit={handleSubmit}>
					<label style={{ display: 'block', marginBottom: 8 }}>Email</label>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 12 }} />
					<button type="submit" style={{ padding: '10px 16px' }}>Gửi</button>
				</form>
			)}
		</div>
	)
}

export default ForgotPassword
