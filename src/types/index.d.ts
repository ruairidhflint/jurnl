export type Settings = {
  darkmode: boolean
  font: 'serif' | 'sans-serif'
  spellcheck: boolean
}

export type SetSettings = (s: Settings) => void
