import { useState } from 'react'
import { fill, strings, type StrKey } from '../../strings'
import { T, TvStage } from '../../ui'

const activities: StrKey[] = ['activityExercise', 'activityBrain', 'activityTalk', 'activityThink']

export default function Invitation() {
  const [i, setI] = useState(0)
  const activity = strings[activities[i]].th
  return (
    <TvStage>
      <p className="big">{fill(strings.invitation.th, { activity })}</p>
      <div className="row">
        {activities.map((k, idx) => (
          <button key={k} type="button" className="btn" aria-pressed={idx === i} onClick={() => setI(idx)}>
            <T k={k} />
          </button>
        ))}
      </div>
      <button type="button" className="btn primary"><T k="invitationAccept" /></button>
    </TvStage>
  )
}
