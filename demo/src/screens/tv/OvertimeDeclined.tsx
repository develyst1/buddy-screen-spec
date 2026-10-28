import { T, TvStage } from '../../ui'

// The TV side of a declined overtime request: a session-ending screen like QuotaZero.
export default function OvertimeDeclined() {
  return (
    <TvStage>
      <span className="moon" aria-hidden="true">🌙</span>
      <p className="big"><T k="overtimeDeclinedTv" /></p>
    </TvStage>
  )
}
