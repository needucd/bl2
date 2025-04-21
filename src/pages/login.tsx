import React, { useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const sendOTP = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      phone: phone.startsWith('+') ? phone : `+91${phone}`,
    })
    setLoading(false)

    if (error) {
      setMessage(`❌ Error sending OTP: ${error.message}`)
    } else {
      setMessage('✅ OTP sent! Please check your phone.')
      setStep('otp')
    }
  }

  const verifyOTP = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.verifyOtp({
      phone: phone.startsWith('+') ? phone : `+91${phone}`,
      token: otp,
      type: 'sms',
    })
    setLoading(false)

    if (error) {
      setMessage(`❌ Verification failed: ${error.message}`)
    } else {
      setMessage('✅ Login successful!')
      console.log('User:', data.session?.user)
      navigate('/dashboard') // ✅ redirect to dashboard
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: 'auto' }}>
      <h2>Login with Phone</h2>

      {step === 'phone' && (
        <>
          <input
            type="text"
            placeholder="Phone number (e.g. 8590600006)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={sendOTP} disabled={loading}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </>
      )}

      {step === 'otp' && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={verifyOTP} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </>
      )}

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  )
}

export default Login
