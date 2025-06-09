# Organisms

This folder contains **organism components**—complex, reusable UI sections composed of atoms and molecules. Organisms often represent distinct sections of a page, such as forms, navigation bars, or feature blocks.

## Examples

- `Header` (combines logo, navigation, and user menu)
- `LoginForm` (uses input fields, buttons, and validation messages)
- `ProductList` (renders multiple product cards)

## Usage

Import organisms into pages or templates to build complete layouts:

```tsx
import Header from "@/components/organisms/header"
```

## Guidelines

- Compose organisms from atoms and molecules.
- Organisms may contain some layout or presentational logic, but avoid business logic.
- Ensure organisms are reusable and consistent across the app.