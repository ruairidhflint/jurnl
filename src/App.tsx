import { useEffect, useState, useCallback } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

import useLocalStorage from './hooks/useLocalStorage'
import TextInput from './components/text-input'
import Settings from './components/settings'
import Help from './components/help'
import FullScreenButton from './components/full-screen'
import downloadFile from './utilities/download'
import type { Settings as SettingsType } from './types'
import './App.css'

const BLANK_TEXT = '\n\n'

function App() {
  const handle = useFullScreenHandle()
  const [settings, setSettings] = useLocalStorage<SettingsType>('settings', {
    darkmode: false,
    font: 'serif',
    spellcheck: false,
  })
  const [storedText, setText] = useLocalStorage<string>('text', BLANK_TEXT)
  const text = storedText.length ? storedText : BLANK_TEXT
  const [firstVisit, setFirstVisit] = useLocalStorage<boolean>(
    'firstVisit',
    true,
  )
  const [showHelp, setShowHelp] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const closeModalWithEscapeKey = useCallback((event: { key: string }) => {
    if (event.key === 'Escape') {
      setShowHelp(false)
      setShowSettings(false)
    }
  }, [])

  const save = (): void => downloadFile(text)

  useEffect(() => {
    if (firstVisit) {
      setShowHelp(true)
      setFirstVisit(false)
    }
    // Mount-only: we want the firstVisit value at mount, not to re-run when
    // setFirstVisit flips it below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', closeModalWithEscapeKey, false)
    return () =>
      document.removeEventListener('keydown', closeModalWithEscapeKey, false)
  }, [closeModalWithEscapeKey])

  return (
    <FullScreen handle={handle}>
      <div className="App" data-theme={settings.darkmode && 'dark'}>
        <FullScreenButton
          active={handle.active}
          enter={handle.enter}
          exit={handle.exit}
        />
        <Help visible={showHelp} setVisible={setShowHelp} />
        <Settings
          settings={settings}
          setSettings={setSettings}
          visible={showSettings}
          setVisible={setShowSettings}
          download={save}
        />
        <TextInput
          text={text}
          setText={setText}
          settings={settings}
          settingsModal={showSettings}
          helpModal={showHelp}
          fullScreenState={handle.active}
          firstVisit={firstVisit}
        />
      </div>
    </FullScreen>
  )
}

export default App
