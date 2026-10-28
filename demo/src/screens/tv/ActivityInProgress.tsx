import { useEffect, useRef, useState } from 'react'
import { endActivity, startActivity, tick, type EngSignals, type EngState } from '../../engagement'
import type { StrKey } from '../../strings'
import { T, TvStage } from '../../ui'

const stateLabel: Record<EngState, StrKey> = {
  active: 'stateActive',
  idle_present: 'stateIdlePresent',
  idle_absent: 'stateIdleAbsent',
  sleep: 'stateSleep',
}

const mmss = (sec: number) =>
  `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`

export default function ActivityInProgress() {
  const [snap, setSnap] = useState(startActivity)
  const [inFrame, setInFrame] = useState(true)
  const [responding, setResponding] = useState(true)
  const signals = useRef<EngSignals>({ buddyInFrame: true, responding: true })
  signals.current = { buddyInFrame: inFrame, responding }

  useEffect(() => {
    const id = setInterval(() => setSnap((s) => tick(s, signals.current)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <TvStage>
        <span className="state-pill" data-state={snap.state} data-testid="state"><T k={stateLabel[snap.state]} /></span>
        <p className="mid"><T k="counted" /></p>
        <p className="counter" data-testid="counter">{mmss(snap.countedSeconds)}</p>
        {snap.state === 'idle_present' && <p className="big"><T k="offTask" /></p>}
        {snap.state === 'sleep' && <p className="big"><T k="goingToSleep" /></p>}
      </TvStage>
      <div className="sim" role="group" aria-label="simulation">
        <strong><T k="simPanel" /></strong>
        <label><input type="checkbox" checked={inFrame} onChange={(e) => setInFrame(e.target.checked)} /><T k="simInFrame" /></label>
        <label><input type="checkbox" checked={responding} onChange={(e) => setResponding(e.target.checked)} /><T k="simResponding" /></label>
        <button type="button" onClick={() => setSnap((s) => endActivity(s))}><T k="simEnd" /></button>
        <button type="button" onClick={() => { setSnap(startActivity()); setInFrame(true); setResponding(true) }}><T k="simRestart" /></button>
      </div>
    </>
  )
}
