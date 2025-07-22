import { IfProps } from "./if.types";

export default function If({
  children,
  fallback = null,
  when,
}: IfProps) {
  return when ? children : fallback;
}
