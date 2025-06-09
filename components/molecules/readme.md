# Molecules

This folder contains **molecule components**—combinations of atoms that form more complex UI elements. Molecules group atoms together to create reusable patterns, such as input fields with labels, button groups, or card components.

## Examples

- `InputField` (combines `Label` and `Input`)
- `ButtonGroup` (multiple `Button` atoms)
- `Card` (uses `Image`, `Text`, and `Button`)

## Usage

Import molecules into higher-level components (organisms or pages) to build more complex interfaces:

```tsx
import InputField from "@/components/molecules/input-field"
```

## Guidelines

- Compose molecules from atoms and keep them focused on a single responsibility.
- Avoid business logic; keep molecules presentational.
- Ensure molecules are reusable and consistent across the app.