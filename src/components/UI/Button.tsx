import React from 'react';

/**
 * Props for the `Button` component.
 *
 * @prop {React.ReactNode} [children] - The content of the button.
 * @prop {React.ReactNode} [icon] - The icon of the button.
 * @prop {string} [className] - The CSS class name to apply to the button element.
 * @prop {boolean} [asChild] - Whether the button should be rendered as a child element or as a parent element.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

/**
 * A React component that renders a button.
 *
 * @param {ButtonProps} props
 * @param {React.ReactNode} [props.children] The content of the button.
 * @param {React.ReactNode} [props.icon] The icon of the button.
 * @param {string} [props.className] The CSS class name to apply to the button element.
 * @param {boolean} [props.asChild] Whether the button should be rendered as a child element or as a parent element.
 * @returns {React.ReactElement} A button element.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  icon = null,
  className = '',
  asChild = false,
  ...props
}: ButtonProps): React.ReactElement => {
  const baseClasses = `p-2
    text-[var(--text-primary)]
    transition-colors duration-200
    ${props.disabled ? 'opacity-50' : 'cursor-pointer hover:bg-[var(--bg-hover)] dark:hover:bg-gray-700'}
    `;

  return (
    <button
      className={`${baseClasses} ${asChild ? 'as-child' : ''} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
