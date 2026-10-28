// All visible text lives here. source '§13' = verbatim from requirement §13; 'pm' = PM-approved wording (2026-10-28 20:40); 'draft' = still needs PM review (shown with ร่าง badge).
export interface Str { th: string; source: '§13' | 'pm' | 'draft' }
const s13 = (th: string): Str => ({ th, source: '§13' })
const pm = (th: string): Str => ({ th, source: 'pm' })
export const draft = (th: string): Str => ({ th, source: 'draft' }) // kept so a future draft still gets its badge; unused now

export const strings = {
  // ---- §13 verbatim ----
  nameCallConfirm: s13('เรียกฉันรึเปล่า'),
  invitation: s13('มาเล่นด้วยกันไหม วันนี้เรามี {activity} นะ'),
  offTask: s13('ตอนนี้ทำอะไรอยู่จ๊ะ'),
  goingToSleep: s13('งั้นพักก่อนนะ เรียกฉันได้ทุกเมื่อเลย'),
  overtimeRequest: s13('น้อง{nickname} เล่นครบเวลาของวันนี้แล้วครับ ต้องการให้เล่นต่อไหม'),
  overtimeApprove: s13('อนุมัติ'),
  overtimeDecline: s13('ไม่อนุมัติ'),
  borrowed: s13('ไม่ได้รับคำตอบใน 3 ชั่วโมง ระบบยืมเวลาจากวันอาทิตย์ {minutes} นาทีแล้วครับ ซื้อคืนได้ที่เมนูโควต้า'),
  quota: s13('เหลือเวลาสัปดาห์นี้ {h} ชม. {m} นาที · วันนี้ใช้ไป {h} ชม. {m} นาที'),
  rename: s13('เปลี่ยนชื่อ AI ครั้งละ 99 บาท'),
  friendConsent: s13('ผู้ปกครองของเพื่อนตกลงให้ลงทะเบียนใบหน้าแล้ว (เก็บแค่ข้อมูลจำหน้า ไม่เก็บรูป)'),
  activityExercise: s13('ออกกำลังกาย'),
  activityBrain: s13('ออกกำลังสมอง'),
  activityTalk: s13('คุยกัน'),
  activityThink: s13('ฝึกคิด'),
  firstNaming: s13('อยากเรียกฉันว่าอะไรดี'),
  firstNamingExamples: s13('ชื่อตัวอย่าง: ปุยฝ้าย · ดาว · โบ๊ะ'),
  faceRegistration: s13('มองกล้องนิ่งๆ แป๊บนึงนะ ฉันจะจำหน้าเธอไว้'),
  gestureRegistration: s13('มาตั้งท่าลับของเรากัน ทำท่าให้ดูหน่อย'),
  sleepScreen: s13('เรียกชื่อฉันได้เลยนะ'),
  quotaZero: s13('วันนี้เล่นครบเวลาแล้วนะ พรุ่งนี้มาเล่นกันใหม่นะ'),
  overtimeDeclinedTv: s13('วันนี้พอแค่นี้ก่อนนะ เก่งมากเลย'),
  sundayUsedUp: s13('เวลาที่ยืมได้ของสัปดาห์นี้หมดแล้ว ซื้อเวลาเพิ่มได้ ชั่วโมงละ 12.50 บาท'),

  // ---- PM-approved: titles, labels, controls ----
  indexTitle: pm('หน้าจอทั้งหมดของเดโม'),
  groupTv: pm('หน้าจอทีวี'),
  groupParent: pm('หน้าจอผู้ปกครอง (LINE / LIFF)'),
  backToIndex: pm('กลับไปหน้ารวม'),
  mockNotice: pm('เดโมจำลอง ข้อมูลสมมติทั้งหมด ไม่เปิดกล้องจริงและไม่ต่ออินเทอร์เน็ต'),
  screenFirstNaming: pm('ตั้งชื่อครั้งแรก'),
  screenFaceReg: pm('ลงทะเบียนใบหน้า'),
  screenGestureReg: pm('ลงทะเบียนท่าลับ'),
  screenSleep: pm('หน้าจอพัก'),
  screenNameCall: pm('เรียกชื่อ AI'),
  screenInvitation: pm('ชวนเล่น'),
  screenActivity: pm('กำลังทำกิจกรรม'),
  screenOffTask: pm('ถามเมื่อออกนอกกิจกรรม'),
  screenGoingToSleep: pm('กำลังจะพัก'),
  screenQuotaZero: pm('โควต้าหมด'),
  cameraPlaceholder: pm('(กรอบจำลอง ไม่เปิดกล้องจริง)'),
  confirmName: pm('ใช้ชื่อนี้'),
  invitationAccept: pm('เล่นเลย'),
  stateActive: pm('กำลังเล่น'),
  stateIdlePresent: pm('เงียบ แต่ยังอยู่หน้ากล้อง'),
  stateIdleAbsent: pm('ไม่อยู่หน้ากล้อง'),
  stateSleep: pm('พัก'),
  counted: pm('เวลาที่นับ'),
  simPanel: pm('แผงจำลอง'),
  simInFrame: pm('น้องอยู่หน้ากล้อง'),
  simResponding: pm('น้องกำลังตอบสนอง'),
  simEnd: pm('จบกิจกรรม'),
  simRestart: pm('เริ่มใหม่'),
  nextScreen: pm('ถัดไป'),

  // ---- PM-approved: parent screens ----
  screenLineOvertime: pm('LINE: ขอเล่นเกินเวลา'),
  screenLineBorrowed: pm('LINE: ยืมเวลาวันอาทิตย์'),
  screenLiffConsent: pm('LIFF: ยินยอมลงทะเบียนใบหน้า'),
  screenLiffQuota: pm('LIFF: โควต้าและการตั้งค่า'),
  screenLiffTimeline: pm('LIFF: ไทม์ไลน์การเล่น'),
  screenLiffGoals: pm('LIFF: เป้าหมาย'),
  screenLiffReport: pm('LIFF: เลือกรายงาน'),
  screenLiffGift: pm('LIFF: เลือกของขวัญ'),
  screenLiffRename: pm('LIFF: เปลี่ยนชื่อ AI'),
  screenLiffFriend: pm('LIFF: ยินยอมของเพื่อน'),
  barLine: pm('แชท LINE'),
  barLiff: pm('หน้าใน LINE'),
  approvedResult: pm('อนุมัติแล้ว น้องเล่นต่อได้ ค่าเวลาเพิ่มชั่วโมงละ 12.50 บาท คิดตามนาทีที่เล่นจริง'),
  declinedResult: pm('ไม่อนุมัติ วันนี้น้องจะหยุดเล่นแล้ว'),
  consentBody: pm('ฉันยินยอมให้ลงทะเบียนใบหน้าของลูก ระบบเก็บแค่ข้อมูลจำหน้า ไม่เก็บรูป และลบให้ 30 วันหลังเลิกใช้บริการ'),
  consentYes: pm('ยินยอม'),
  consentNo: pm('ไม่ยินยอม'),
  consentDone: pm('บันทึกความยินยอมแล้ว'),
  dailyLimit: pm('เวลาเล่นต่อวัน'),
  dailyLimitValue: pm('5 ชม. 43 นาที (ค่าเริ่มต้น)'),
  overtimeSetting: pm('อนุญาตเล่นเกินเวลา'),
  showSundayUsedUp: pm('ดูกรณีวันอาทิตย์ใช้หมด'),
  buyExtension: pm('ซื้อเวลาเพิ่ม'),
  timelineIntro: pm('ช่วงเวลาที่ระบบบันทึก'),
  timelineActive: pm('กำลังเล่น'),
  timelineIdlePresent: pm('เงียบ แต่ยังอยู่หน้ากล้อง'),
  timelineIdleAbsent: pm('ไม่อยู่หน้ากล้อง (ไม่นับเวลา)'),
  timelineSleep: pm('พัก'),
  dispute: pm('ขอให้ตรวจสอบช่วงนี้'),
  disputeSent: pm('ส่งให้ทีมตรวจสอบแล้ว'),
  goalsIntro: pm('เลือกหัวข้อเป้าหมาย'),
  reportIntro: pm('รับรายงานแบบไหน'),
  reportDaily: pm('รายวัน'),
  reportWeekly: pm('รายสัปดาห์'),
  giftIntro: pm('เลือกของขวัญของรอบนี้'),
  giftBig: pm('ของขวัญใหญ่ (ถึงเป้าหมาย)'),
  giftSmall: pm('ของขวัญเล็ก (ทำได้ 70% ของเป้าขึ้นไป) ไม่เกิน 40% ของงบรอบนี้'),
  giftNone: pm('รอบนี้ยังไม่มีของขวัญ (ต่ำกว่า 70% ของเป้า) งบยกไปรอบหน้า'),
  giftBudget: pm('งบรอบนี้ 500 บาท'),
  giftCarry: pm('ยอดยกมา 120 บาท'),
  renameConfirm: pm('ยืนยันและชำระ 99 บาท'),
  friendListTitle: pm('เพื่อนที่ลงทะเบียนไว้'),
  friendDelete: pm('ลบ'),
  friendDeleted: pm('ลบเพื่อนแล้ว'),
  save: pm('บันทึก'),

  // ---- PM-approved: TASK-005 additions ----
  screenOvertimeDeclined: pm('ทีวี: หลังผู้ปกครองไม่อนุมัติ'),
  linkToTv: pm('ดูหน้าจอทีวี'),
  linkToQuota: pm('ไปที่เมนูโควต้า'),
  buyBackTitle: pm('ซื้อเวลาที่ยืมคืน'),
  buyBackInfo: pm('ยืมเวลาวันอาทิตย์ไป {minutes} นาที · ชั่วโมงละ 12.50 บาท คิดตามนาทีจริง'),
  buyBackAmount: pm('ยอดที่ต้องชำระ {amount} บาท'),
  buyBackButton: pm('ซื้อคืน'),
  buyBackDone: pm('ซื้อคืนแล้ว เวลาวันอาทิตย์กลับมาครบ'),
} satisfies Record<string, Str>

