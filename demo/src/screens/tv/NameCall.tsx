import { T, TvStage } from '../../ui'

export default function NameCall() {
  return (
    <TvStage>
      <span className="moon" aria-hidden="true">🎙️</span>
      <p className="big"><T k="nameCallConfirm" /></p>
    </TvStage>
  )
}
