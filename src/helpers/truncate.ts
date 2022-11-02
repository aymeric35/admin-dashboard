export default function truncate(length: number, text: string): string {
  const lastSpace = text.lastIndexOf(' ')
  const lastSpaceInLength = text.lastIndexOf(' ', length)
  const isTruncatingLastWord = (lastSpace === lastSpaceInLength)

  return isTruncatingLastWord ? text : `${text.slice(0, lastSpaceInLength)}...`
}
