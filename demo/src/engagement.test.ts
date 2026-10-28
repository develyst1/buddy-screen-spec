import { describe, expect, it } from 'vitest'
import { endActivity, startActivity, tick, type EngSignals, type EngSnapshot } from './engagement'

const present: EngSignals = { buddyInFrame: true, responding: true }
const silent: EngSignals = { buddyInFrame: true, responding: false }
const away: EngSignals = { buddyInFrame: false, responding: false }

function run(s: EngSnapshot, sig: EngSignals, seconds: number): EngSnapshot {
  for (let i = 0; i < seconds; i++) s = tick(s, sig)
  return s
}

describe('engagement states (requirement §6)', () => {
  it('in frame and responding for 60 s stays active, counted 60', () => {
    const s = run(startActivity(), present, 60)
    expect(s.state).toBe('active')
    expect(s.countedSeconds).toBe(60)
  })

  it('silent from t=0: idle_present after 10 ticks, sleep after 30, counted 30 then frozen', () => {
    let s = run(startActivity(), silent, 9)
    expect(s.state).toBe('active')
    s = tick(s, silent)
    expect(s.state).toBe('idle_present')
    expect(s.countedSeconds).toBe(10)
    s = run(s, silent, 19)
    expect(s.state).toBe('idle_present')
    s = tick(s, silent)
    expect(s.state).toBe('sleep')
    expect(s.countedSeconds).toBe(30)
    s = run(s, present, 30)
    expect(s.state).toBe('sleep')
    expect(s.countedSeconds).toBe(30)
  })

  it('silent 15 s then responding goes back to active; counting never stopped', () => {
    let s = run(startActivity(), silent, 15)
    expect(s.state).toBe('idle_present')
    s = tick(s, present)
    expect(s.state).toBe('active')
    expect(s.countedSeconds).toBe(16)
  })

  it('out of frame at t=0: idle_absent at once, counted stays 0, sleep after 20 ticks', () => {
    let s = tick(startActivity(), away)
    expect(s.state).toBe('idle_absent')
    expect(s.countedSeconds).toBe(0)
    s = run(s, away, 18)
    expect(s.state).toBe('idle_absent')
    s = tick(s, away)
    expect(s.state).toBe('sleep')
    expect(s.countedSeconds).toBe(0)
  })

  it('out of frame 5 s then back but silent: idle_present, counting resumes, sleep at 20 s idle in total', () => {
    let s = run(startActivity(), away, 5)
    expect(s.state).toBe('idle_absent')
    expect(s.countedSeconds).toBe(0)
    s = tick(s, silent)
    expect(s.state).toBe('idle_present')
    expect(s.countedSeconds).toBe(1)
    s = run(s, silent, 13)
    expect(s.state).toBe('idle_present')
    s = tick(s, silent)
    expect(s.state).toBe('sleep')
    expect(s.countedSeconds).toBe(15)
  })

  it('leaving the frame while idle_present stops counting at once', () => {
    let s = run(startActivity(), silent, 12)
    const before = s.countedSeconds
    s = tick(s, away)
    expect(s.state).toBe('idle_absent')
    expect(s.countedSeconds).toBe(before)
  })

  it('back in frame and responding from idle_absent returns to active and counts', () => {
    let s = run(startActivity(), away, 3)
    s = tick(s, present)
    expect(s.state).toBe('active')
    expect(s.countedSeconds).toBe(1)
  })

  it('End activity goes to sleep and stops counting', () => {
    let s = run(startActivity(), present, 5)
    s = endActivity(s)
    s = run(s, present, 10)
    expect(s.state).toBe('sleep')
    expect(s.countedSeconds).toBe(5)
  })
})
