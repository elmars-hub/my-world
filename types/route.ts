export interface NavItemHeaderAnimation {
  name: string;
}

export interface AnimationContainerProps {
  children: React.ReactNode;
  customClassName?: string;
  customDelay?: number;
}

export interface TimelineEventProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}

export interface ExternalLinkProps {
  href: string;
  customClassName?: string;
  children: React.ReactNode;
}
