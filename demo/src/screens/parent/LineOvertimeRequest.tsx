import { useState } from 'react'
import { fixtures } from '../../fixtures'
import { fill, strings } from '../../strings'
import { PhoneFrame, PhoneLink, T } from '../../ui'

export default function LineOvertimeRequest() {
  const [answer, setAnswer] = useState<'approved' | 'declined' | null>(null)
  return (
    <PhoneFrame kind="line" title={<T k="barLine" />}>
      <div className="bubble">{fill(strings.overtimeRequest.th, { nickname: fixtures.buddyNickname })}</div>
      {!answer && (
        <div className="btn-row">
          <button type="button" className="pbtn primary" onClick={() => setAnswer('approved')}><T k="overtimeApprove" /></button>
          <button type="button" className="pbtn danger" onClick={() => setAnswer('declined')}><T k="overtimeDecline" /></button>
        </div>
      )}
      {answer && (
        <>
          <div className="bubble me"><T k={answer === 'approved' ? 'overtimeApprove' : 'overtimeDecline'} /></div>
          <div className="status" role="status" data-testid="result">
            <T k={answer === 'approved' ? 'approvedResult' : 'declinedResult'} />
          </div>
          {answer === 'declined' && <PhoneLink href="#/tv/overtime-declined" k="linkToTv" />}
        </>
      )}
    </PhoneFrame>
  )
}
