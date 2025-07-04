import { ReactNode } from 'react';

type ConditionalRenderProps = {
  children: ReactNode;
  fallback?: ReactNode;
  when: boolean;
};

export default function ConditionalRender({ children, fallback = null, when }: ConditionalRenderProps) {
  return when ? children : fallback;
};
