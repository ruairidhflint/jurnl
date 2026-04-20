import { useEffect, useRef } from 'react'
import type { Settings } from '../types'

interface TextInputProps {
  settingsModal: boolean
  helpModal: boolean
  settings: Settings
  text: string
  setText: (x: string) => void
  fullScreenState: boolean
  firstVisit: boolean
}

const TextInput = ({
  settingsModal,
  helpModal,
  settings,
  text,
  setText,
  fullScreenState,
  firstVisit,
}: TextInputProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (
      textAreaRef &&
      textAreaRef.current &&
      !settingsModal &&
      !helpModal &&
      !firstVisit
    ) {
      textAreaRef.current.focus()
      textAreaRef.current.setSelectionRange(text.length, text.length)
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight
    }
  }, [settingsModal, helpModal, fullScreenState])

  return (
    <div className="text-container">
      <div className="fade" />
      <textarea
        ref={textAreaRef}
        spellCheck={settings.spellcheck}
        style={{
          fontFamily: settings.font === 'serif' ? 'Merriweather' : 'Open Sans',
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default TextInput
