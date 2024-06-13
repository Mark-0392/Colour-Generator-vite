import { toast } from 'react-toastify'
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color
  const copyClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('color copied to clipboard')
      } catch (error) {
        toast.error('failed to copy the color to clipboard')
      }
    } else {
      toast.error('clipboard access is not available')
    }
  }
  return (
    <article
      className={index > 6 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={copyClipboard}
    >
      <p className="color-value">#{hex}</p>
      <p className="percent-value">{weight}%</p>
    </article>
  )
}
export default SingleColor
