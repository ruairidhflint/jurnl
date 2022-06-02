import { FiSettings } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

interface SettingsProps {
  settings: {
    darkmode: boolean
    font: 'serif' | 'sans-serif'
    spellcheck: boolean
  }
  setSettings: (x: any) => void
  visible: boolean
  setVisible: (x: boolean) => void
  download: () => void
}

const Settings = ({
  settings,
  setSettings,
  visible,
  setVisible,
  download,
}: SettingsProps) => (
  <>
    <button
      type="button"
      onClick={() => setVisible(true)}
      className="settings-toggle"
      style={{ display: visible ? 'none' : 'inline-block' }}
    >
      <FiSettings />
    </button>
    <div className={`settings-container ${visible && 'visible-modal'}`}>
      <div className="settings-modal">
        <div className="settings-title">
          <h1>Settings</h1>
          <button type="button" onClick={() => setVisible(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="settings-options">
          <div className="option-group">
            <label>Choose your preferred colour theme.</label>
            <div className="buttons">
              <button
                type="button"
                onClick={() => setSettings({ ...settings, darkmode: false })}
                className={`option-button ${
                  !settings.darkmode && 'option-button-selected'
                }`}
              >
                Light Theme
              </button>
              <button
                type="button"
                onClick={() => setSettings({ ...settings, darkmode: true })}
                className={`option-button ${
                  settings.darkmode && 'option-button-selected'
                }`}
              >
                Dark Theme
              </button>
            </div>
          </div>
          <div className="option-group">
            <label>Choose your preferred font style.</label>
            <div className="buttons">
              <button
                type="button"
                onClick={() => setSettings({ ...settings, font: 'serif' })}
                className={`option-button ${
                  settings.font === 'serif' && 'option-button-selected'
                }`}
              >
                Serif
              </button>
              <button
                type="button"
                onClick={() => setSettings({ ...settings, font: 'sans-serif' })}
                className={`option-button ${
                  settings.font === 'sans-serif' && 'option-button-selected'
                }`}
              >
                Sans-Serif
              </button>
            </div>
          </div>
          <div className="option-group">
            <label>Choose your spell check preferrence.</label>
            <div className="buttons">
              <button
                type="button"
                onClick={() => setSettings({ ...settings, spellcheck: true })}
                className={`option-button ${
                  settings.spellcheck && 'option-button-selected'
                }`}
              >
                Enable Spell Check
              </button>
              <button
                type="button"
                onClick={() => setSettings({ ...settings, spellcheck: false })}
                className={`option-button ${
                  !settings.spellcheck && 'option-button-selected'
                }`}
              >
                Disable Spell Check
              </button>
            </div>
          </div>
        </div>
        <div className="settings-buttons">
          <div className="option-group">
            <div className="buttons">
              <button
                type="button"
                onClick={download}
                className="option-button export"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Settings
