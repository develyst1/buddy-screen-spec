import { useState } from 'react'
import { PhoneFrame, T } from '../../ui'

export default function LiffConsent() {
  const [done, setDone] = useState(false)
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <p><T k="consentBody" /></p>
      {done ? (
        <div className="status" role="status"><T k="consentDone" /></div>
      ) : (
        <div className="btn-row">
          <button type="button" className="pbtn primary" onClick={() => setDone(true)}><T k="consentYes" /></button>
          <button type="button" className="pbtn"><T k="consentNo" /></button>
        </div>
      )}
    </PhoneFrame>
  )
}
