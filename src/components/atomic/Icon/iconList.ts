import { BsDiscord, BsGlobe, BsQuestionCircle, BsTwitter } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'

const Icons = {
  checkmark: FiCheck,
  discord: BsDiscord,
  question: BsQuestionCircle,
  loader: VscLoading,
  twitter: BsTwitter,
  website: BsGlobe,
} as const

export default Icons
