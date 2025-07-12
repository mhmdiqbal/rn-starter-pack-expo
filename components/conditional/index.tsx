import { ConditionalProps } from "./types";

export default function Conditional({
  children,
  fallback = null,
  when,
}: ConditionalProps) {
  return when ? children : fallback;
}
