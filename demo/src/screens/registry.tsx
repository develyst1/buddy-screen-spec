import type { ComponentType } from 'react'
import type { StrKey } from '../strings'
import LineBorrowed from './parent/LineBorrowed'
import LineOvertimeRequest from './parent/LineOvertimeRequest'
import LiffConsent from './parent/LiffConsent'
import LiffFriendConsent from './parent/LiffFriendConsent'
import LiffGiftChoice from './parent/LiffGiftChoice'
import LiffGoals from './parent/LiffGoals'
import LiffQuotaSettings from './parent/LiffQuotaSettings'
import LiffRename from './parent/LiffRename'
import LiffReportChoice from './parent/LiffReportChoice'
import LiffSessionTimeline from './parent/LiffSessionTimeline'
import ActivityInProgress from './tv/ActivityInProgress'
import FaceGestureRegistration from './tv/FaceGestureRegistration'
import FirstNaming from './tv/FirstNaming'
import GoingToSleep from './tv/GoingToSleep'
import Invitation from './tv/Invitation'
import NameCall from './tv/NameCall'
import OffTask from './tv/OffTask'
import OvertimeDeclined from './tv/OvertimeDeclined'
import QuotaZero from './tv/QuotaZero'
import Sleep from './tv/Sleep'

export interface ScreenEntry {
  group: 'tv' | 'parent'
  id: string // hash is #/<group>/<id>
  title: StrKey
  Component: ComponentType
}

export const screens: ScreenEntry[] = [
  { group: 'tv', id: 'first-naming', title: 'screenFirstNaming', Component: FirstNaming },
  { group: 'tv', id: 'face-gesture-registration', title: 'screenFaceReg', Component: FaceGestureRegistration },
  { group: 'tv', id: 'sleep', title: 'screenSleep', Component: Sleep },
  { group: 'tv', id: 'name-call', title: 'screenNameCall', Component: NameCall },
  { group: 'tv', id: 'invitation', title: 'screenInvitation', Component: Invitation },
  { group: 'tv', id: 'activity-in-progress', title: 'screenActivity', Component: ActivityInProgress },
  { group: 'tv', id: 'off-task', title: 'screenOffTask', Component: OffTask },
  { group: 'tv', id: 'going-to-sleep', title: 'screenGoingToSleep', Component: GoingToSleep },
  { group: 'tv', id: 'quota-zero', title: 'screenQuotaZero', Component: QuotaZero },
  { group: 'tv', id: 'overtime-declined', title: 'screenOvertimeDeclined', Component: OvertimeDeclined },
  { group: 'parent', id: 'line-overtime-request', title: 'screenLineOvertime', Component: LineOvertimeRequest },
  { group: 'parent', id: 'line-borrowed', title: 'screenLineBorrowed', Component: LineBorrowed },
  { group: 'parent', id: 'liff-consent', title: 'screenLiffConsent', Component: LiffConsent },
  { group: 'parent', id: 'liff-quota-settings', title: 'screenLiffQuota', Component: LiffQuotaSettings },
  { group: 'parent', id: 'liff-session-timeline', title: 'screenLiffTimeline', Component: LiffSessionTimeline },
  { group: 'parent', id: 'liff-goals', title: 'screenLiffGoals', Component: LiffGoals },
  { group: 'parent', id: 'liff-report-choice', title: 'screenLiffReport', Component: LiffReportChoice },
  { group: 'parent', id: 'liff-gift-choice', title: 'screenLiffGift', Component: LiffGiftChoice },
  { group: 'parent', id: 'liff-rename', title: 'screenLiffRename', Component: LiffRename },
  { group: 'parent', id: 'liff-friend-consent', title: 'screenLiffFriend', Component: LiffFriendConsent },
]
