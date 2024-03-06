function displayPrefix(prefixes: string[]): string {
  let message: string = ""
  prefixes.map((value: string) => message += value)

  return message
}

function displayFirstPrefix(prefixes: string[]): string {
  return prefixes[0]
}

console.log(displayPrefix(['c', 'n', 's']))

export { displayPrefix, displayFirstPrefix }