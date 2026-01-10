# Atomic Design Implementation Guide

This stylesheet library follows the Atomic Design methodology, providing a scalable and maintainable approach to building UI components.

## Structure

```
StyleSheets/default/
├── 01-settings/      # Variables and configuration
├── 02-mixins/        # Reusable SASS mixins
├── 03-generic/       # Base styles (reset, typography, layout)
├── 04-atoms/         # Basic building blocks
├── 05-molecules/     # Simple component combinations
├── 06-organisms/     # Complex component structures
├── 07-templates/     # Page-level layouts
├── 08-utilities/     # Helper classes
├── 09-vendor/        # Third-party styles
└── 10-overrides/     # Project-specific overrides
```

## Atoms (Building Blocks)

### Buttons
```html
<button>Primary Button</button>
<button class="button-secondary">Secondary</button>
<button class="button-outline">Outline</button>
<button class="button-sm">Small</button>
<button class="button-lg">Large</button>
<button class="button-block">Full Width</button>
```

### Links
- Regular links with hover states
- Current page indicator: `aria-current="page"`
- Skip link for accessibility: `.skip-link`
- Auto-styled external links with icons

### Images
```html
<img src="..." class="img-fluid">
<img src="..." class="img-cover">
<img src="..." class="img-rounded">
<img src="..." class="img-circle">
<img src="..." class="img-shadow">
```

### Lists
```html
<ul class="list-check">      <!-- Checkmark bullets -->
<ul class="list-arrow">      <!-- Arrow bullets -->
<ul class="list-inline">     <!-- Horizontal list -->
<ul class="list-unstyled">   <!-- No bullets -->
```

## Molecules (Component Combinations)

### External Links
Automatically adds contextual icons:
- External: `↗` for `href^="https://"` or `href^="http://"`
- Email: `✉` for `href^="mailto:"`
- Phone: `☎` for `href^="tel:"`
- Download: `⬇` for download links or file extensions (.pdf, .doc, .zip)

To remove icon from same-domain link: `<a href="https://yourdomain.com" class="internal-link">`

### Button Group
```html
<div class="button-group">
  <button>Action 1</button>
  <button>Action 2</button>
</div>

<div class="button-group-attached">
  <button>Left</button>
  <button>Center</button>
  <button>Right</button>
</div>
```

### Media Object
```html
<div class="media-object">
  <div class="media-object-image">
    <img src="...">
  </div>
  <div class="media-object-content">
    <h3>Title</h3>
    <p>Description...</p>
  </div>
</div>
```

### Form Fields
```html
<div class="form-field">
  <label for="name">Name</label>
  <input type="text" id="name">
  <span class="form-field-help">Helper text</span>
</div>

<div class="form-field form-field-error">
  <label for="email">Email</label>
  <input type="email" id="email">
  <span class="form-field-error-message">Error message</span>
</div>
```

## Organisms (Complex Components)

### Navigation
```html
<!-- Horizontal Navigation -->
<nav class="navigation navigation-horizontal">
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>

<!-- Vertical Navigation -->
<nav class="navigation navigation-vertical">...</nav>

<!-- Breadcrumb -->
<nav>
  <ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Current</a></li>
  </ul>
</nav>
```

### Forms
```html
<form class="form">
  <div class="form-field">
    <label for="username">Username</label>
    <input type="text" id="username">
  </div>
  
  <div class="form-actions">
    <button type="submit">Submit</button>
    <button type="button" class="button-outline">Cancel</button>
  </div>
</form>

<!-- Form Grid Layout -->
<div class="form-grid">
  <div class="form-field">...</div>
  <div class="form-field">...</div>
</div>

<!-- Inline Form -->
<form class="form-inline">...</form>

<!-- Search Form -->
<form class="form-search">
  <input type="search">
  <button>Search</button>
</form>
```

## Customization

All components use CSS custom properties (variables) defined in `01-settings/_variables.sass`:

```sass
// Colors
--color-primary
--color-secondary
--color-accent

// Spacing
--space-xs, --space-sm, --space-md, --space-lg, --space-xl

// Typography
--font-family-base
--font-size-xs, sm, base, md, lg, xl, xxl, xxxl
--font-weight-normal, medium, bold

// Layout
--layout-radius
--layout-breakpoint-sm, md, lg, xl
```

Override these variables in your project to customize the design system.

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS Custom Properties (CSS Variables)
- Media queries with range syntax (width <=)
- color-mix() function for dynamic color generation

## Development

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run build:dev

# Production build
npm run build:production

# Lint SASS files
npm run sass:check

# Fix SASS issues
npm run sass:fix
```

## Best Practices

1. **Use semantic HTML** - Components work best with proper HTML structure
2. **Combine atoms to build molecules** - Reuse atomic components
3. **Keep components small** - Each component should do one thing well
4. **Use CSS variables** - Makes theming and customization easier
5. **Follow naming conventions** - Use BEM-style naming when needed
6. **Test responsive behavior** - All components are mobile-first
7. **Consider accessibility** - Use proper ARIA attributes and focus states

## Examples

See `/dist/demo.html` for a comprehensive showcase of all components.
