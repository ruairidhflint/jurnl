import { useState } from 'react'

import useLocalStorage from './hooks/useLocalStorage'
import TextInput from './components/text-input'
import Settings from './components/settings'
import './App.css'

function App() {
  const [settings, setSettings] = useLocalStorage('settings', {
    darkmode: false,
    font: 'serif',
    spellcheck: false,
  })
  const [text, setText] = useLocalStorage('text', '')
  const [visible, setVisible] = useState(false)
  return (
    <div className="App" data-theme={settings.darkmode && 'dark'}>
      <Settings
        settings={settings}
        setSettings={setSettings}
        visible={visible}
        setVisible={setVisible}
      />
      <TextInput
        text={text}
        setText={setText}
        settings={settings}
        modal={visible}
      />
    </div>
  )
}

export default App
