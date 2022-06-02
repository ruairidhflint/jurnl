import { FiHelpCircle } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Help = ({
  visible,
  setVisible,
}: {
  visible: boolean
  setVisible: (a: boolean) => void
}): JSX.Element => (
  <>
    <button
      type="button"
      onClick={() => setVisible(true)}
      className="help-toggle"
      style={{ display: visible ? 'none' : 'inline-block' }}
    >
      <FiHelpCircle />
    </button>
    <div className={`help-container ${visible && 'visible-modal'}`}>
      <div className="help-modal">
        <div className="help-title">
          <h1>JURNL</h1>
          <button type="button" onClick={() => setVisible(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="help-options">
          <p>
            JURNL is tool designed to avoid distraction and encourage stream of
            conciousness writing.
          </p>
          <p>
            The settings icon (top right) will allow you to alter the colour
            theme, font style and spell check - as well as the ability to export
            the document.
          </p>
          <p>Your document is automatically saved locally.</p>
          <p>
            Built and maintained by{' '}
            <a href="https://rory.codes" target="_blank" rel="noreferrer">
              Rory Flint
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Help
