import { useEffect, useRef } from 'react';

const TextInput = ({ modal, settings }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (!modal) textAreaRef.current.focus();
  }, [modal]);
  return (
    <textarea
      ref={textAreaRef}
      autoFocus
      spellCheck={settings.spellcheck}
      style={{ fontFamily: settings.font === 'serif' ? 'Merriweather' : 'Montserrat' }}
      defaultValue="hello world!"
    />
  );
};

export default TextInput;
