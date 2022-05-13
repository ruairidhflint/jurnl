import { useState } from 'react'

import useLocalStorage from './hooks/useLocalStorage'
import TextInput from './components/text-input'
import Settings from './components/settings'
import Help from './components/help'
import downloadFile from './utilities/download'
import './App.css'

function App() {
  const [settings, setSettings] = useLocalStorage('settings', {
    darkmode: false,
    font: 'serif',
    spellcheck: false,
  })
  const [text, setText] = useLocalStorage('text', '\n\n')
  const [showHelp, setShowHelp] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const save = () => downloadFile(text)

  return (
    <div className="App" data-theme={settings.darkmode && 'dark'}>
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
        modal={showSettings}
      />
    </div>
  )
}

export default App
