import { useEffect, useRef } from 'react'

interface TextInputProps {
  settingsModal: boolean
  helpModal: boolean
  settings: any
  text: string
  setText: (x: string) => void
  fullScreenState: any
}

const TextInput = ({
  settingsModal,
  helpModal,
  settings,
  text,
  setText,
  fullScreenState,
}: TextInputProps): JSX.Element => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const persistText = () => {
    if (textAreaRef && textAreaRef.current) setText(textAreaRef.current.value)
  }

  useEffect(() => {
    if (textAreaRef && textAreaRef.current && !settingsModal && !helpModal) {
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
