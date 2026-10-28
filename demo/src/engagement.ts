// Engagement states — requirement §6. Pure: no timers, one call = one second.
export type EngState = 'active' | 'idle_present' | 'idle_absent' | 'sleep'
export interface EngSignals { buddyInFrame: boolean; responding: boolean }
export interface EngSnapshot { state: EngState; countedSeconds: number; secondsInState: number }

export const T1_SECONDS = 10
export const T2_SECONDS = 20

export function startActivity(): EngSnapshot {
  return { state: 'active', countedSeconds: 0, secondsInState: 0 }
}

// `secondsInState` is: in active = consecutive silent seconds; in idle_* = seconds since leaving active.
export function tick(s: EngSnapshot, sig: EngSignals): EngSnapshot {
  const { buddyInFrame, responding } = sig
  switch (s.state) {
    case 'sleep':
      return s
    case 'active': {
      if (!buddyInFrame) return { state: 'idle_absent', countedSeconds: s.countedSeconds, secondsInState: 1 }
      const counted = s.countedSeconds + 1
      if (responding) return { state: 'active', countedSeconds: counted, secondsInState: 0 }
      const silent = s.secondsInState + 1
      if (silent >= T1_SECONDS) return { state: 'idle_present', countedSeconds: counted, secondsInState: 0 }
      return { state: 'active', countedSeconds: counted, secondsInState: silent }
    }
    case 'idle_present': {
      if (buddyInFrame && responding) return { state: 'active', countedSeconds: s.countedSeconds + 1, secondsInState: 0 }
      const idle = s.secondsInState + 1
      if (!buddyInFrame) {
        if (idle >= T2_SECONDS) return { state: 'sleep', countedSeconds: s.countedSeconds, secondsInState: idle }
        return { state: 'idle_absent', countedSeconds: s.countedSeconds, secondsInState: idle }
      }
      if (idle >= T2_SECONDS) return { state: 'sleep', countedSeconds: s.countedSeconds + 1, secondsInState: idle }
      return { state: 'idle_present', countedSeconds: s.countedSeconds + 1, secondsInState: idle }
    }
    case 'idle_absent': {
      if (buddyInFrame && responding) return { state: 'active', countedSeconds: s.countedSeconds + 1, secondsInState: 0 }
      const idle = s.secondsInState + 1
      if (idle >= T2_SECONDS) return { state: 'sleep', countedSeconds: s.countedSeconds, secondsInState: idle }
      if (buddyInFrame) return { state: 'idle_present', countedSeconds: s.countedSeconds + 1, secondsInState: idle }
      return { state: 'idle_absent', countedSeconds: s.countedSeconds, secondsInState: idle }
    }
  }
}

export function endActivity(s: EngSnapshot): EngSnapshot {
  return { ...s, state: 'sleep' }
}
