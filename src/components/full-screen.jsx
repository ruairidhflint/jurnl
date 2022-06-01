import { AiOutlineFullscreenExit, AiOutlineFullscreen } from 'react-icons/ai'

const FullScreenButton = ({ active, enter, exit }) => {
  if (active) {
    return (
      <button type="button" onClick={exit} className="fullscreen-toggle">
        <AiOutlineFullscreenExit />
      </button>
    )
  }
  return (
    <button type="button" onClick={enter} className="fullscreen-toggle">
      <AiOutlineFullscreen />
    </button>
  )
}

export default FullScreenButton
