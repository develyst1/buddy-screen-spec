# AI for Kids (buddy-screen) — Version 1 requirements, complete

This document is self-contained. It was written by the project's PM on 2026-10-28 from the owner's requirement and decisions. Provenance tags: `[owner]` · `[owner-approved]` · `[Atom-decided]` (decided on the owner's delegation, reversible) · `[needs owner]` (deliberately open).

> 🔴 **Children's data.** The product handles children's faces, voices and names. Every example in this
> document is invented. No real child data may ever appear in any file, fixture, screenshot or log.

---

## 1. The product in one paragraph

An app that runs full-screen on the family's TV (through a small box, mini-PC or laptop connected to it) with
a USB camera and microphone. An AI with **no face and no character on screen — only a voice, and the camera as
its "eyes"** — talks with one registered child (the **Buddy**) and invites them into activities: physical
exercise, brain exercise, conversation, and thinking practice. The goal is to pull children away from phone /
media addiction and give them quality screen time. Parents control everything through **LINE**: quota,
overtime approval, goals, reports and gifts. `[owner]`

- Price: **2,000 THB / month** per subscription. `[owner]`
- Quota: **40 hours / week**, managed by the parent. `[owner]`
- Hardware (screen + camera): the customer provides it. `[owner]`
- Target age: roughly under 4 up to 12. The AI adapts to the child's real ability, family story and personality
  — not to a fixed age band. `[owner]`

## 2. Glossary — one meaning per word

| Term | Meaning |
|---|---|
| **Buddy** (My Buddy) | The one registered child of a subscription. 1 subscription = 1 Buddy. Only the Buddy's time is counted. |
| **Friend of Buddy** | Another child who joins an activity or game. Registered when they join, kept until deleted, so the AI knows them when talking with the Buddy. Never counted against quota. |
| **The AI** | The voice companion. Has a name the child chooses. No avatar. |
| **Parent** | The subscriber. Uses LINE (chat messages + LIFF pages inside LINE). |
| **Session** | One activity run on the TV, from invitation to sleep. |
| **active / idle / sleep** | The three engagement states (§6). |
| **Quota** | Counted time available this week. |
| **Borrowing** | Using next Sunday's allowance early when the parent did not answer an overtime request. |
| **Buy-back** | The parent paying to restore borrowed time. |
| **Face template** | Numbers computed from a face, used to recognise it. Never a photo. |
| **LIFF** | Web pages that open inside the LINE app. |

## 3. Actors and surfaces

| Actor | Surface | Does |
|---|---|---|
| Buddy (child) | TV screen + camera + mic | talks with the AI, does activities, calls the AI by name, uses the secret gesture |
| Friend of Buddy | TV screen + camera | joins activities |
| Parent | LINE chat + LIFF pages | consent, settings, approves overtime, goals, reports, chooses gifts, pays |
| Owner's operations team | order list (export) | buys and ships gifts |

## 4. The AI's character

- R-AI-1 No face or character on screen; only a voice and the camera. `[owner]`
- R-AI-2 The child names the AI at first use; example names are offered (e.g. "ปุยฝ้าย", "ดาว", "โบ๊ะ" — invented). `[owner]`
- R-AI-3 First naming is **free**. Each later rename costs **99 THB**, unlimited times; the child may ask, the parent confirms and pays in LINE. `[owner-approved 19:55]`
- R-AI-4 The AI uses its own name only when needed. `[owner]`
- R-AI-5 Key principle: **never force the child — invite, and reward instead.** One safety policy (invite, never force; age-appropriate; never collects personal details), held on the server and versioned. `[owner]`

## 5. Recognising who is there

- R-ID-1 The Buddy's face is registered and recognised. `[owner]`
- R-ID-2 A secret gesture is taught at first use and recognises the Buddy too. `[owner]`
- R-ID-3 Calling the AI's name opens the mic and the AI asks to confirm — *"เรียกฉันรึเปล่า"* — and must cope with children's accents. `[owner]`
- R-ID-4 Friends of Buddy are registered when they join and kept until deleted. `[owner]`
- R-ID-5 **Friend consent:** before a Friend is registered, the Buddy's parent confirms in LINE that the Friend's parent agreed. Only a face template and a **nickname** are kept (no real name, no photo). The Buddy's parent can delete a Friend at any time. A Friend's own parent asks for deletion through our LINE OA chat; the team deletes within 7 days. `[owner-approved 19:52; deletion channel Atom-decided]`
- R-ID-6 Recognition and pose run **on the home device**; only results ("Buddy present", "gesture seen") go to the server. **No camera image leaves the home** — not to our server, not to a cloud AI. `[owner-approved 17:00]`
- R-ID-7 Face/gesture templates are stored **encrypted on the main server** (source of truth); the home device keeps only a temporary cache. A new device or a future robot pulls them from the server. `[owner-approved 16:47]`

## 6. Activities, time counting and sleep

Activities: physical exercise · brain exercise · talking about things · thinking practice. The AI invites; if the
child joins and keeps going, time is counted; if the child drifts off-task, the AI asks what they are doing.
Camera + mic + AI read the situation in real time. `[owner]`

**States** `[owner 17:10, 17:13; split owner-approved 17:22; numbers owner-approved 17:13]`

| State | Meaning | Counted? |
|---|---|---|
| **active** | Buddy in frame and doing the activity | ✅ yes |
| **idle — present** | activity open, Buddy in frame but silent / still | ✅ yes |
| **idle — absent** | activity open, Buddy not in frame | ❌ no, from the first second |
| **sleep** | activity closed | ❌ no |

**Transitions**
- sleep → active: Buddy recognised **and** (gesture, or name call confirmed, or the AI's invitation accepted).
- active → idle: no response (voice or movement) for **10 s**, or Buddy leaves the frame.
- idle → active: response comes back.
- idle → sleep: **20 s** more without response ("Sleep ทันที").
- active → sleep: the activity ends, or the child says stop.

**Rules**
- R-T-1 Quota is returned to the parent in real time whenever time is not counted. `[owner]`
- R-T-2 Only the Buddy's time is counted; a Friend alone never starts or keeps counting. `[owner]`
- R-T-3 Accuracy: error **≤ 1 minute per counted hour**; **zero** seconds counted while the Buddy is out of frame. `[owner-approved 17:13]`
- R-T-4 One drift-off costs at most 30 s of quota (10 s + 20 s). `[PM-computed]`
- R-T-5 The parent sees a session timeline in LIFF (why each interval started and ended) and can dispute it.
- R-T-6 The thresholds are settings, not code; changing them needs the owner.

## 7. Quota, week and overtime

- R-Q-1 Week = **Monday–Sunday**, time zone **Asia/Bangkok**. `[owner-approved 19:48; tz Atom-decided]`
- R-Q-2 Weekly quota 40 h. Daily allowance = what the parent sets; unset = 40 h ÷ 7 ≈ **5 h 43 min**. `[owner-approved 19:48]`
- R-Q-3 When the Buddy reaches the limit, the parent gets a LINE message with **Approve / Decline** buttons. `[owner]`
- R-Q-4 If the parent set "no overtime per day" → the session ends. `[owner]`
- R-Q-5 If overtime is allowed and the parent does not answer within **3 hours from the moment the LINE message is sent**, time is **borrowed from Sunday's allowance** automatically. `[owner; timer start owner-approved 19:48]`
- R-Q-6 Borrowing continues until Sunday's allowance is used up; after that only an approved, paid extension works. `[owner]`
- R-Q-7 Extra hour price = **12.50 THB/h** (2,000 ÷ 160 h). Buy-back of borrowed time = **12.50 THB/h**. Billed **per minute used**, never rounded up. `[owner-approved 17:22, 19:48]`

## 8. Goals and reports

- R-G-1 The parent sets and adjusts goals. `[owner]`
- R-G-2 Topics to choose from by sex, age and family/child story. The starter catalogue is §12, drafted by the PM; the AI picks from it; the owner may edit. `[owner; catalogue Atom-decided]`
- R-G-3 The AI assesses and analyses progress. `[owner]`
- R-G-4 The parent chooses **daily or weekly** reports, delivered in LINE. `[owner]`

## 9. Rewards

- R-R-1 A real gift **once a month**, budget **500 THB**, included in the fee. `[owner 16:19; monthly Atom-decided]`
- R-R-2 The AI prepares a list; the parent chooses in LIFF. `[owner]`
- R-R-3 Goal reached → big gift · **nearly reached (≥ 70 % of the goal)** → small gift (≤ 40 % of that round's budget) · below → no gift. `[owner; threshold Atom-decided]`
- R-R-4 Unused budget carries over to the next round. `[owner]`
- R-R-5 The system produces the order list; **the owner's team buys and ships by hand**. V1 software does not buy or ship. Shipping is a separate cost to us. `[Atom-decided 19:57]`

## 10. Privacy — keep only what is needed

| Data | Where processed | Stored | How long |
|---|---|---|---|
| Camera frames | home device only | never | — |
| Face / gesture templates | computed on the device | encrypted on the main server + temp cache on device | until deleted, or 30 days after the subscription ends |
| Voice audio | speech-to-text service during conversation | never by us | — |
| Transcripts | server | encrypted | 30 days |
| Names (child nickname, AI name, friend nicknames) | server | yes | while subscribed |
| Memory (episode summaries, facts, goals) | server | yes | 30 days after the subscription ends |

- R-P-1 Explicit parental consent in LIFF before any face is registered. `[Atom-decided]`
- R-P-2 Retention numbers above. `[Atom-decided]`
- R-P-3 **A PDPA legal check (children under 10, biometric data) before the first real family.** `[needs owner]`

## 11. Buddy's memory

- R-M-1 The memory is designed so it can move to a robot or doll in future. It belongs to the Buddy, not to the TV. `[owner]`
- R-M-2 Contents: profile (AI name, child's nickname, interests), family/life facts with date and source, one summary per session (no transcripts, no media), Friends, goal progress.

## 12. Starter goal-topic catalogue (draft — synthetic examples, owner may edit)

| Area | Example topics |
|---|---|
| Body | move 20 min a day · balance and coordination · stretching before bed |
| Brain | counting and numbers · shapes and colours · memory games · Thai alphabet sounds |
| Feelings & social | naming feelings · taking turns · saying thank you · talking about the day |
| Thinking | "what if" questions · sorting and grouping · cause and effect · simple planning |
| Daily habits | brushing teeth routine · tidying toys · drinking water · less phone time |
| Family story | new sibling coming · moving house · first day of school · grandparent visit |

## 13. User-facing wording (Thai, exact)

| Where | Text |
|---|---|
| TV — name-call confirmation | เรียกฉันรึเปล่า |
| TV — invitation | มาเล่นด้วยกันไหม วันนี้เรามี {activity} นะ |
| TV — off-task | ตอนนี้ทำอะไรอยู่จ๊ะ |
| TV — going to sleep | งั้นพักก่อนนะ เรียกฉันได้ทุกเมื่อเลย |
| LINE — overtime request | น้อง{nickname} เล่นครบเวลาของวันนี้แล้วครับ ต้องการให้เล่นต่อไหม · ปุ่ม: อนุมัติ / ไม่อนุมัติ |
| LINE — borrowed | ไม่ได้รับคำตอบใน 3 ชั่วโมง ระบบยืมเวลาจากวันอาทิตย์ {minutes} นาทีแล้วครับ ซื้อคืนได้ที่เมนูโควต้า |
| LIFF — quota | เหลือเวลาสัปดาห์นี้ {h} ชม. {m} นาที · วันนี้ใช้ไป {h} ชม. {m} นาที |
| LIFF — rename | เปลี่ยนชื่อ AI ครั้งละ 99 บาท |
| LIFF — friend consent | ผู้ปกครองของเพื่อนตกลงให้ลงทะเบียนใบหน้าแล้ว (เก็บแค่ข้อมูลจำหน้า ไม่เก็บรูป) |
| TV — `{activity}` names (4) | ออกกำลังกาย · ออกกำลังสมอง · คุยกัน · ฝึกคิด |
| TV — first-use naming | อยากเรียกฉันว่าอะไรดี · ชื่อตัวอย่าง: ปุยฝ้าย · ดาว · โบ๊ะ |
| TV — face registration | มองกล้องนิ่งๆ แป๊บนึงนะ ฉันจะจำหน้าเธอไว้ |
| TV — gesture registration | มาตั้งท่าลับของเรากัน ทำท่าให้ดูหน่อย |
| TV — sleep screen | เรียกชื่อฉันได้เลยนะ |
| TV — quota zero | วันนี้เล่นครบเวลาแล้วนะ พรุ่งนี้มาเล่นกันใหม่นะ |
| LINE — overtime declined (TV) | วันนี้พอแค่นี้ก่อนนะ เก่งมากเลย |
| LIFF — Sunday allowance used up | เวลาที่ยืมได้ของสัปดาห์นี้หมดแล้ว ซื้อเวลาเพิ่มได้ ชั่วโมงละ 12.50 บาท |
(rows added 2026-10-28 20:10 by the PM, answering TEST-001 Q1)

## 14. Technical decisions already taken (for builders)

- Client: web app full-screen in Chromium on an Android TV box / mini-PC / laptop + USB camera. `[owner-approved 16:37]`
- Stack: **Next.js** (TV + LIFF) · **Bun + Hono** · **PostgreSQL + pgvector** · **Drizzle**. `[owner-approved 16:43]`
- Working branch: `main`. `[owner 17:04]`
- AI calls go through the owner's LLM gateway "AI Develyst" (text chat; providers openai / gemini / xai / deepseek). Speech-to-text and text-to-speech are separate services. `[owner]`
- Future: at scale, a local GPU (RTX Pro 6000 Blackwell) runs the AI — keep the provider swappable. `[owner]`

## 15. Still open — needs the owner

- Which AI provider, Thai speech services, and Kimi (needs paid API probes — **not approved**).
- Payment gateway (contract, fees).
- Creating the LINE Official Account + LIFF channels (owner's account).
- Renting the server (500–750 THB/month first).
- PDPA legal check.

## 16. Out of scope for V1

- Buying and shipping gifts (manual operations).
- Smart TVs without a separate box.
- Any camera image leaving the home.
- A parent app outside LINE.
- Robot / doll bodies (only the memory is designed for them).
