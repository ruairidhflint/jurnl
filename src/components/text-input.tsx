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
    const el = textAreaRef.current
    if (!el || settingsModal || helpModal || firstVisit) return
    el.focus()
    el.setSelectionRange(el.value.length, el.value.length)
    el.scrollTop = el.scrollHeight
  }, [settingsModal, helpModal, fullScreenState, firstVisit])

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
