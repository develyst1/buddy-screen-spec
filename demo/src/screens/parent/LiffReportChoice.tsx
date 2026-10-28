import { useState } from 'react'
import { PhoneFrame, T } from '../../ui'

export default function LiffReportChoice() {
  const [choice, setChoice] = useState<'daily' | 'weekly'>('daily')
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <h3><T k="reportIntro" /></h3>
      <ul>
        <li><label className="item"><input type="radio" name="report" checked={choice === 'daily'} onChange={() => setChoice('daily')} /><T k="reportDaily" /></label></li>
        <li><label className="item"><input type="radio" name="report" checked={choice === 'weekly'} onChange={() => setChoice('weekly')} /><T k="reportWeekly" /></label></li>
      </ul>
      <button type="button" className="pbtn primary"><T k="save" /></button>
    </PhoneFrame>
  )
}
