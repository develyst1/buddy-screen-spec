import { useState } from 'react'
import { T, TvStage } from '../../ui'

// The AI explains kindly, then sleeps (SPEC-002 §3). "Next" moves to the sleep text.
export default function QuotaZero() {
  const [slept, setSlept] = useState(false)
  return (
    <TvStage>
      <span className="moon" aria-hidden="true">{slept ? '🌙' : '⏰'}</span>
      <p className="big"><T k={slept ? 'sleepScreen' : 'quotaZero'} /></p>
      {!slept && (
        <button type="button" className="btn" onClick={() => setSlept(true)}><T k="nextScreen" /></button>
      )}
    </TvStage>
  )
}
