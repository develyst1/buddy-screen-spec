import { useState } from 'react'
import { fixtures } from '../../fixtures'
import { PhoneFrame, T } from '../../ui'

export default function LiffFriendConsent() {
  const [deleted, setDeleted] = useState(false)
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <p><T k="friendConsent" /></p>
      <h3><T k="friendListTitle" /></h3>
      {deleted ? (
        <div className="status" role="status"><T k="friendDeleted" /></div>
      ) : (
        <div className="field">
          <span>{fixtures.friendNickname}</span>
          <button type="button" className="pbtn danger" style={{ width: 'auto' }} onClick={() => setDeleted(true)}><T k="friendDelete" /></button>
        </div>
      )}
    </PhoneFrame>
  )
}
