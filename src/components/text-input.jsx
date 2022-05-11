import { useEffect, useRef } from 'react';

const TextInput = ({ modal, settings, text, setText }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setText(textAreaRef.current.value);
    }, 3000);
    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    if (!modal) textAreaRef.current.focus();
  }, [modal]);
  return (
    <textarea
      ref={textAreaRef}
      autoFocus
      spellCheck={settings.spellcheck}
      style={{ fontFamily: settings.font === 'serif' ? 'Merriweather' : 'Open Sans' }}
      defaultValue={text}
    />
  );
};

export default TextInput;
