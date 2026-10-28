import { useState } from 'react'
import { fixtures } from '../../fixtures'
import { fill, strings } from '../../strings'
import { PhoneFrame, T } from '../../ui'

export default function LiffQuotaSettings() {
  const [overtime, setOvertime] = useState(true)
  const [sundayUsedUp, setSundayUsedUp] = useState(false)
  const [boughtBack, setBoughtBack] = useState(false)
  const buyBackAmount = ((fixtures.borrowedMinutes * fixtures.extraPerHourThb) / 60).toFixed(2)
  const quotaLine = fill(strings.quota.th, {
    h: [fixtures.weekLeft.h, fixtures.usedToday.h],
    m: [fixtures.weekLeft.m, fixtures.usedToday.m],
  })
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <p>{quotaLine}</p>
      <div className="field"><span><T k="dailyLimit" /></span><strong><T k="dailyLimitValue" /></strong></div>
      <label className="field">
        <span><T k="overtimeSetting" /></span>
        <input type="checkbox" checked={overtime} onChange={(e) => setOvertime(e.target.checked)} />
      </label>
      <section aria-labelledby="buyback-title" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 id="buyback-title"><T k="buyBackTitle" /></h3>
        <p className="muted"><T k="buyBackInfo" vars={{ minutes: fixtures.borrowedMinutes }} /></p>
        <p data-testid="buyback-amount"><T k="buyBackAmount" vars={{ amount: buyBackAmount }} /></p>
        {boughtBack ? (
          <div className="status" role="status" data-testid="buyback-done"><T k="buyBackDone" /></div>
        ) : (
          <button type="button" className="pbtn primary" onClick={() => setBoughtBack(true)}><T k="buyBackButton" /></button>
        )}
      </section>
      {!sundayUsedUp && (
        <button type="button" className="pbtn" onClick={() => setSundayUsedUp(true)}><T k="showSundayUsedUp" /></button>
      )}
      {sundayUsedUp && (
        <>
          <div className="status" role="status" data-testid="sunday-used-up"><T k="sundayUsedUp" /></div>
          <button type="button" className="pbtn primary" data-testid="paid-extension"><T k="buyExtension" /></button>
        </>
      )}
    </PhoneFrame>
  )
}
