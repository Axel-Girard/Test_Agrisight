/**
 * Return an array of strings with all combinations of the prefixes
 * @param prefixes Array of strings that contains letter to be displayed
 * @returns 
 */
function formatPrefixesList(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = []

  tempPrefixes.push(...prefixes);

  for (let i = 0; i < prefixes.length; i++) {
    message.push(...extendPrefixes(tempPrefixes))
    message.push(...reducePrefixes(tempPrefixes[0], tempPrefixes.toSpliced(0, 2)))
    tempPrefixes.shift()
  }

  return message
}

/**
 * Return an array of strings with a prefix and losing the second letter
 * @param prefix first letter of each word that never change
 * @param suffixes word losing it's first letter every loop
 * @returns 
 */
function reducePrefixes(prefix: string, suffixes: string[]): string[] {
  const message: string[] = []

  for (let i = suffixes.length - 1; i >= 0; i--) {
    message.push(prefix + suffixes.join(''))
    suffixes.shift()
  }

  return message
}

/**
 * Return an array of strings that get a letter from the prefix on every loop
 * @param prefixes letter creating a word
 * @returns 
 */
function extendPrefixes(prefixes: string[]): string[] {
  const message: string[] = []
  let tempPrefixes: string[] = []

  prefixes.map((value: string) => {
    tempPrefixes.push(value)
    message.push(tempPrefixes.join(''))
  })

  return message
}

export { extendPrefixes, reducePrefixes, formatPrefixesList }