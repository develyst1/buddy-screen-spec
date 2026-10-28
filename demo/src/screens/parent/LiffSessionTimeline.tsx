import { useState } from 'react'
import type { StrKey } from '../../strings'
import { PhoneFrame, T } from '../../ui'

// Invented intervals (synthetic).
const intervals: Array<{ from: string; to: string; reason: StrKey }> = [
  { from: '16:00', to: '16:12', reason: 'timelineActive' },
  { from: '16:12', to: '16:13', reason: 'timelineIdlePresent' },
  { from: '16:13', to: '16:14', reason: 'timelineIdleAbsent' },
  { from: '16:14', to: '16:30', reason: 'timelineActive' },
  { from: '16:30', to: '—', reason: 'timelineSleep' },
]

export default function LiffSessionTimeline() {
  const [disputed, setDisputed] = useState<number | null>(null)
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <h3><T k="timelineIntro" /></h3>
      <ul>
        {intervals.map((it, i) => (
          <li key={i} className="item" style={{ flexWrap: 'wrap' }}>
            <strong>{it.from}–{it.to}</strong>
            <span><T k={it.reason} /></span>
            <button type="button" className="pbtn" style={{ width: '100%' }} onClick={() => setDisputed(i)}><T k="dispute" /></button>
            {disputed === i && <span role="status" className="muted"><T k="disputeSent" /></span>}
          </li>
        ))}
      </ul>
    </PhoneFrame>
  )
}
