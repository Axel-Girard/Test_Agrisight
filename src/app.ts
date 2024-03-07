function displayListPrefix(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = []

  tempPrefixes.push(...prefixes);

  for (let i = 0; i < prefixes.length; i++) {
    message.push(...displayUpgradingPrefixAsString(tempPrefixes))
    message.push(...displayDowngradingPrefixAsString(tempPrefixes[0], tempPrefixes.toSpliced(0, 2)))
    tempPrefixes.shift()
  }

  return message
}

/**
 * Return an array of string with a prefix and losing the second letter
 * @param prefixe first letter of each word that never change
 * @param sufixes word losing it's first letter every loop
 * @returns 
 */
function displayDowngradingPrefixAsString(prefixe: string, sufixes: string[]): string[] {
  const message: string[] = []

  for (let i = sufixes.length - 1; i >= 0; i--) {
    message.push(prefixe + sufixes.join(''))
    sufixes.shift()
  }

  return message
}

/**
 * Return an array of string that get a letter from the prefix on every loop
 * @param prefixes letter creating a word
 * @returns 
 */
function displayUpgradingPrefixAsString(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = []

  prefixes.map((value: string) => {
    tempPrefixes.push(value)
    message.push(tempPrefixes.join(''))
  })

  return message
}

console.log(displayListPrefix(['c']))

export { displayUpgradingPrefixAsString, displayListPrefix }