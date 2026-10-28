import { fixtures } from '../../fixtures'
import { fill, strings } from '../../strings'
import { PhoneFrame, PhoneLink, T } from '../../ui'

export default function LineBorrowed() {
  return (
    <PhoneFrame kind="line" title={<T k="barLine" />}>
      <div className="bubble">{fill(strings.borrowed.th, { minutes: fixtures.borrowedMinutes })}</div>
      <PhoneLink href="#/parent/liff-quota-settings" k="linkToQuota" />
    </PhoneFrame>
  )
}
