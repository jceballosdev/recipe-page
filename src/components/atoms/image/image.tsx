'use client';
import React, { useState } from 'react';
import styles from './image.module.css';
import placeholderImage from '@/assets/images/placeholder.webp';

/**
 * Props for the Image component.
 * @property {string} src - The source filename for the image located in assets/images.
 * @property {string} alt - The alternative text for the image.
 * @property {string} [fallbackSrc] - The source filename for the fallback image located in assets/images.
 */
export interface ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

/**
 * Image component that dynamically loads an image from the assets/images folder.
 * If the specified image is not found or fails to load, a fallback or placeholder image is displayed.
 *
 * @param {ImageProps} props - Props to configure the image.
 * @returns {JSX.Element} A dynamically loaded image or a fallback/placeholder if not found.
 */
const Image: React.FC<ImageProps> = ({ src, alt, fallbackSrc }: ImageProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);

  // Helper to load image path from assets/images
  const loadImagePath = (fileName: string) => {
    const images = import.meta.glob('@/assets/images/*', { eager: true });
    return (images[`/src/assets/images/${fileName}`] as { default: string })?.default;
  };

  const imagePath = loadImagePath(src);
  const fallbackImagePath = fallbackSrc ? loadImagePath(fallbackSrc) : placeholderImage;
  const finalSrc = hasError || !imagePath ? fallbackImagePath : imagePath;

  return (
    <img
      className={styles.image}
      src={finalSrc}
      alt={alt}
      onError={() => {
        console.error(`Image not found or failed to load: ${src}`);
        setHasError(true);
      }}
    />
  );
};

export default Image;
