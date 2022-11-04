import trimText from './trimText'

const { width } = useWindowSize()
const isMobile = (maxWidth: number) => width.value <= maxWidth

export default function normalizeText(length: number, DesktopAdditionalLength: number, prop: string, mobileMaxWidth: number) {
  length = isMobile(mobileMaxWidth) ? length : length + DesktopAdditionalLength
  return computed(() => trimText(length, prop))
}
