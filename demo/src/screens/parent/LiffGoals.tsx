import { goalTopics } from '../../strings'
import { PhoneFrame, S, T } from '../../ui'

export default function LiffGoals() {
  return (
    <PhoneFrame kind="liff" title={<T k="barLiff" />}>
      <h3><T k="goalsIntro" /></h3>
      {goalTopics.map((g, gi) => (
        <fieldset key={gi} style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="muted"><S s={g.area} /></legend>
          <ul>
            {g.topics.map((t, ti) => (
              <li key={ti}>
                <label className="item"><input type="checkbox" /><span><S s={t} /></span></label>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
      <button type="button" className="pbtn primary"><T k="save" /></button>
    </PhoneFrame>
  )
}
