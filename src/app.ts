function displayPrefix(prefixes: string[]): string {
  let message: string = ""
  prefixes.map((value: string) => message += value)

  return message
}

function displayFirstPrefix(prefixes: string[]): string {
  return prefixes[0]
}

displayPrefix(['c', 'n'])

export { displayPrefix, displayFirstPrefix }