import React from "react";
import "./Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  iconAlt?: string;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "outline" | "BUTTON"; // 👈 new
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconAlt = "icon",
  iconPosition = "right",
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`btn-2 ${variant} ${className ?? ""}`}
    >
      {icon && iconPosition === "left" && (
        <img src={icon} alt={iconAlt} className="button-icon" />
      )}
      {children ?? "Apply now"}
      {icon && iconPosition === "right" && (
        <img src={icon} alt={iconAlt} className="button-icon" />
      )}
    </button>
  );
};

export default Button;
