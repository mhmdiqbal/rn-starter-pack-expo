import { ReactNode } from "react";

export interface IfProps {
  children: ReactNode;
  fallback?: ReactNode;
  when: boolean;
}
