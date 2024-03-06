function displayAllPrefix(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = []

  prefixes.map((value: string) => {
    tempPrefixes.push(value)
    message.push(displayPrefix(tempPrefixes))
  })

  return message
}

function displayPrefix(prefixes: string[]): string {
  let message: string = ""
  prefixes.map((value: string) => message += value)

  return message
}

function displayFirstPrefix(prefixes: string[]): string {
  return prefixes[0]
}

console.log(displayAllPrefix(['c', 'n', 's']))

export { displayAllPrefix, displayPrefix, displayFirstPrefix }