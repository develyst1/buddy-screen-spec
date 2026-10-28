import { T, TvStage } from '../../ui'

// Placeholder only: no camera access of any kind.
export default function FaceGestureRegistration() {
  return (
    <TvStage>
      <p className="big"><T k="faceRegistration" /></p>
      <div className="cam-box"><span><T k="cameraPlaceholder" /></span></div>
      <p className="big"><T k="gestureRegistration" /></p>
    </TvStage>
  )
}
