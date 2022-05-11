import { useState } from 'react';

import useLocalStorage from './hooks/useLocalStorge';
import TextInput from './components/text-input';
import Settings from './components/settings';
import './App.css';

function App() {
  const [settings, setSettings] = useLocalStorage('settings', { theme: 'light', font: 'serif', spellcheck: false });
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Settings settings={settings} setSettings={setSettings} visible={visible} setVisible={setVisible} />
      <TextInput settings={settings} modal={visible} />
    </div>
  );
}

export default App;
