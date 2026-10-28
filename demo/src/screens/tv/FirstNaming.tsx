import { useState } from 'react'
import { fixtures } from '../../fixtures'
import { T, TvStage } from '../../ui'

export default function FirstNaming() {
  const [chosen, setChosen] = useState<string | null>(null)
  return (
    <TvStage>
      <p className="big"><T k="firstNaming" /></p>
      <p className="mid"><T k="firstNamingExamples" /></p>
      <div className="row">
        {fixtures.aiNames.map((n) => (
          <button key={n} type="button" className="btn" aria-pressed={chosen === n} onClick={() => setChosen(n)}>{n}</button>
        ))}
      </div>
      <button type="button" className="btn primary" disabled={!chosen}><T k="confirmName" /></button>
    </TvStage>
  )
}
