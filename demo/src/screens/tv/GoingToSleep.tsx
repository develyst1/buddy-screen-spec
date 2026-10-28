import { T, TvStage } from '../../ui'

export default function GoingToSleep() {
  return (
    <TvStage>
      <span className="moon" aria-hidden="true">🌙</span>
      <p className="big"><T k="goingToSleep" /></p>
    </TvStage>
  )
}
