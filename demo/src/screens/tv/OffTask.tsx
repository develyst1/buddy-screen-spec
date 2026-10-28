import { T, TvStage } from '../../ui'

export default function OffTask() {
  return (
    <TvStage>
      <span className="moon" aria-hidden="true">❓</span>
      <p className="big"><T k="offTask" /></p>
    </TvStage>
  )
}
