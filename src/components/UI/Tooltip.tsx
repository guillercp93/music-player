import React, { ReactNode } from 'react';
/**
 * A React component that provides a tooltip for its child elements.
 *
 * @remarks
 * The position of the tooltip can be specified using the `position` property.
 * The default position is `top`.
 *
 * @example
 * <Tooltip text="This is a tooltip">Trigger element</Tooltip>
 *
 * @param {TooltipProps} props - The properties for the component.
 * @param {React.ReactNode} props.children - The content over which the tooltip will appear.
 * @param {string} props.text - The tooltip text to be displayed.
 * @param {'top' | 'right' | 'bottom' | 'left'} [props.position='top'] - The position of the tooltip relative to the child element.
 * @returns {JSX.Element} A React element that wraps its children with a tooltip.
 */

type TooltipProps = {
  children: ReactNode;
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
};

/**
 * A React component that provides a tooltip for its child elements.
 *
 * @param {TooltipProps} props The properties for the component.
 * @param {React.ReactNode} props.children The content over which the tooltip will appear.
 * @param {string} props.text The tooltip text to be displayed.
 * @param {'top' | 'right' | 'bottom' | 'left'} [props.position='top'] The position of the tooltip relative to the child element.
 * @returns {JSX.Element} A React element that wraps its children with a tooltip.
 */

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = 'top',
}) => {
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  };

  return (
    <div className="relative group flex">
      {children}
      <span
        className={`
          absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-200
          whitespace-nowrap
          ${positionClasses[position]}
        `}
      >
        {text}
      </span>
    </div>
  );
};