// Starter goal-topic catalogue (requirement §12) — Thai wording PM-approved.
export const goalTopics: Array<{ area: Str; topics: Str[] }> = [
  { area: pm('ร่างกาย'), topics: ['ขยับตัววันละ 20 นาที', 'การทรงตัวและการประสานงาน', 'ยืดเส้นก่อนนอน'].map(pm) },
  { area: pm('สมอง'), topics: ['นับเลข', 'รูปทรงและสี', 'เกมฝึกความจำ', 'เสียงพยัญชนะไทย'].map(pm) },
  { area: pm('ความรู้สึกและสังคม'), topics: ['บอกชื่อความรู้สึก', 'รู้จักผลัดกัน', 'พูดขอบคุณ', 'เล่าเรื่องของวัน'].map(pm) },
  { area: pm('การคิด'), topics: ['ถ้าเป็นอย่างนี้จะเกิดอะไรขึ้น', 'จัดกลุ่มสิ่งของ', 'เหตุและผล', 'วางแผนง่ายๆ'].map(pm) },
  { area: pm('นิสัยประจำวัน'), topics: ['แปรงฟัน', 'เก็บของเล่น', 'ดื่มน้ำ', 'ใช้โทรศัพท์น้อยลง'].map(pm) },
  { area: pm('เรื่องราวของครอบครัว'), topics: ['จะมีน้องใหม่', 'ย้ายบ้าน', 'วันแรกของโรงเรียน', 'ปู่ย่าตายายมาเยี่ยม'].map(pm) },
]

export type StrKey = keyof typeof strings

// Fills {placeholders}. A value may be an array: each occurrence of the same placeholder takes the next value.
export function fill(text: string, vars: Record<string, string | number | Array<string | number>>): string {
  const cursor: Record<string, number> = {}
  return text.replace(/\{(\w+)\}/g, (whole, key: string) => {
    const v = vars[key]
    if (v === undefined) return whole
    if (!Array.isArray(v)) return String(v)
    const i = cursor[key] ?? 0
    cursor[key] = i + 1
    return String(v[i] ?? whole)
  })
}
