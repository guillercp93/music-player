import React from 'react';
import { PlayerIcon } from '../icons';
import { Button } from './Button';
/**
 * A React component that renders a box with a background image, title, description,
 * and a play button. This component is designed to be used in a grid layout.
 *
 * @prop {string} image - The URL of the background image.
 * @prop {string} title - The title of the box.
 * @prop {string} [description] - The description of the box. Optional.
 * @prop {string} [customClass] - The CSS class name to apply to the box element.
 *     Optional.
 */

interface BoxProps {
  image: string;
  title: string;
  description?: string;
  customClass?: string;
}

/**
 * A React component that renders a box with a background image, title, description,
 * and a play button.
 *
 * @param {BoxProps} props The properties for the component.
 * @param {string} [props.image] The source URL of the background image.
 * @param {string} [props.title] The title of the box.
 * @param {string} [props.description] The description of the box.
 * @param {string} [props.customClass] The CSS class name to apply to the box element.
 * @returns {React.ReactElement} A React element for the box.
 */

export const Box = ({ image, title, description, customClass }: BoxProps) => {
  return (
    <div className={customClass}>
      <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg mb-4 overflow-hidden">
        <img
          srcSet={image}
          className="w-full h-full flex items-center justify-center text-4xl font-bold opacity-90"
          alt={title}
        />
      </div>
      <h2 className="text-lg font-semibold text-[var(--text-primary)] truncate">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--text-secondary)] text-sm mt-1">
          {description}
        </p>
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 rounded-xl">
        <Button
          icon={<PlayerIcon customClass="text-white h-10 w-10" />}
          aria-label="Play"
          className="text-2xl rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-130 bg-transparent hover:bg-transparent"
        />
      </div>
    </div>
  );
};
