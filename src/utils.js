export const storage = storage => {
  return {
    getItem: key => window[storage].getItem(key),
    setItem: (key, value) => window[storage].setItem(key, value)
  }
}

export function getMediaQueryList (type) {
  return window.matchMedia(`(prefers-color-scheme: ${type})`)
}
