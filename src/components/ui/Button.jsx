// src/components/ui/Button.jsx
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`ui-button ${variant} ${className}`}
    >
      {children}
    </button>
  );
}
