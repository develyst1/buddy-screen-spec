import { useState } from 'react'
import { fixtures } from '../../fixtures'
import { PhoneFrame, T } from '../../ui'

export default function LiffRename() {
  const [name, setName] = useState<string>(fixtures.aiNames[1])
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <p><T k="rename" /></p>
      <ul>
        {fixtures.aiNames.map((n) => (
          <li key={n}>
            <label className="item"><input type="radio" name="ainame" checked={name === n} onChange={() => setName(n)} />{n}</label>
          </li>
        ))}
      </ul>
      <button type="button" className="pbtn primary"><T k="renameConfirm" /></button>
    </PhoneFrame>
  )
}
