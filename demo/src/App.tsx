import { useEffect, useState } from 'react'
import { screens } from './screens/registry'
import { T } from './ui'

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash
}

function Index() {
  return (
    <main className="index">
      <h1><T k="indexTitle" /></h1>
      <p className="notice"><T k="mockNotice" /></p>
      {(['tv', 'parent'] as const).map((g) => {
        const items = screens.filter((s) => s.group === g)
        return (
          <section key={g}>
            <h2><T k={g === 'tv' ? 'groupTv' : 'groupParent'} /></h2>
            <ul>
              {items.map((s) => (
                <li key={s.id}><a href={`#/${s.group}/${s.id}`}><T k={s.title} /></a></li>
              ))}
            </ul>
          </section>
        )
      })}
    </main>
  )
}

export default function App() {
  const hash = useHash()
  const match = /^#\/(tv|parent)\/([\w-]+)$/.exec(hash)
  const entry = match && screens.find((s) => s.group === match[1] && s.id === match[2])
  return (
    <div className="shell">
      {entry ? (
        <>
          <a className="back" href="#/"><T k="backToIndex" /></a>
          <entry.Component />
        </>
      ) : (
        <Index />
      )}
    </div>
  )
}
