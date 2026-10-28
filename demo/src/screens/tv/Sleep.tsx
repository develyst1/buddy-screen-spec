import { T, TvStage } from '../../ui'

export default function Sleep() {
  return (
    <TvStage>
      <span className="moon" aria-hidden="true">🌙</span>
      <p className="big"><T k="sleepScreen" /></p>
    </TvStage>
  )
}
