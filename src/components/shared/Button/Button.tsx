import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
  as?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  type,
  href,
  target,
  rel,
  as,
}) => {
  return (
    <div>
      {href ? (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={`no-underline px-4 py-2 bg-[#020044] text-white  hover:bg-[#020044] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#020044] ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`px-4 py-2 bg-[#020044] text-white  hover:bg-[#020044] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#020044] ${className}`}
          disabled={disabled}
          type={type}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
