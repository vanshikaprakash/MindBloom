export default function GlowButton({ children, className = '', ...props }) {
  return (
    <button type="button" className={`glow-button ${className}`} {...props}>
      {children}
    </button>
  )
}
