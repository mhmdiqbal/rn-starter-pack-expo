# Atoms

This folder contains **atomic components**—the smallest, most reusable UI elements in the project. Atoms are simple components such as buttons, icons, inputs, and text elements. They do not contain any business logic or state and are designed to be composed into larger components (molecules and organisms).

## Examples

- `Button`
- `Icon`
- `Input`
- `CounterButton`

## Usage

Import atoms into higher-level components to build more complex interfaces:

```tsx
import Button from "@/components/atoms/button"
```

## Guidelines

- Keep atoms focused and minimal.
- Avoid adding business logic or state.
- Ensure reusability and consistency across the app.