import { useEffect, useRef } from 'react'

const TextInput = ({ settingsModal, helpModal, settings, text, setText }) => {
  const textAreaRef = useRef(null)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setText(textAreaRef.current.value)
    }, 2000)
    textAreaRef.current.focus()
    return () => clearInterval(intervalID)
  }, [])

  useEffect(() => {
    if (!settingsModal || !helpModal) {
      textAreaRef.current.focus()
      textAreaRef.current.setSelectionRange(text.length, text.length)
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight
    }
  }, [settingsModal, helpModal])

  return (
    <div className="text-container">
      <div className="fade" />
      <textarea
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
