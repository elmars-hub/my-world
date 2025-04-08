/**
 * Checks if an element has proper ARIA attributes
 */
export const hasAriaAttributes = (element: HTMLElement): boolean => {
  const ariaAttributes = [
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-hidden',
    'aria-expanded',
    'aria-controls',
    'aria-selected',
    'aria-checked',
    'aria-disabled',
    'aria-required',
    'aria-invalid',
  ];

  return ariaAttributes.some((attr) => element.hasAttribute(attr));
};

/**
 * Checks if an element is properly focusable
 */
export const isFocusable = (element: HTMLElement): boolean => {
  const focusableElements = [
    'a[href]',
    'button',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])',
  ];

  return focusableElements.some((selector) => element.matches(selector));
};

/**
 * Checks if an element has proper color contrast
 * Note: This is a basic implementation. For production, use a proper color contrast checker
 */
export const hasColorContrast = (
  backgroundColor: string,
  textColor: string
): boolean => {
  // Convert colors to RGB
  const getRGB = (color: string): [number, number, number] => {
    const temp = document.createElement('div');
    temp.style.color = color;
    document.body.appendChild(temp);
    const rgb = window.getComputedStyle(temp).color;
    document.body.removeChild(temp);
    const values = rgb.match(/\d+/g)?.map(Number) || [0, 0, 0];
    return [values[0], values[1], values[2]];
  };

  const bgRGB = getRGB(backgroundColor);
  const textRGB = getRGB(textColor);

  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const bgLuminance = getLuminance(bgRGB[0], bgRGB[1], bgRGB[2]);
  const textLuminance = getLuminance(textRGB[0], textRGB[1], textRGB[2]);

  // Calculate contrast ratio
  const lighter = Math.max(bgLuminance, textLuminance);
  const darker = Math.min(bgLuminance, textLuminance);
  const contrastRatio = (lighter + 0.05) / (darker + 0.05);

  // WCAG 2.0 requires a minimum contrast ratio of 4.5:1 for normal text
  return contrastRatio >= 4.5;
};

/**
 * Checks if an element has proper heading hierarchy
 */
export const hasProperHeadingHierarchy = (element: HTMLElement): boolean => {
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;

  for (const heading of headings) {
    const currentLevel = parseInt(heading.tagName[1]);
    if (currentLevel - previousLevel > 1) {
      return false;
    }
    previousLevel = currentLevel;
  }

  return true;
};

/**
 * Checks if an image has proper alt text
 */
export const hasAltText = (img: HTMLImageElement): boolean => {
  return Boolean(img.alt && img.alt.trim() !== '');
};

/**
 * Checks if a form control has an associated label
 */
export const hasAssociatedLabel = (control: HTMLElement): boolean => {
  if (control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement) {
    return Boolean(
      control.labels?.length ||
      control.getAttribute('aria-labelledby') ||
      control.getAttribute('aria-label')
    );
  }
  return false;
}; 