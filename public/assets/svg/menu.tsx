interface MenuIconProps {
  className?: string;
  ariaLabel?: string;
  onClick?: () => void; // Optional: for interactivity
}

export const MenuIcon: React.FC<MenuIconProps> = ({
  className,
  ariaLabel,
  onClick,
}) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
      role="img"
      onClick={onClick} // Optional: for interactivity
    >
      <path
        d="M4 9.33331H28"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4 16H28"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4 22.6667H28"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};
