import { render, screen, fireEvent } from '@testing-library/react';
import Image, { ImageProps } from './image';
import placeholderImage from '@/assets/images/placeholder.webp';

describe('Image Component', () => {
  const defaultProps: ImageProps = {
    src: 'valid-image.webp',
    alt: 'Valid image',
  };

  it('renders an image with a valid src', () => {
    render(<Image {...defaultProps} />);
    const imgElement = screen.getByAltText(defaultProps.alt);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/src/assets/images/valid-image.webp');
  });

  it('renders a fallback image if the main src is not found', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Image src="non-existent.webp" alt="Fallback image" fallbackSrc="fallback-image.webp" />);
    
    const imgElement = screen.getByAltText('Fallback image');
    fireEvent.error(imgElement);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/src/assets/images/fallback-image.webp');
    expect(consoleSpy).toHaveBeenCalledWith('Image not found or failed to load: non-existent.webp');
    consoleSpy.mockRestore();
  });

  it('renders a placeholder image if both src and fallbackSrc are not found', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Image src="non-existent.webp" alt="Placeholder" />);
    
    const imgElement = screen.getByAltText('Placeholder');
    fireEvent.error(imgElement);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', placeholderImage);
    expect(consoleSpy).toHaveBeenCalledWith('Image not found or failed to load: non-existent.webp');
    consoleSpy.mockRestore();
  });

  it('logs an error when the main image fails to load', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Image src="non-existent.webp" alt="Error image" />);
    const imgElement = screen.getByAltText('Error image');
    fireEvent.error(imgElement); // Simula el evento de error
    expect(consoleSpy).toHaveBeenCalledWith('Image not found or failed to load: non-existent.webp');
    consoleSpy.mockRestore();
  });
});
