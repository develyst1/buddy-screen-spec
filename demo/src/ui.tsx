import type { ReactNode } from 'react'
import { fill, strings, type StrKey, type Str } from './strings'

type Vars = Record<string, string | number | Array<string | number>>

// Renders one entry of strings.ts; draft strings carry a small ร่าง badge.
export function T({ k, vars }: { k: StrKey; vars?: Vars }) {
  const str = strings[k]
  const text = vars ? fill(str.th, vars) : str.th
  return (
    <>
      {text}
      {str.source === 'draft' && <span className="draft-badge">ร่าง</span>}
    </>
  )
}

// Same as T, for a Str object that is not a top-level key (e.g. the goal catalogue).
export function S({ s }: { s: Str }) {
  return (
    <>
      {s.th}
      {s.source === 'draft' && <span className="draft-badge">ร่าง</span>}
    </>
  )
}

// A plain link that looks like a phone-screen button (≥ 44 px tall).
export function PhoneLink({ href, k }: { href: string; k: StrKey }) {
  return (
    <a
      href={href}
      className="pbtn"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
    >
      <T k={k} />
    </a>
  )
}

export function TvStage({ children }: { children: ReactNode }) {
  return <section className="tv">{children}</section>
}

export function PhoneFrame({ kind, title, children }: { kind: 'line' | 'liff'; title: ReactNode; children: ReactNode }) {
  return (
    <section className="phone">
      <div className={kind === 'liff' ? 'phone-bar liff' : 'phone-bar'}>{title}</div>
      <div className="phone-body">{children}</div>
    </section>
  )
}
