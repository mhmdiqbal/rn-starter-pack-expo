import { ReactNode } from "react";

export interface ConditionalProps {
  children: ReactNode;
  fallback?: ReactNode;
  when: boolean;
}
