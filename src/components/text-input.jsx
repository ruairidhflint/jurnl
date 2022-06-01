import { useEffect, useRef } from 'react'

const TextInput = ({
  settingsModal,
  helpModal,
  settings,
  text,
  setText,
  fullScreenState,
}) => {
  const textAreaRef = useRef(null)

  const persistText = () => {
    setText(textAreaRef.current.value)
  }

  useEffect(() => {
    if (!settingsModal && !helpModal) {
      textAreaRef.current.focus()
      textAreaRef.current.setSelectionRange(text.length, text.length)
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight
    }
  }, [settingsModal, helpModal, fullScreenState])

  return (
    <div className="text-container">
      <div className="fade" />
      <textarea
        onKeyDown={persistText}
        ref={textAreaRef}
        spellCheck={settings.spellcheck}
        style={{
          fontFamily: settings.font === 'serif' ? 'Merriweather' : 'Open Sans',
        }}
        defaultValue={text}
      />
    </div>
  )
}

export default TextInput
