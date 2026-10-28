import { useState } from 'react'
import type { StrKey } from '../../strings'
import { PhoneFrame, T } from '../../ui'

const options: Array<{ id: string; label: StrKey }> = [
  { id: 'big', label: 'giftBig' },
  { id: 'small', label: 'giftSmall' },
  { id: 'none', label: 'giftNone' },
]

export default function LiffGiftChoice() {
  const [choice, setChoice] = useState('small')
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <h3><T k="giftIntro" /></h3>
      <p className="muted"><T k="giftBudget" /> · <T k="giftCarry" /></p>
      <ul>
        {options.map((o) => (
          <li key={o.id}>
            <label className="item">
              <input type="radio" name="gift" checked={choice === o.id} onChange={() => setChoice(o.id)} />
              <span><T k={o.label} /></span>
            </label>
          </li>
        ))}
      </ul>
      <button type="button" className="pbtn primary"><T k="save" /></button>
    </PhoneFrame>
  )
}
