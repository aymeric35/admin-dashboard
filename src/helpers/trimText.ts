export default function trimText(length: number, text: string): string {
  const lastSpace = text.lastIndexOf(' ')
  const lastSpaceInLength = text.lastIndexOf(' ', length)
  const isTrimmingLastWord = (lastSpace === lastSpaceInLength)

  return isTrimmingLastWord ? text : `${text.slice(0, lastSpaceInLength)}...`
}
