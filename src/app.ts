function displayListPrefix(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = prefixes

  message.push(...displayAllPrefixAsString(tempPrefixes))
  tempPrefixes.splice(tempPrefixes.length - 2, 1)
  message.push(displayPrefixAsString(tempPrefixes))

  return message
}

function displayAllPrefixAsString(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = []

  prefixes.map((value: string) => {
    tempPrefixes.push(value)
    message.push(displayPrefixAsString(tempPrefixes))
  })

  return message
}

function displayPrefixAsString(prefixes: string[]): string {
  let message: string = ""
  prefixes.map((value: string) => message += value)

  return message
}

function displayFirstPrefix(prefixes: string[]): string {
  return prefixes[0]
}

export { displayAllPrefixAsString, displayPrefixAsString, displayFirstPrefix, displayListPrefix }